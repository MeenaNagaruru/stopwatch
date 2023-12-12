const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const start = document.querySelector(".start");
const stopbtn = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let timer_paused;
let min = 0;
let sec = 0;

start.addEventListener("click", function () {
  clearInterval(timer_paused);
  timer_paused = setInterval(displaytime, 10);
});

stopbtn.addEventListener("click", function () {
  clearInterval(timer_paused);
});

reset.addEventListener("click", function () {
  min = 0;
  sec = 0;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
});

let displaytime = function () {
  sec++;
  if (sec == 99) {
    min++;
    sec = 0;
  }
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
};
vyhuhun;
