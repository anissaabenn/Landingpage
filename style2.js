const text = document.querySelector('h3');


function getChrono(){

const now = new Date().getTime();
const countdownDate = new Date('Jul 01, 2022').getTime();


const distanceBase = countdownDate - now;

const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60 * 60))
const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);

console.log(days, hours, minutes, seconds);

text.innerText = `${days}J ${hours}H ${minutes}M ${seconds}S` ;

}

getChrono()

const countDownInterval = setInterval(() => {

    getChrono()

}, 1000);