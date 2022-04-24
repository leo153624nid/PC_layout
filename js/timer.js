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

        const fHours = hours > 10 ? hours : '0' + hours;
        const fMinutes = minutes > 10 ? minutes : '0' + minutes;
        const fSeconds = seconds > 10 ? seconds : '0' + seconds;

        hoursBlock.textContent = fHours;
        minutesBlock.textContent = fMinutes;
        secondsBlock.textContent = fSeconds;
    };

    updateTimer();
    setInterval(updateTimer, 500);

})();