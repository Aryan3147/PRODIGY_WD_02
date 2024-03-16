let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startStopwatch() {
    isRunning = !isRunning;
    if (isRunning) {
        timer = setInterval(updateStopwatch, 10);
        document.getElementById("startStopBtn").textContent = "Stop";
    } else {
        clearInterval(timer);
        document.getElementById("startStopBtn").textContent = "Start";
    }
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
    document.getElementById("startStopBtn").textContent = "Start";
}

function updateStopwatch() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    let display = document.getElementById("display");
    display.textContent = formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds / 10);
}

function formatTime(time) {
    return time < 10 ? "0" + time.toFixed(0) : time.toFixed(0);
}

document.getElementById("startStopBtn").addEventListener("click", startStopwatch);
document.getElementById("resetBtn").addEventListener("click", resetStopwatch);
