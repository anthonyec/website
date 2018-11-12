(function() {
  const $scrollView = document.querySelector('.js-scroll-view');

  console.log($scrollView.scrollWidth);

  $scrollView.addEventListener('scroll', () => {
    console.log('scroll')
  });
})();
