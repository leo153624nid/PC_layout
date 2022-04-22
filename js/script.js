'use strict'

const contents = document.querySelectorAll('.program-line__content');

contents.forEach( (elem) => {
    const title = elem.querySelector('.program-line__title');
    const descr = elem.querySelector('.program-line__descr');
    const descrAll = elem.querySelectorAll('.program-line__descr');

    title.addEventListener('click', () => {
        noActive();
        descr.classList.add('active');
    })
} );

function noActive () {
    const descrAll = document.querySelectorAll('.program-line__descr');
    
    descrAll.forEach ( (elem) => {
        elem.classList.remove('active');
    } )
}
