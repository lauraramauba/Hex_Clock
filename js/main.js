let hour = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

function setDate() {
    const now = new Date();

    let currentHour = now.getHours();
    currentHour = ("0" + currentHour).slice(-2);
    const displayHour = new String(currentHour);
    hour.innerHTML = displayHour.toString() + ':';

    let currentMinutes = now.getMinutes();
    currentMinutes = ("0" + currentMinutes).slice(-2);
    const displayMinutes = new String(currentMinutes);
    minutes.innerHTML = displayMinutes.toString() + ':';

    let currentSeconds = now.getSeconds();
    currentSeconds = ("0" + currentSeconds).slice(-2);
    const displaySeconds = new String(currentSeconds);
    seconds.innerHTML = displaySeconds.toString();
    
    let rgbToHex = function (rgb) { 
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
             hex = "0" + hex;
        }
        return hex;
    };
    
    let fullColorHex = function(r,g,b) {  
        let hash = '#';
        let red = rgbToHex(r);
        let green = rgbToHex(g);
        let blue = rgbToHex(b);
        return hash+red+green+blue;
    };
    
    console.log(fullColorHex(displayHour, displayMinutes, displaySeconds));
    document.getElementById("container").style.background = fullColorHex(displayHour, displayMinutes, displaySeconds);
}

setInterval(setDate, 1000);
