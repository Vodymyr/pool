document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const leftArrow = document.querySelector(".slider-arrow-left");
    const rightArrow = document.querySelector(".slider-arrow-right");
    const totalSlides = document.querySelectorAll(".slide").length;

    let currentSlide = 0;

    // Показать текущий слайд
    const updateSlider = () => {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    // Событие на левую стрелку
    leftArrow.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    // Событие на правую стрелку
    rightArrow.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });

    // Автопрокрутка слайдов каждые 5 секунд
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 5000);
});
