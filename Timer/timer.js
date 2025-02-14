'use strict'
const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-timer');
const stopButton = document.getElementById('stop-timer');
const resetButton = document.getElementById('reset-timer');

var timer;
var hours = 0;
var minutes = 0;
var seconds = 0;
var isRunning = false;

function start() {
    if (isRunning) return; 
    isRunning = true;

    timer = setInterval(function() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
}



function stop() {
    clearInterval(timer);
    isRunning = false;

}

function reset() {
    clearInterval(timer);
    isRunning = false;

    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();


    start()
}

function updateDisplay() {
    const displayHours = String(hours).padStart(2, '0');
    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(seconds).padStart(2, '0');
    timerDisplay.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

updateDisplay();

 


// JavaScript counts months from 0 to 11
// const a = new Date();
// console.log(a);
// const b = new Date("2022-03-25");
 
// console.log(b);

// const c = new Date(2025,11,12,0,33,55,0);
// console.log(c);

// const d = new Date(99, 11, 24);
// Clg