function updateClock() {
    const now = new Date();
    // TIME
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds= now.getSeconds();
// format time
hours = hours.toString().padStart(2, '0');
minutes = minutes.toString().padStart(2, '0');
seconds = seconds.toString().padStart(2, '0');
document.getElementById("time-display").textContent = `${hours}:${minutes}:${seconds}`;
// DATE
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dateString = now.toLocaleDateString('en-NG', options);
document.getElementById("date-display").textContent = dateString;
}
// Update the clock every second
setInterval(() => {updateClock();}, 1000);
//run once immediately to avoid delay
updateClock();