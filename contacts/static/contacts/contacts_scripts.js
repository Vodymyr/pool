// contacts/static/contacts/contacts_scripts.js

// Проверка формы перед отправкой.
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            const name = form.querySelector('input[name="name"]').value.trim();
            const email = form.querySelector('input[name="email"]').value.trim();
            const message = form.querySelector('textarea[name="message"]').value.trim();

            if (!name || !email || !message) {
                e.preventDefault();
                alert("Пожалуйста, заполните все поля формы!");
            }
        });
    }
});
