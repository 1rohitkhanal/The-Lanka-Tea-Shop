const section = document.querySelector('.why-choose-us');

if (section) {
  function revealSection() {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;

    if (sectionTop < triggerPoint) {
      section.classList.add('in-view');
      window.removeEventListener('scroll', revealSection);
    }
  }

  window.addEventListener('scroll', revealSection);
  window.addEventListener('load', revealSection);
}
  document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
    const aboutSection = document.querySelector('#about');
    
    // Delay adding class slightly to allow smooth scroll
    setTimeout(() => {
      aboutSection.classList.add('highlighted');

      // Remove class after animation ends
      setTimeout(() => {
        aboutSection.classList.remove('highlighted');
      }, 1000);
    }, 400);
  });
