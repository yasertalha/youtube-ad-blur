let allowAutoSkip = true;

function handleAdState() {
  const player = document.querySelector(".html5-video-player");
  const video = document.querySelector("video");

  if (!player || !video) return;

  const isAdPlaying = player.classList.contains("ad-showing");

  // Cleanup old UI
  document.getElementById("yt-blur-overlay")?.remove();
  document.getElementById("yt-watch-ad-btn")?.remove();

  if (isAdPlaying && allowAutoSkip) {
    video.muted = true;

    // 🔹 Blur Overlay
    const overlay = document.createElement("div");
    overlay.id = "yt-blur-overlay";

    Object.assign(overlay.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "80%",
      backdropFilter: "blur(10px)",
      pointerEvents: "none",
      zIndex: "9999",
    });

    player.appendChild(overlay);

    // 🔹 Center "Watch Ad" Button
    const btn = document.createElement("button");
    btn.id = "yt-watch-ad-btn";
    btn.textContent = "Watch Ad";

    Object.assign(btn.style, {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "10px 22px",
      fontSize: "15px",
      fontWeight: "600",
      background: "rgba(0,0,0,0.85)",
      color: "#fff",
      border: "1px solid #fff",
      borderRadius: "6px",
      cursor: "pointer",
      zIndex: "10000",
      pointerEvents: "auto",
    });

    btn.onclick = () => {
      console.log("🎬 User chose to watch ad");

      allowAutoSkip = false; // stop auto skip
      video.muted = false; // unmute
      overlay.remove(); // remove blur
      btn.remove(); // remove button
    };

    player.appendChild(btn);
  }

  // Ad finished → reset
  if (!isAdPlaying) {
    resetAdHandling();
  }
}

function resetAdHandling() {
  allowAutoSkip = true;

  const video = document.querySelector("video");
  if (video) video.muted = false;

  document.getElementById("yt-blur-overlay")?.remove();
  document.getElementById("yt-watch-ad-btn")?.remove();
}

function tryToClickSkipButton() {
  if (!allowAutoSkip) return;

  const skipBtn = document.querySelector(
    ".ytp-skip-ad-button.ytp-ad-component--clickable"
  );

  if (!skipBtn) return;

  const rect = skipBtn.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return;

  const events = [
    new PointerEvent("pointerdown", { bubbles: true, isPrimary: true }),
    new MouseEvent("mousedown", { bubbles: true }),
    new PointerEvent("pointerup", { bubbles: true, isPrimary: true }),
    new MouseEvent("mouseup", { bubbles: true }),
    new MouseEvent("click", { bubbles: true }),
  ];

  events.forEach((e) => skipBtn.dispatchEvent(e));
}

// 🔁 Monitor
setInterval(() => {
  handleAdState();
  tryToClickSkipButton();
}, 300);
