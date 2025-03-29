let swiper = new Swiper(".mySwiper", {
    spaceBetween: 16,
    sliderPreView: 1,
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const readMore = document.querySelector('.readMore');

    toggleButton.addEventListener('click', () => {
      readMore.classList.toggle('moved');
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');

    button.addEventListener('click', () => {
      if (button.textContent === 'Показать все') {
        button.textContent = 'Скрыть';
      } else {
        button.textContent = 'Показать все'; 
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    let isRotated = false;
  
    button.addEventListener('click', () => {
      if (isRotated) {
        button.classList.remove('rotated'); 
      } else {
        button.classList.add('rotated');  
      }
  
      isRotated = !isRotated;
    });
  });
 