const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  timer.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
startBtn.addEventListener("click", () => {
  interval = setInterval(updateTime, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;
});
pauseBtn.addEventListener('click', ()=>{
    clearInterval(interval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = false;
})
resetBtn.addEventListener('click',()=>{
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
    timer.textContent = "00:00:00";
})