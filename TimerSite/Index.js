let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let timeShown = document.getElementById("time")
let oneDay = document.getElementById("P1D");
let oneHour = document.getElementById("P1H");
let oneMinute = document.getElementById("P1M");
let oneSecond = document.getElementById("P1S");

let currentDays = 0;
let currentHours = 0;
let currentMinutes = 0;
let currentSeconds = 0;

oneDay.onclick = function() {
    currentDays++;
    timeShown.innerHTML = currentDays + "d:" + currentHours + "h:" + currentMinutes + "m:" + currentSeconds + "s";
}
oneHour.onclick = function() {
    currentHours++;
    timeShown.innerHTML = currentDays + "d:" + currentHours + "h:" + currentMinutes + "m:" + currentSeconds + "s";
}
oneMinute.onclick = function() {
    currentMinutes++;
    timeShown.innerHTML = currentDays + "d:" + currentHours + "h:" + currentMinutes + "m:" + currentSeconds + "s";
}
oneSecond.onclick = function() {
    currentSeconds++;
    timeShown.innerHTML = currentDays + "d:" + currentHours + "h:" + currentMinutes + "m:" + currentSeconds + "s";

}

start.onclick = function() {
    let myInterval = setInterval(function() {
        currentSeconds--;
        if(currentSeconds <= 0 && currentMinutes > 0)
        {
            currentSeconds = 59;
            currentMinutes--;
        }
        if(currentMinutes <= 0 && currentHours > 0)
        {
            currentMinutes = 59;
            currentSeconds = 59;
            currentHours--;
        }
        if(currentHours <= 0 && currentDays > 0)
        {
            if(currentHours == 1)
            {
                currentHours = 24
            }
            else {currentHours = 23};
            currentMinutes = 59;
            currentSeconds = 59;
            currentDays--;
            console.log("e")
        }

        timeShown.innerHTML = currentDays + "d:" + currentHours + "h:" + currentMinutes + "m:" + currentSeconds + "s";
        if(currentSeconds <= -1)
        {
            currentSeconds = 0;
            clearInterval(myInterval);
        }
    } ,1000)
    stop.onclick = function() {
        clearInterval(myInterval);
    }
    reset.onclick = function() {
        clearInterval(myInterval);
        currentDays = 0;
        currentHours = 0;
        currentMinutes = 0;
        currentSeconds = 0;
        timeShown.innerHTML = currentDays + "d:" + currentHours + "h:" + currentMinutes + "m:" + currentSeconds + "s";
    }
}

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log(json));


