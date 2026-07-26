(() => {
  const E = window.CareerEngine;
  const F = window.FBR_FIREBASE;
  const root = document.querySelector("#intro-root");
  let account = { state: F.state, user: null };
  let link = { online: false };
  let manualOpen = false;
  const gameChecks = new Set();

  const steps = [
    ["ACCOUNT", "Your career belongs to you."],
    ["CONTENT", "Build the paddock you actually own."],
    ["LINK", "Connect the game to your career."],
    ["GAME SETUP", "Prepare AMS2 for automatic race control."],
    ["DRIVER", "Put your name on the entry list."]
  ];
  const esc = value => String(value ?? "").replace(/[&<>"]/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"
  })[c]);

  function visible() {
    return manualOpen || !account.user || !E.state.onboarding.completed;
  }
  function currentStep() {
    if (!account.user) return 0;
    return Math.max(1, Math.min(4, Number(E.state.onboarding.step) || 1));
  }
  function shell(step, body, actions = "") {
    return `<section class="intro-screen">
      <div class="intro-atmosphere"></div>
      <header class="intro-brand"><span>F</span><div><strong>FLYBYRACE</strong><small>AMS2 DRIVER CAREER</small></div></header>
      <div class="intro-progress">${steps.map((item, index) => `<div class="${index < step ? "done" : index === step ? "active" : ""}"><i>${index < step ? "✓" : index + 1}</i><span><small>${item[0]}</small><b>${item[1]}</b></span></div>`).join("")}</div>
      <main class="intro-card step-${step}">${body}<footer>${actions}</footer></main>
      <p class="intro-footnote">FLYBYRACE SAVES YOUR CAREER TO YOUR GOOGLE ACCOUNT</p>
    </section>`;
  }
  function renderAccount() {
    const loading = account.state === "loading" || account.state === "syncing";
    const error = account.error ? `<div class="intro-error">${esc(account.error)}</div>` : "";
    return shell(0, `<div class="intro-copy">
      <span class="intro-kicker">WELCOME TO THE PADDOCK</span>
      <h1>START AT THE<br><em>BOTTOM.</em><br>EARN EVERYTHING.</h1>
      <p>A persistent Automobilista 2 career built around your results, your machinery and every opportunity you fight for.</p>
    </div>
    <div class="account-stage">
      <div class="account-orbit"><span>F</span><i></i><b>G</b></div>
      <h2>${loading ? "CONNECTING TO RACE CONTROL" : "SIGN IN TO BEGIN"}</h2>
      <p>One Google account synchronizes the web career and FlyByRace Link.</p>
      ${error}
      <button class="google-intro-button" data-intro-action="login" ${loading ? "disabled" : ""}><span>G</span>${loading ? "CHECKING SESSION…" : "CONTINUE WITH GOOGLE"}</button>
      <small>Your OAuth secret never enters the web page.</small>
    </div>`);
  }
  function renderContent(step) {
    const dlcs = [...new Set([...E.catalog.cars.map(x => x.dlc), ...E.catalog.tracks.map(x => x.dlc)])].sort();
    const owned = E.state.ownedDlc;
    return shell(step, `<div class="intro-heading"><span class="intro-kicker">CONTENT PROFILE</span><h1>WHAT'S IN YOUR GARAGE?</h1><p>FlyByRace only creates championships and rounds your AMS2 installation can run.</p></div>
      <div class="intro-stats"><div><strong>${E.catalog.cars.length}</strong><span>VEHICLES</span></div><div><strong>${E.catalog.tracks.length}</strong><span>LAYOUTS</span></div><div><strong>${owned.length}</strong><span>PACKS OWNED</span></div></div>
      <div class="intro-dlc-grid">${dlcs.map(name => {
        const active = owned.includes(name);
        const cars = E.catalog.cars.filter(x => x.dlc === name).length;
        const tracks = E.catalog.tracks.filter(x => x.dlc === name).length;
        return `<button class="${active ? "owned" : ""}" data-intro-action="dlc" data-value="${esc(name)}" ${name === "Base Game" ? "disabled" : ""}><i>${active ? "✓" : "+"}</i><span><strong>${esc(name)}</strong><small>${name === "Base Game" ? "CORE INSTALLATION" : `${cars} CARS · ${tracks} LAYOUTS`}</small></span></button>`;
      }).join("")}</div>`,
      `<button class="intro-back" data-intro-action="back">BACK</button><button class="intro-next" data-intro-action="next">CONFIRM ${owned.length} PACKS <span>→</span></button>`);
  }
  function renderLink(step) {
    const online = !!link.online && link.bridgeReady === true;
    return shell(step, `<div class="intro-heading"><span class="intro-kicker">NATIVE BRIDGE</span><h1>CONNECT FLYBYRACE LINK.</h1><p>The lightweight Windows companion launches sessions, watches AMS2 and sends telemetry without Electron or an embedded browser.</p></div>
      <div class="link-install-layout">
        <div class="link-device ${online ? "online" : ""}"><div class="link-device-title"><span>F</span><div><strong>FLYBYRACE LINK</strong><small>NATIVE · x64 · WPF</small></div><b>${online ? "ONLINE" : "WAITING"}</b></div><div class="link-signal"><i></i><i></i><i></i><span>${online ? "ACCOUNT BRIDGE CONNECTED" : "SIGN IN WITH THE SAME GOOGLE ACCOUNT"}</span></div><dl><div><dt>GAME PATH</dt><dd>${link.gamePathVerified ? "VERIFIED" : "PENDING"}</dd></div><div><dt>SERVER PATH</dt><dd>${link.serverPathVerified ? "VERIFIED" : "PENDING"}</dd></div><div><dt>LAST DEVICE</dt><dd>${esc(link.deviceName || "—")}</dd></div></dl></div>
        <div class="link-install-steps"><article><i>1</i><div><strong>DOWNLOAD & RUN</strong><p>The installer stays under 1 MB and adds Link to the Windows Start menu.</p></div></article><article><i>2</i><div><strong>SIGN IN WITH GOOGLE</strong><p>Use the same account shown in this browser.</p></div></article><article><i>3</i><div><strong>SELECT AMS2 PATHS</strong><p>Auto-detect Steam or select both folders once.</p></div></article>
        <a class="intro-download" href="./downloads/FlyByRace-Link-Setup.exe" download>DOWNLOAD LINK INSTALLER</a><button class="intro-refresh" data-intro-action="refresh-link">CHECK CONNECTION AGAIN</button></div>
      </div>`,
      `<button class="intro-back" data-intro-action="back">BACK</button><button class="intro-next" data-intro-action="next" ${online ? "" : "disabled"}>${online ? "LINK CONNECTED" : "WAITING FOR LINK"} <span>→</span></button>`);
  }
  function renderGame(step) {
    const checks = [
      ["shared", "SHARED MEMORY", "Set System → Shared Memory to Project CARS 2."],
      ["udp", "UDP FREQUENCY", "Set UDP Frequency to 1 for live telemetry."],
      ["protocol", "UDP PROTOCOL", "Select Project CARS 2 as the UDP protocol."],
      ["server", "DEDICATED SERVER", "Install Automobilista 2 Dedicated Server from Steam Tools."]
    ];
    return shell(step, `<div class="intro-heading"><span class="intro-kicker">ONE-TIME GAME SETUP</span><h1>LET LINK SEE THE RACE.</h1><p>These four AMS2 settings prepare automatic sessions and future telemetry result capture.</p></div>
      <div class="game-setup-list">${checks.map(([id, title, text], index) => `<button class="${gameChecks.has(id) ? "checked" : ""}" data-intro-action="game-check" data-value="${id}"><i>${gameChecks.has(id) ? "✓" : index + 1}</i><span><strong>${title}</strong><small>${text}</small></span></button>`).join("")}</div>
      <div class="setup-note"><span>i</span><p>FlyByRace will display the exact race preset before every round. Owned-car wear is enforced by FlyByRace scrutineering; global AMS2 random failures stay disabled.</p></div>`,
      `<button class="intro-back" data-intro-action="back">BACK</button><button class="intro-next" data-intro-action="next" ${gameChecks.size === checks.length ? "" : "disabled"}>SETUP COMPLETE <span>→</span></button>`);
  }
  function renderDriver(step) {
    const profile = E.state.profile;
    return shell(step, `<div class="intro-heading"><span class="intro-kicker">DRIVER REGISTRATION</span><h1>THE ENTRY LIST NEEDS A NAME.</h1><p>This identity appears on contracts, results and your permanent career record.</p></div>
      <div class="driver-registration">
        <div class="registration-number"><span>#</span><strong id="intro-number-preview">${profile.number}</strong><small>RACING NUMBER</small></div>
        <div class="registration-form"><label>DRIVER NAME<input id="intro-driver-name" value="${esc(profile.name)}" maxlength="40"></label><div><label>COUNTRY<input id="intro-driver-country" value="${esc(profile.country)}" maxlength="30"></label><label>RACING NUMBER<input id="intro-driver-number" type="number" min="0" max="999" value="${profile.number}"></label></div><div class="career-seal"><span>R</span><p><strong>ROOKIE PERMIT</strong><small>Issued when registration is complete</small></p></div></div>
      </div>`,
      `<button class="intro-back" data-intro-action="back">BACK</button><button class="intro-next finish" data-intro-action="finish">ENTER THE PADDOCK <span>→</span></button>`);
  }
  function driverInputActive() {
    const active = document.activeElement;
    return currentStep() === 4 && !!active && root.contains(active) && active.matches("#intro-driver-name, #intro-driver-country, #intro-driver-number");
  }
  function render() {
    document.body.classList.remove("intro-pending");
    if (!visible()) {
      root.innerHTML = "";
      root.hidden = true;
      document.body.classList.remove("intro-active");
      return;
    }
    root.hidden = false;
    document.body.classList.add("intro-active");
    const step = currentStep();
    root.innerHTML = step === 0 ? renderAccount() : step === 1 ? renderContent(step) : step === 2 ? renderLink(step) : step === 3 ? renderGame(step) : renderDriver(step);
  }
  function move(delta) {
    const next = Math.max(1, Math.min(4, currentStep() + delta));
    E.updateOnboarding({ step: next });
    render();
  }
  async function action(event) {
    const target = event.target.closest("[data-intro-action]");
    if (!target) return;
    const name = target.dataset.introAction;
    try {
      if (name === "login") await F.signIn();
      if (name === "dlc") E.toggleDlc(target.dataset.value);
      if (name === "next") move(1);
      if (name === "back") {
        if (currentStep() === 1 && !manualOpen) await F.signOut();
        else move(-1);
      }
      if (name === "refresh-link") {
        target.textContent = "CHECKING…";
        await new Promise(resolve => setTimeout(resolve, 900));
      }
      if (name === "game-check") {
        gameChecks.has(target.dataset.value) ? gameChecks.delete(target.dataset.value) : gameChecks.add(target.dataset.value);
      }
      if (name === "finish") {
        const nameInput = document.querySelector("#intro-driver-name");
        const countryInput = document.querySelector("#intro-driver-country");
        const numberInput = document.querySelector("#intro-driver-number");
        E.updateProfile({
          name: nameInput.value.trim() || "Driver",
          country: countryInput.value.trim() || "Unknown",
          number: Math.max(0, Number(numberInput.value) || 0)
        });
        E.updateOnboarding({ completed: true, step: 4, gameSettingsConfirmed: true });
        manualOpen = false;
        await F.saveNow();
      }
    } catch (error) {
      account = { ...account, error: error.message };
    }
    render();
  }

  root.addEventListener("click", action);
  root.addEventListener("input", event => {
    if (event.target.id === "intro-driver-number") {
      const preview = document.querySelector("#intro-number-preview");
      if (preview) preview.textContent = event.target.value || "0";
    }
  });
  window.addEventListener("fbr:account", event => {
    const previousUserId = account.user?.uid || null;
    account = event.detail;
    if (account.user && !E.state.onboarding.completed && currentStep() === 0) E.updateOnboarding({ step: 1 });
    const accountChanged = previousUserId !== (account.user?.uid || null);
    if (accountChanged || !driverInputActive()) render();
  });
  window.addEventListener("fbr:link-cloud", event => {
    link = event.detail || { online: false };
    if (currentStep() === 2) render();
  });
  window.addEventListener("fbr:open-onboarding", () => { manualOpen = true; render(); });
  window.addEventListener("fbr:state", () => {
    if (!driverInputActive()) render();
  });
  render();
})();
