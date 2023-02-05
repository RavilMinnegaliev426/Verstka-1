// mobile Nav
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");
const mobileNav = document.querySelector(".mobile-nav");

mobileNavButton.addEventListener("click", function () {
  mobileNavIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});
// Video

const videoBtn = document.querySelector("#video-story-btn");
const videoFile = document.querySelector("#video-story");
const videoIconBtn = document.querySelector("#video-story-icon-btn");
const videoOverlay = document.querySelector("#video-story-overlay");

videoBtn.addEventListener("click", function () {
  function toggelOverlay(event) {
    if (event.type === "mouseleave") {
      videoOverlay.classList.add("hidden");
    } else {
      videoOverlay.classList.remove("hidden");
    }
  }

  if (videoFile.paused) {
    videoFile.play();
    videoIconBtn.src = "img/story/pause-white.svg";

    videoOverlay.onmouseleave = toggelOverlay;
    videoOverlay.onmouseenter = toggelOverlay;
  } else {
    videoFile.pause();
    videoIconBtn.src = "img/story/play-white.svg";
    videoOverlay.onmouseleave = null;
    videoOverlay.onmouseenter = null;
  }
});
