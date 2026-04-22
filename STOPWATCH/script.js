let startTime, timerInterval;
const timerDisplay = document.getElementById('timer');
const startStopBtn = document.getElementById('start-stop-btn');
const resetBtn = document.getElementById('reset-btn');

startStopBtn.addEventListener('click', () => {
    if (startStopBtn.textContent === 'Start') {
        startStopBtn.textContent = 'Stop';
        startTime = Date.now();
        timerInterval = setInterval(() => {
            const elapsed = (Date.now() - startTime) / 1000;
            timerDisplay.textContent = elapsed.toFixed(2);
        }, 100);
    } else {
        clearInterval(timerInterval);
        startStopBtn.textContent = 'Start';
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerDisplay.textContent = '0.00';
    startStopBtn.textContent = 'Start';
});
