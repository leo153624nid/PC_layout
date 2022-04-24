'use strict'
;(function () {
    const contents = document.querySelectorAll('.program-line__content');
    const descrAll = document.querySelectorAll('.program-line__descr');

    contents.forEach( (elem) => {
        const title = elem.querySelector('.program-line__title');
        const descr = elem.querySelector('.program-line__descr');

        title.addEventListener('click', () => {
            noActive(descrAll);
            descr.classList.add('active');
        })
    } );

    // Функция получает массив обьектов с нужным классом и удаляет у всех класс "active"
    function noActive (arr) {    
        arr.forEach ( (elem) => {
            elem.classList.remove('active');
        } )
    }
})();


