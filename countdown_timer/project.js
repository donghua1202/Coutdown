const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
//const dateEl = document.getElementById("date");

const targetDate = "25 Nov 2020";

function Countdown() {
  const newTarget = new Date(targetDate);
  //get the current date
  const currenDate = new Date();

  //get the exact time from current date to target date
  const timer = (newTarget - currenDate) / 1000;

  //get the time for each elments
  const days = Math.floor(timer / 3600 / 24);
  const hours = Math.floor(timer / 3600) % 24;
  const mins = Math.floor(timer / 60) % 60;
  const seconds = Math.floor(timer) % 60;

  //assgin the value to html

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);

  //console.log(currenDate);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

Countdown();

setInterval(Countdown, 1000);
