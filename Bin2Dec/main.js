window.addEventListener("load", function() {
    const form = document.getElementById("main_form");
    const input = document.getElementById("binaryInput");
    const output = document.getElementById("decimalOutput");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        output.value = parseInt(input.value, 2);
    })
})