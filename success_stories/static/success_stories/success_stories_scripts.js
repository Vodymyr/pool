// success_stories/static/success_stories/success_stories_scripts.js

// Слайдер изображений (элементарная реализация).
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.success-slider');
    const slides = document.querySelectorAll('.success-slider img');
    let currentIndex = 0;

    if (slider && slides.length > 1) {
        setInterval(() => {
            slides[currentIndex].style.opacity = '0'; // Текущая картинка исчезает.
            currentIndex = (currentIndex + 1) % slides.length; // Переход к следующей.
            slides[currentIndex].style.opacity = '1'; // Следующая картинка появляется.
        }, 3000); // Интервал 3 секунды.
    }
});
