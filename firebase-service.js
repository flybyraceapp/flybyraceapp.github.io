(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyDB_S2bZjZLYiLntVfdfRUQeYYyQnIuP00",
    authDomain: "fly-by-race.firebaseapp.com",
    projectId: "fly-by-race",
    storageBucket: "fly-by-race.firebasestorage.app",
    messagingSenderId: "1049893529304",
    appId: "1:1049893529304:web:95f98fcdc175ea7caf99ad",
    measurementId: "G-WQJ7CEMJY7"
  };
  const SDK = "https://www.gstatic.com/firebasejs/12.16.0";
  const E = window.CareerEngine;
  const deviceKey = "flybyrace.web.device";
  const deviceId = localStorage.getItem(deviceKey) || (
    "web-" + (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36))
  );
  localStorage.setItem(deviceKey, deviceId);

  let appApi, authApi, storeApi, auth, db;
  let user = null;
  let cloudReady = false;
  let applyingRemote = false;
  let saveTimer = null;
  let heartbeatTimer = null;
  let careerUnsubscribe = null;
  let linkUnsubscribe = null;
  let authResolved;

  const authKnown = new Promise(resolve => { authResolved = resolve; });
  const service = window.FBR_FIREBASE = {
    state: "loading",
    user: null,
    link: { online: false },
    authKnown,
    ready: null,
    signIn,
    signOut,
    saveNow,
    sendLinkCommand
  };

  function emit(name, detail) {
    window.dispatchEvent(new CustomEvent(name, { detail }));
  }
  function serializableState() {
    return JSON.parse(JSON.stringify(E.state));
  }
  function sameState(a, b) {
    try { return JSON.stringify(a) === JSON.stringify(b); }
    catch { return false; }
  }
  function accountDetail(extra = {}) {
    return {
      state: service.state,
      user: user ? {
        uid: user.uid,
        displayName: user.displayName || E.state.profile.name,
        email: user.email || "",
        photoURL: user.photoURL || ""
      } : null,
      ...extra
    };
  }
  function resetCloudListeners() {
    if (careerUnsubscribe) careerUnsubscribe();
    if (linkUnsubscribe) linkUnsubscribe();
    careerUnsubscribe = linkUnsubscribe = null;
    if (heartbeatTimer) clearInterval(heartbeatTimer);
    heartbeatTimer = null;
    cloudReady = false;
  }

  async function initialize() {
    try {
      [appApi, authApi, storeApi] = await Promise.all([
        import(`${SDK}/firebase-app.js`),
        import(`${SDK}/firebase-auth.js`),
        import(`${SDK}/firebase-firestore.js`)
      ]);
      const firebaseApp = appApi.initializeApp(firebaseConfig);
      auth = authApi.getAuth(firebaseApp);
      db = storeApi.getFirestore(firebaseApp);
      await authApi.setPersistence(auth, authApi.browserLocalPersistence);
      authApi.onAuthStateChanged(auth, handleAuthState, error => {
        service.state = "error";
        emit("fbr:account", accountDetail({ error: error.message }));
        authResolved();
      });
      return service;
    } catch (error) {
      service.state = "error";
      emit("fbr:account", accountDetail({ error: error.message }));
      authResolved();
      throw error;
    }
  }

  async function handleAuthState(nextUser) {
    resetCloudListeners();
    user = nextUser;
    service.user = nextUser;
    if (!nextUser) {
      service.state = "signed-out";
      service.link = { online: false };
      emit("fbr:link-cloud", service.link);
      emit("fbr:account", accountDetail());
      authResolved();
      return;
    }
    service.state = "syncing";
    emit("fbr:account", accountDetail());
    try {
      await beginCloudSession(nextUser);
      service.state = "ready";
      emit("fbr:account", accountDetail());
    } catch (error) {
      service.state = "error";
      emit("fbr:account", accountDetail({ error: error.message }));
    } finally {
      authResolved();
    }
  }

  async function beginCloudSession(activeUser) {
    const userRef = storeApi.doc(db, "users", activeUser.uid);
    const careerRef = storeApi.doc(db, "users", activeUser.uid, "save", "career");
    const webRef = storeApi.doc(db, "users", activeUser.uid, "devices", "web");
    const linkRef = storeApi.doc(db, "users", activeUser.uid, "devices", "link");
    await storeApi.setDoc(userRef, {
      displayName: activeUser.displayName || "",
      email: activeUser.email || "",
      photoURL: activeUser.photoURL || "",
      lastSeen: storeApi.serverTimestamp()
    }, { merge: true });

    const cloudSave = await storeApi.getDoc(careerRef);
    if (cloudSave.exists() && cloudSave.data().state) {
      const remoteState = cloudSave.data().state;
      applyingRemote = true;
      E.replaceState(remoteState, "cloud-login");
      applyingRemote = false;
      if (remoteState.version !== E.version) await writeCareer(careerRef);
    } else {
      await writeCareer(careerRef);
    }
    cloudReady = true;

    careerUnsubscribe = storeApi.onSnapshot(careerRef, snapshot => {
      if (!snapshot.exists() || !snapshot.data().state || applyingRemote) return;
      const remoteState = snapshot.data().state;
      if (sameState(remoteState, serializableState())) return;
      applyingRemote = true;
      E.replaceState(remoteState, "cloud-live");
      applyingRemote = false;
      emit("fbr:cloud-save", { status: "downloaded" });
    }, error => emit("fbr:cloud-save", { status: "error", error: error.message }));

    linkUnsubscribe = storeApi.onSnapshot(linkRef, snapshot => {
      const data = snapshot.exists() ? snapshot.data() : {};
      const seen = data.updatedAt && data.updatedAt.toDate ? data.updatedAt.toDate().getTime() : 0;
      service.link = { ...data, online: Date.now() - seen < 20000 };
      emit("fbr:link-cloud", service.link);
    });

    const heartbeat = () => storeApi.setDoc(webRef, {
      online: true,
      deviceId,
      route: location.hash.slice(1) || "overview",
      updatedAt: storeApi.serverTimestamp()
    }, { merge: true }).catch(() => {});
    await heartbeat();
    heartbeatTimer = setInterval(heartbeat, 10000);
  }

  async function writeCareer(reference) {
    await storeApi.setDoc(reference, {
      version: E.version,
      state: serializableState(),
      source: deviceId,
      updatedAt: storeApi.serverTimestamp()
    });
    emit("fbr:cloud-save", { status: "saved" });
  }

  async function saveNow() {
    await service.ready;
    if (!user || !cloudReady || applyingRemote) return false;
    const reference = storeApi.doc(db, "users", user.uid, "save", "career");
    await writeCareer(reference);
    return true;
  }

  async function signIn() {
    await service.ready;
    const provider = new authApi.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      return await authApi.signInWithPopup(auth, provider);
    } catch (error) {
      if (error.code === "auth/popup-blocked") {
        return authApi.signInWithRedirect(auth, provider);
      }
      throw error;
    }
  }

  async function signOut() {
    await service.ready;
    return authApi.signOut(auth);
  }

  async function sendLinkCommand(command) {
    await service.ready;
    if (!user) throw new Error("Google sign-in required");
    if (!service.link.online || service.link.bridgeReady !== true) throw new Error("FlyByRace Link is not ready to receive commands");
    const reference = storeApi.doc(db, "users", user.uid, "bridge", "command");
    const commandId = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36);
    await storeApi.setDoc(reference, {
      ...command,
      commandId,
      status: "pending",
      createdAt: storeApi.serverTimestamp(),
      requestedBy: deviceId
    });
    return new Promise((resolve, reject) => {
      let unsubscribe = () => {};
      const timeout = setTimeout(() => {
        unsubscribe();
        reject(new Error("FlyByRace Link did not answer within 45 seconds"));
      }, 45000);
      unsubscribe = storeApi.onSnapshot(reference, snapshot => {
        if (!snapshot.exists()) return;
        const result = snapshot.data();
        if (result.commandId !== commandId) return;
        if (result.status === "completed") {
          clearTimeout(timeout);
          unsubscribe();
          resolve({ ok: true, commandId, cloud: true, message: result.message || "Session ready" });
        }
        if (result.status === "failed") {
          clearTimeout(timeout);
          unsubscribe();
          reject(new Error(result.message || "FlyByRace Link could not start the session"));
        }
      }, error => {
        clearTimeout(timeout);
        unsubscribe();
        reject(error);
      });
    });
  }

  window.addEventListener("fbr:state", event => {
    if (!cloudReady || applyingRemote || !user) return;
    const source = event.detail && event.detail.source;
    if (source && source.startsWith("cloud")) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => saveNow().catch(error => {
      emit("fbr:cloud-save", { status: "error", error: error.message });
    }), 700);
  });

  window.addEventListener("beforeunload", () => {
    if (!user || !db || !storeApi) return;
    const webRef = storeApi.doc(db, "users", user.uid, "devices", "web");
    storeApi.setDoc(webRef, { online: false, updatedAt: storeApi.serverTimestamp() }, { merge: true });
  });

  service.ready = initialize();
})();
