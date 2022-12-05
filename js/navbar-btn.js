(function () {
    const menuBtn = document.querySelector('.navbar-menu__btn');
    const menu = document.querySelector('.navbar-menu__container')

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('_active');
        menu.classList.toggle('_active');
    })
}());