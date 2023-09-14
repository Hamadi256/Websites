window.addEventListener("load", function() {

    const topLeft = document.getElementById("input1")
    const bottomLeft = document.getElementById("input3")
    const topRight = document.getElementById("input2")
    const bottomRight = document.getElementById("input4")

    const textArea = document.getElementById("textArea");
    const output = document.getElementById("output");
    const copy = document.getElementById("copy");
    
    function updateOutput(topLeftValue, bottomLeftValue, topRightValue, bottomRightValue) {
        output.setAttribute("readonly", false);
        output.value = `border-radius: ${topLeftValue}px ${topRightValue}px ${bottomRightValue}px ${bottomLeftValue}px`;
        output.setAttribute("readonly", true);
    }

    topLeft.addEventListener("input", function() {
        textArea.style.borderTopLeftRadius = topLeft.value + "px";
        updateOutput(topLeft.value, bottomLeft.value, topRight.value, bottomRight.value);
    });

    topRight.addEventListener("input", function() {
        textArea.style.borderTopRightRadius = topRight.value + "px";
        updateOutput(topLeft.value, bottomLeft.value, topRight.value, bottomRight.value);
    });

    bottomLeft.addEventListener("input", function() {
        textArea.style.borderBottomLeftRadius = bottomLeft.value + "px";
        updateOutput(topLeft.value, bottomLeft.value, topRight.value, bottomRight.value);
    });

    bottomRight.addEventListener("input", function() {
        textArea.style.borderBottomRightRadius = bottomRight.value + "px";
        updateOutput(topLeft.value, bottomLeft.value, topRight.value, bottomRight.value);
    });

    copy.addEventListener("click", function() {
        output.select();
        output.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(output.value);

    })
})

