'use strict';

//make navbar and transparet

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})


//method
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
}

//navbar__logo

const navbarLogo = document.querySelector('.navbar__logo');

navbarLogo.addEventListener('click', () => {
    console.log('hello');
    scrollIntoView('#home');
});

//scroll to section

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
});

//contact scroll

const navbarContact = document.querySelector('.home_contact');

navbarContact.addEventListener('click', () => {
    scrollIntoView('#contact');

});

