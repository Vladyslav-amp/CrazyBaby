function changeLanguage(language) {
  const elements = document.querySelectorAll('[data-lang]');
  
  elements.forEach(element => {
      if (element.getAttribute('data-lang') === language) {
          element.style.display = 'block';
      } else {
          element.style.display = 'none';
      }
  });
}
