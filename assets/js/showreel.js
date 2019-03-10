(function() {
  const $video = document.querySelector('.js-showreel');

  function addSourceToVideo(element, src, type) {
    var source = document.createElement('source');
    source.src = src;
    source.type = type;
    element.appendChild(source);
  }

  function handleClickVideo() {
    window.location.href = '/assets/videos/showreel_sep_2017.mp4';
  };

  window.onload = function() {
    setTimeout(function() {
      addSourceToVideo($video, '/assets/videos/showreel_sep_2017.mp4', 'video/mp4');
      addSourceToVideo($video, '/assets/videos/showreel_sep_2017.webm', 'video/mp4');
      $video.removeEventListener('click', handleClickVideo);
    }, 500);
  };

  $video.addEventListener('click', handleClickVideo);
})();
