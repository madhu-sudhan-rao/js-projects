const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const secondsDigital = document.getElementById('seconds')
const minutesDigital = document.getElementById('minutes')
const hoursDigital = document.getElementById('hours')
const format = document.getElementById('format');

setInterval(setDate, 1000);

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    secondsDigital.innerText = seconds

    const minutes = now.getMinutes();
    const minsDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
    minutesDigital.innerText = minutes;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    hoursDigital.innerText = Math.round((hours / 24) * 10);

    if(hours < 12) {
        format.innerText = "AM";
    } else {
        format.innerText = "PM"
    }
}






