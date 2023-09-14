window.addEventListener("load", function() {
    const myCircles = document.getElementsByClassName("circle");
    const speedForm = document.getElementById("speedForm");
    const speedInput = document.getElementById("speedInput");
    const on = document.getElementById("on");
    const off = document.getElementById("off");
    
    let length = myCircles.length;
    on.addEventListener("click", function() {
        for(let i = 0; i < length; i++) {
        myCircles[i].style.animationPlayState = "running"
    }
    })

    off.addEventListener("click", function() {
        for(let i = 0; i < length; i++) {
            myCircles[i].style.animationPlayState = "paused";
        }
    })

    speedForm.addEventListener("submit", function(e) {
        e.preventDefault();
        for(let i = 0; i < length; i++) {
            myCircles[i].style.animationDuration = speedInput.value + "s";
        }
    })
})