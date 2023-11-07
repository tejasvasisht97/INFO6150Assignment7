let running = false;
let startTime;
let elapsedTime = 0;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    running = true;
    updateElapsedTime();
}

function stopTimer() {
    running = false;
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    updateTime();
    document.getElementById("time").textContent = '00' + ":" + '00' + ":" + '00';

}

function updateTime() {
    let currentTime = Date.now() - startTime;
    let hours = Math.floor(currentTime / 3600000);
    let minutes = Math.floor((currentTime % 3600000) / 60000);
    let seconds = Math.floor((currentTime % 60000) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById("time").textContent = hours + ":" + minutes + ":" + seconds;
}

async function updateElapsedTime() {
    while (running) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        elapsedTime = Date.now() - startTime;
        updateTime();
    }
}

document.getElementById("startBtn").addEventListener("click", function() {
    if (!running) {
        startTimer();
    }
});

document.getElementById("stopBtn").addEventListener("click", function() {
    if (running) {
        stopTimer();
    }
});

document.getElementById("resetBtn").addEventListener("click", function() {
    resetTimer();
});
