(() => {
  const config = window.FBR_ADS_CONFIG || {};
  const hostAllowed = location.hostname === "flybyrace.com" || location.hostname === "www.flybyrace.com";
  const publisherValid = /^ca-pub-[0-9]{16}$/.test(config.publisherId || "");
  const slotValid = /^[0-9]{10}$/.test(config.bannerSlot || "");
  const container = document.querySelector("#fbr-ad-banner");
  const mount = document.querySelector("#fbr-ad-mount");
  let mounted = false;

  if (!container || !mount || !hostAllowed || !publisherValid || !slotValid) return;

  const hide = () => {
    container.hidden = true;
    mount.replaceChildren();
    mounted = false;
  };

  const tryMount = () => {
    if (mounted || !window.CareerEngine?.state?.onboarding?.completed) return;
    mounted = true;

    const unit = document.createElement("ins");
    unit.className = "adsbygoogle";
    unit.style.display = "block";
    unit.dataset.adClient = config.publisherId;
    unit.dataset.adSlot = config.bannerSlot;
    unit.dataset.adFormat = "horizontal";
    unit.dataset.fullWidthResponsive = "true";
    mount.appendChild(unit);
    container.hidden = false;

    const script = document.createElement("script");
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(config.publisherId);
    script.addEventListener("load", () => {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); }
      catch { hide(); }
    });
    script.addEventListener("error", hide);
    document.head.appendChild(script);
  };

  tryMount();
  window.addEventListener("fbr:state", tryMount);
})();
