// products/static/products/products_scripts.js

// Добавляем эффект увеличения карточек при наведении.
document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mouseover', function () {
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseout', function () {
            card.style.boxShadow = '';
            card.style.transform = 'scale(1)';
        });
    });
});
