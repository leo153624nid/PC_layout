'use strict'

const navbar = document.querySelector('.header__nav');
const links = navbar.querySelectorAll('a');

links.forEach ( (link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(document.querySelector(link.getAttribute('href')));
    })    
})