'use strict'

;(function (){
    const daysBlock = document.querySelector('.timer__days');
    const hoursBlock = document.querySelector('.timer__hours');
    const minutesBlock = document.querySelector('.timer__minutes');
    const secondsBlock = document.querySelector('.timer__seconds');

    let interval;

    const updateTimer = () => {
        const date = new Date();
        const dateDeadline = new Date('25 april 2022').getTime();
        const timeRemaining = (dateDeadline - date) / 1000;

        const days = Math.floor( timeRemaining / 3600 / 24 );
        const hours = Math.floor( (timeRemaining / 3600 ) % 24);
        const minutes = Math.floor( (timeRemaining / 60) % 60);
        const seconds = Math.floor( timeRemaining % 60);

        const fDays = days > 10 ? days : '0' + days;
        const fHours = hours > 10 ? hours : '0' + hours;
        const fMinutes = minutes > 10 ? minutes : '0' + minutes;
        const fSeconds = seconds > 10 ? seconds : '0' + seconds;

        daysBlock.textContent = fDays;
        hoursBlock.textContent = fHours;
        minutesBlock.textContent = fMinutes;
        secondsBlock.textContent = fSeconds;

        if (timeRemaining <= 0) {
            clearInterval(interval);

            daysBlock.textContent = '00';
            hoursBlock.textContent = '00';
            minutesBlock.textContent = '00';
            secondsBlock.textContent = '00';
        }
    };

    updateTimer();
    interval = setInterval(updateTimer, 500);

    const numWord = (val, words) => {
        val = Math.abs (val) % 100;

    };

    let words = ['секунда', "секунды", "секунд"]

})();