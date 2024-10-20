// Toggle side menu
function toggleMenu() {
    document.body.classList.toggle('side-menu-open');
}
  
  // Expand video to fullscreen
  function expandVideo(videoNum) {
    const fullscreenVideo = document.getElementById('fullscreenVideo');
    const fullVideo = document.getElementById('fullVideo');
  
    // Set the source of the video
    fullVideo.src = `/assets/video${videoNum}.mp4`;
  
    // Show the fullscreen video
    fullscreenVideo.style.display = 'flex';
  }
  
  // Close fullscreen
  function closeFullscreen() {
    const fullscreenVideo = document.getElementById('fullscreenVideo');
    const fullVideo = document.getElementById('fullVideo');
  
    // Hide the fullscreen video
    fullscreenVideo.style.display = 'none';
  
    // Stop the video
    fullVideo.src = '';
  }
  