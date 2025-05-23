function handleAdState() {
  const player = document.querySelector(".html5-video-player");
  const video = document.querySelector("video");

  if (!player || !video) return;

  const isAdPlaying = player.classList.contains("ad-showing");

  if (isAdPlaying) {
    video.muted = true;
    player.style.filter = "blur(6px)";
  } else {
    video.muted = false;
    player.style.filter = "none";
  }
}

function tryToClickSkipButton() {
  const skipBtn = document.querySelector(".ytp-skip-ad-button");
  if (skipBtn && skipBtn.offsetParent !== null) {
    console.log("✅ Skip button found. Attempting click...");

    // Simulate a real user click
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
  }, 500);
}

monitor();
