const openButton = document.querySelector(".hamburger-menu-link");
const overlay = document.querySelector(".overlay");
const bars = document.querySelector(".hamburger-menu-link__bars");
const closeButton = document.querySelector('.hamburger-menu-link');
const menuLink = document.querySelectorAll('.overlay__item a');
const teamAccoTrigger = document.querySelectorAll('.team_acco__trigger');
const crosses = document.querySelectorAll('.cross');

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

const accordElementVertical = document.querySelector('.team-acco');
const accordElementHorizontal = document.querySelector('.accordion-menu__list');



createAccordVertical(accordElementVertical);
createAccordHorizontal(accordElementHorizontal);



function createAccordVertical(element) {

    element.addEventListener('click', function (event) {
        let activeContent = document.querySelector('.team-acco__item_active');

        if (event.target.classList.contains('team-acco__trigger')) {
            const accoTrigger = event.target;
            const accoItem = accoTrigger.parentNode;
            if (activeContent != null) {
                activeContent.classList.remove('team-acco__item_active');
            }
            if (activeContent !== accoItem) {
                accoItem.classList.add('team-acco__item_active');
            }
        }
    });
}

function createAccordHorizontal(element) {

    element.addEventListener('click', function (event) {
        let activeContent = document.querySelector('.accordion-menu__elem_active');

        if (event.target.classList.contains('accordion-menu__link')) {
            const accoTrigger = event.target;
            const accoItem = accoTrigger.parentNode;
            if (activeContent != null) {
                activeContent.classList.remove('accordion-menu__elem_active');
            }
            if (activeContent !== accoItem) {
                accoItem.classList.add('accordion-menu__elem_active');
                accordElementHorizontal.classList.add('accordion-menu__list_active');
            }

            if (activeContent === accoItem) {
                accordElementHorizontal.classList.remove('accordion-menu__list_active');
            }
        }

        activeContent = document.querySelector('.accordion-menu__elem_active');

    });
}

for (var i = 0; i < crosses.length; i++) {
    cross = crosses[i];
    cross.addEventListener('click', function (e) {
        e.preventDefault();
        let activeContent = document.querySelector('.accordion-menu__elem_active');
        accordElementHorizontal.classList.remove('accordion-menu__list_active');
        activeContent.classList.remove('accordion-menu__elem_active');

    })
}