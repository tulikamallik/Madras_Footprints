
document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnlogin-popup');

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('show-register');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('show-register');
    });

    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('show-register');
    });
});