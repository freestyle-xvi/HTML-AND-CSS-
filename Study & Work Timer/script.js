// Variables for the normal timer
let normalTimerValue = 0;
let normalTimerInterval;
let normalTimerIsRunning = false;

// Variables for the custom timer
const customTimerInput = document.getElementById('custom-timer-input');
const customTimerStartButton = document.getElementById('custom-timer-start');
const customTimerStopButton = document.getElementById('custom-timer-stop');
const customTimerResetButton = document.getElementById('custom-timer-reset');
let customTimerValue = 0;
let customTimerInterval;
let customTimerIsRunning = false;

// Variables for the Pomodoro timer
const pomodoroTimerInput = document.getElementById('pomodoro-timer-input');
const pomodoroTimerStartButton = document.getElementById('pomodoro-timer-start');
const pomodoroTimerStopButton = document.getElementById('pomodoro-timer-stop');
const pomodoroTimerResetButton = document.getElementById('pomodoro-timer-reset');
const reminderText = document.getElementById('reminder-text');
let pomodoroTimerValue = 0;
let pomodoroTimerInterval;
let pomodoroTimerIsRunning = false;

// Function to update the normal timer display
function updateNormalTimerDisplay() {
    const minutes = Math.floor(normalTimerValue / 60).toString().padStart(2, '0');
    const seconds = (normalTimerValue % 60).toString().padStart(2, '0');
    document.getElementById('normal-timer').textContent = `${minutes}:${seconds}`;
}

// Function to start the normal timer
function startNormalTimer() {
    normalTimerValue = 25 * 60;
    updateNormalTimerDisplay();
    normalTimerIsRunning = true;
    normalTimerInterval = setInterval(() => {
        normalTimerValue--;
        updateNormalTimerDisplay();
        if (normalTimerValue === 0) {
            clearInterval(normalTimerInterval);
            normalTimerIsRunning = false;
            reminderText.innerHTML = 'Time to take a break and drink water!';
        }
    }, 1000);
}

// Function to stop the normal timer
function stopNormalTimer() {
    clearInterval(normalTimerInterval);
    normalTimerIsRunning = false;
}

// Function to reset the normal timer
function resetNormalTimer() {
    stopNormalTimer();
    normalTimerValue = 0;
    updateNormalTimerDisplay();
    reminderText.innerHTML = '';
}

// Function to update the custom timer display
function updateCustomTimerDisplay() {
    const minutes = Math.floor(customTimerValue / 60).toString().padStart(2, '0');
    const seconds = (customTimerValue % 60).toString().padStart(2, '0');
    document.getElementById('custom-timer').textContent = `${minutes}:${seconds}`;
}

// Function to start the custom timer
function startCustomTimer() {
    customTimerValue = customTimerInput.value * 60;
    updateCustomTimerDisplay();
    customTimerIsRunning = true;
    customTimerInterval = setInterval(() => {
        customTimerValue--;
        updateCustomTimerDisplay();
        if (customTimerValue === 0) {
            clearInterval(customTimerInterval);
            customTimerIsRunning = false;
        }
    }, 1000);
}

// Function to stop the custom timer
function stopCustomTimer() {
    clearInterval(customTimerInterval);
    customTimerIsRunning = false;
}

// Function to reset the custom timer
function resetCustomTimer() {
    stopCustomTimer();
    customTimerValue = 0;
    updateCustomTimerDisplay();
}

// Function to update the Pomodoro timer display
function updatePomodoroTimerDisplay() {
    const minutes = Math.floor(pomodoroTimerValue / 60).toString().padStart(2, '0');
    const seconds = (pomodoroTimerValue % 60).toString().padStart(2, '0');
    document.getElementById('pomodoro-timer').textContent = `${minutes}:${seconds}`;
}

// Function to start the Pomodoro timer
function startPomodoroTimer() {
    pomodoroTimerValue = pomodoroTimerInput.value * 60;
    updatePomodoroTimerDisplay();
    pomodoroTimerIsRunning = true;
    pomodoroTimerInterval = setInterval(() => {
        pomodoroTimerValue--;
        updatePomodoroTimerDisplay();
        if (pomodoroTimerValue === 0) {
            clearInterval(pomodoroTimerInterval);
            pomodoroTimerIsRunning = false;
            reminderText.innerHTML = 'Time to take a break and drink water!';
        }
    }, 1000);
}

// Function to stop the Pomodoro timer
function stopPomodoroTimer() {
    clearInterval(pomodoroTimerInterval);
    pomodoroTimerIsRunning = false;
}

// Function to reset the Pomodoro timer
function resetPomodoroTimer() {
    stopPomodoroTimer();
    pomodoroTimerValue = 0;
    updatePomodoroTimerDisplay();
    reminderText.innerHTML = '';
}

// Add event listeners to the buttons
document.getElementById('normal-timer-start').addEventListener('click', startNormalTimer);
document.getElementById('normal-timer-stop').addEventListener('click', stopNormalTimer);
document.getElementById('normal-timer-reset').addEventListener('click', resetNormalTimer);

customTimerStartButton.addEventListener('click', startCustomTimer);
customTimerStopButton.addEventListener('click', stopCustomTimer);
customTimerResetButton.addEventListener('click', resetCustomTimer);

document.getElementById('pomodoro-timer-start').addEventListener('click', startPomodoroTimer);
document.getElementById('pomodoro-timer-stop').addEventListener('click', stopPomodoroTimer);
document.getElementById('pomodoro-timer-reset').addEventListener('click', resetPomodoroTimer);

// Reminder to stand up and drink water every 30 minutes
setInterval(() => {
    if (normalTimerIsRunning || customTimerIsRunning || pomodoroTimerIsRunning) {
        reminderText.innerHTML = 'Time to stand up and drink water!';
    }
}, 30 * 60 * 1000);