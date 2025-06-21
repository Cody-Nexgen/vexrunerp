// 🌗 Theme Toggle
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// ⚙️ Settings Dropdown
document.getElementById("settingsIcon").addEventListener("click", () => {
  document.getElementById("settingsMenu").classList.toggle("hidden");
});

// Accordion Toggle (if you're using this setup)
document.querySelectorAll(".accordion-toggle")?.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.target);
    target.classList.toggle("open");
  });
});

// Learn More Button
document.getElementById("learnMoreBtn")?.addEventListener("click", () => {
  document.getElementById("majorGroup")?.classList.remove("open");
  document.getElementById("minorGroup")?.classList.add("open");
});

// 👁️ Secret Click Logic with Hidden Console Message + Fake POST
let clickCount = 0;
let timer = null;
let overseerTriggered = false;

document.getElementById("secretBtn").addEventListener("click", () => {
  if (overseerTriggered) return;

  clickCount++;
  if (clickCount === 1) {
    timer = setTimeout(() => (clickCount = 0), 5000);
  }

  if (clickCount === 4) {
    clickCount = 0;
    clearTimeout(timer);

    if (!document.body.classList.contains("light")) {
      overseerTriggered = true;
      document.getElementById("overseer").classList.remove("hidden");

      // 🔒 Secret console easter egg
      console.log("%c👁️ Overseer is watching you.", "color:#3b82f6; font-weight:bold;");

      // 🛰️ Silent fake API POST
      fetch("https://api.vexrune.ai/overseer/ping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: Date.now(),
          user: "anonymous",
          event: "overseer_awakened"
        })
      }).catch(() => {}); // totally silent fail if fake URL
    }
  }
});
