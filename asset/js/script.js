/* Sfruttiamo le timing functions 
per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown 
dovrà scalare fino alle 9:30 di domani mattina! */

const dayEl = document.getElementById("day");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function calculateDate() {
  const data = new Date();
  const tomorrowDate = new Date();
  //creo la data di domani
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  tomorrowDate.setHours(9);
  tomorrowDate.setMinutes(30);
  tomorrowDate.setSeconds(0);
  tomorrowDate.setMilliseconds(0);
  console.log(tomorrowDate);
  //trovo i millisecondi
  let difference = data - tomorrowDate;
  console.log(difference);
  //calcolo i vari elementi
  let seconds = Math.floor(difference / 1000);
  console.log(seconds);
  let minutes = Math.floor(seconds / 60);
  console.log(minutes);
  let hours = Math.floor(minutes / 60);
  console.log(hours);
  let day = Math.floor(hours / 24);
  console.log(day);
  //li trasformo
  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  //stampo in pagina
  console.log(seconds, minutes, hours);

  dayEl.innerHTML = day;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}

calculateDate();
setInterval(calculateDate, 1000);
