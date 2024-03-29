window.onload = function() {
  DetectScroll();
}

function DetectScroll() {
  const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('scroll-anim');
      }
    });
  });
  
  observer.observe(document.querySelector('playFadeIn'));
  DetectScroll();
}