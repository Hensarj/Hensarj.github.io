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


const left = document.querySelector(".slider__arrow_left");
const right = document.querySelector(".slider__arrow_right");
const items = document.querySelector(".slider__list");
const item = document.querySelector(".slider__elem");

const minRight = 0;
const stepElem = getComputedStyle(item);
step = parseInt(stepElem.width);
const maxRight = 2 * step;

let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentRight < maxRight) {
        currentRight += step;
        items.style.right = currentRight + "px";
    }
});

left.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentRight > minRight) {
        currentRight -= step;
        items.style.right = currentRight + "px";
    }
});

const additional = document.querySelectorAll('.btn--color_black');
const overlayReview = document.querySelector('.overlay-reviews');
const reviewsClose = document.querySelector('#reviews__close');
const reviewsContent = document.querySelector('.overlay-reviews__content');


for (var i = 0; i < additional.length; i++) {
    additional[i].addEventListener('click', function (e) {
        e.preventDefault();
        overlayReview.style.display = 'block';
        let text = this.previousElementSibling.textContent;
        reviewsContent.textContent = text;


    });
}

reviewsClose.addEventListener('click', function (e) {
    e.preventDefault();
    overlayReview.style.display = 'none';


})

const myForm = document.querySelector('.form__elem');
const sendButton = document.querySelector('#order');

sendButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (validateForm(myForm)) {
        const data = new FormData();
        data.append('name', myForm.elements.name.value);
        data.append('phone', myForm.elements.phone.value);
        data.append('comment', myForm.elements.comment.value);
        data.append('to', "oleg.abalyaev@gmail.com");

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(data);
        xhr.addEventListener('load', function () {
            console.log(xhr.response);
        });
    };

    function validateForm(form) {


        let valid = true;
        if (!validateField(form.elements.name)) {
            valid = false;
        }
        if (!validateField(form.elements.phone)) {
            valid = false;
        }
        if (!validateField(form.elements.comment)) {
            valid = false;
        }
        return valid;
    }

    function validateField(field) {
        return field.checkValidity();
    }
})