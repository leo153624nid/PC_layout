'use strict'

const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const courseBtn = document.querySelector('.course__button');

// Появление модального окна по кнопке "Оставить заявку"
modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
})

// Появление модального окна по кнопке "Заказать курс"
courseBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
})

// Закрытие модального окна по клику вне зоны модального окна
modal.addEventListener('click', (event) => {
    const modalContent = event.target.closest('.modal__inner');
    
    if (!modalContent) {
        modal.style.display = '';
    } 
})

