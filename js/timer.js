'use strict'

;(function (){
    const date = new Date();
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hoursBlock = document.querySelector('.timer__hours');
    const minutesBlock = document.querySelector('.timer__minutes');
    const secondsBlock = document.querySelector('.timer__seconds');

})();