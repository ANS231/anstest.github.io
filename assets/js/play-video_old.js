// File: ../assets/js/play-video.js

document.addEventListener('DOMContentLoaded', () => {
  // Select all play buttons
  const playButtons = document.querySelectorAll('.play-btn');

  // Add click event listeners to each button
  playButtons.forEach((button) => {
    button.addEventListener('click', function () {
      // Show the fullscreen video overlay
      const fullscreenVideo = document.getElementById('fullscreen-video');
      const videoElement = document.getElementById('fullscreen-video-element');

      fullscreenVideo.style.display = 'flex';
      videoElement.play();
    });
  });
});

// Function to close the video overlay
function closeVideo() {
  const fullscreenVideo = document.getElementById('fullscreen-video');
  const videoElement = document.getElementById('fullscreen-video-element');

  videoElement.pause();
  videoElement.currentTime = 0; // Reset video playback
  fullscreenVideo.style.display = 'none';
}
