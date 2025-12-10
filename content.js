function handleAdState() {
  const player = document.querySelector(".html5-video-player");
  const video = document.querySelector("video");

  if (!player || !video) return;

  const isAdPlaying = player.classList.contains("ad-showing");

  // Remove old blur overlay
  const oldOverlay = document.getElementById("yt-blur-overlay");
  if (oldOverlay) oldOverlay.remove();

  if (isAdPlaying) {
    video.muted = true;

    // Create a new overlay that hides TOP 90%
    const overlay = document.createElement("div");
    overlay.id = "yt-blur-overlay";

    Object.assign(overlay.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "80%", // Only blur top 90%
      backdropFilter: "blur(10px)", // Blurring effect
      pointerEvents: "none", // Do NOT block skip button clicks
      zIndex: "9999",
    });

    player.appendChild(overlay);
  } else {
    video.muted = false;

    const overlay = document.getElementById("yt-blur-overlay");
    if (overlay) overlay.remove();
  }
}

function tryToClickSkipButton() {
  const skipBtn = document.querySelector(".ytp-skip-ad-button");
  if (skipBtn && skipBtn.offsetParent !== null) {
    console.log("✅ Skip button found. Attempting click...");

    skipBtn.click();

    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    skipBtn.dispatchEvent(event);
  }
}

// Monitor continuously
function monitor() {
  setInterval(() => {
    handleAdState();
    tryToClickSkipButton();
  }, 700);
}

monitor();
