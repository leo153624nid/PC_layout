'use strict'

;(function (){
    const hoursBlock = document.querySelector('.timer__hours');
    const minutesBlock = document.querySelector('.timer__minutes');
    const secondsBlock = document.querySelector('.timer__seconds');

    const updateTimer = () => {
        const date = new Date();

        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        hoursBlock.textContent = hours;
        minutesBlock.textContent = minutes;
        secondsBlock.textContent = seconds;
    };

    updateTimer();
    setInterval(updateTimer, 500);

})();