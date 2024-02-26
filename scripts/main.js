const slides = document.querySelectorAll('.features__card-main');
const pagination = document.querySelector('.features-slider__pagination');
let slideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
  updatePagination(index);
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

function updatePagination(index) {
  pagination.innerHTML = `${index + 1} / ${slides.length}`;
}

showSlide(slideIndex);

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1280) {
    // Jeśli szerokość ekranu jest większa niż 1280px, wyświetl wszystkie slajdy
    slides.forEach(slide => {
      slide.style.display = 'block';
    });
  } else {
    // W przeciwnym razie pokaż tylko aktywny slajd
    showSlide(slideIndex);
  }
});
