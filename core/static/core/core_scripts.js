// core/static/core/core_scripts.js

// Анимация появления текста на главной странице.
document.addEventListener('DOMContentLoaded', function () {
    const bannerText = document.querySelector('.banner h1');
    if (bannerText) {
        bannerText.style.opacity = '0';
        bannerText.style.transform = 'translateY(20px)';
        setTimeout(() => {
            bannerText.style.opacity = '1';
            bannerText.style.transform = 'translateY(0)';
            bannerText.style.transition = 'all 0.8s ease';
        }, 300);
    }
});
