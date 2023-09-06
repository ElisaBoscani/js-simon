/* Sfruttiamo le timing functions 
per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown 
dovrà scalare fino alle 9:30 di domani mattina! */

const dayEl = document.getElementById("day");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let countdown = setInterval(function () {
  const data = new Date();
  const tomorrowDate = new Date(2023, 8, 6, 23, 38);
  console.log(tomorrowDate);
  //trovo i millisecondi
  let difference = tomorrowDate - data;
  console.log(difference);
  //calcolo i vari elementi

  const day = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  //li trasformo

  //stampo in pagina
  console.log(seconds, minutes, hours);

  dayEl.innerHTML = day;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
  if (difference < 0) {
    clearInterval(countdown);
  }
}, 1000);
