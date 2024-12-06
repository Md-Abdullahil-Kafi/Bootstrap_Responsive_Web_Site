


function clock(){
    let timeObj = new Date();
    let timeStamp = `${timeObj.getHours()}:${timeObj.getMinutes()}:${timeObj.getSeconds()}`;
    let clock = document.getElementById('clock');
    clock.innerText = timeStamp;
}
window.setInterval(clock, 1000);
const date = new Date();
document.getElementById("date").innerHTML = date;