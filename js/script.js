const openButton = document.querySelector(".hamburger-menu-link");
const overlay = document.querySelector(".overlay");
const bars = document.querySelector(".hamburger-menu-link__bars");
const closeButton = document.querySelector('.hamburger-menu-link');
const menuLink = document.querySelectorAll('.overlay__item a');

openButton.addEventListener('click', function (e) {
    e.preventDefault();
    bars.classList.toggle('hamburger-menu-link--crossed');
    if (overlay.style.display === 'flex') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'flex';
    };
});

for (var i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function () {
        bars.classList.toggle('hamburger-menu-link--crossed');
        if (overlay.style.display === 'flex') {
            overlay.style.display = 'none';
        } else {
            overlay.style.display = 'flex';
        };
    });
}