// about/static/about/about_scripts.js

// Эффект появления изображения профиля.
document.addEventListener('DOMContentLoaded', function () {
    const profileImage = document.querySelector('.about-page img');
    if (profileImage) {
        profileImage.style.opacity = '0';
        profileImage.style.transition = 'opacity 1s ease';

        // Имитируем задержку загрузки.
        setTimeout(() => {
            profileImage.style.opacity = '1';
        }, 500);
    }
});
