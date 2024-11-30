document.addEventListener('DOMContentLoaded', () => {
  // Select all play buttons
  const playButtons = document.querySelectorAll('.play-btn');

  // Add click event listeners to each button
  playButtons.forEach((button) => {
    button.addEventListener('click', function () {
      // Get the associated video ID from a data attribute
      const videoId = this.getAttribute('data-video-id');
      const fullscreenVideo = document.getElementById(`fullscreen-${videoId}`);
      const videoElement = document.getElementById(videoId);

      // Show the fullscreen video overlay
      fullscreenVideo.style.display = 'flex';
      videoElement.play();
    });
  });
});

// Function to close the video overlay
function closeVideo(videoOverlayId) {
  const fullscreenVideo = document.getElementById(videoOverlayId);
  const videoElement = fullscreenVideo.querySelector('video');

  // Pause and reset the video playback
  videoElement.pause();
  videoElement.currentTime = 0;
  fullscreenVideo.style.display = 'none';
}
