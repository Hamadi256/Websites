window.addEventListener("load", function() {
    const main = this.document.getElementById("mainDiv");
    const input = this.document.getElementById("past-math");
    const output = this.document.getElementById("product");

    function removeLastCharacter(inputString) {
        console.log(input.innerHTML);
    }

    main.addEventListener("click", function(event) {
        let buttonName = event.target.textContent;
        if(event.target.classList.contains("actions")) {
            switch (buttonName) {
                case "+":
                    input.innerHTML += "+";
                    break;
                case "-":
                    input.innerHTML += "-";
                    break;
                case "%":
                    input.innerHTML += "%";
                    break;
                case "C":
                    input.innerHTML = "";
                    output.innerHTML = "";
                    break;
                case "CE":
                    output.innerHTML = "";
                    break;
                case "back":
                    input.innerHTML = input.innerHTML.slice(0, -1);
                    break;
                case "/":
                    input.innerHTML += "/";
                    break;
                case "x":
                    input.innerHTML += "*";
                    break;
                case "=":
                    try {output.innerHTML = math.evaluate(input.innerHTML);}
                    catch(error) {input.innerHTML = ""; output.innerHTML="ERROR"};
                    input.innerHTML = output.innerHTML;
                    
                    break;
            }
        }
        else if(event.target.classList.contains("inputs")) {
            switch (buttonName) {
                case "0":
                    input.innerHTML += "0";
                    break;
                case "1":
                    input.innerHTML += "1";
                    break;
                case "2":
                    input.innerHTML += "2";
                    break;
                case "3":
                    input.innerHTML += "3";
                    break;
                case "4":
                    input.innerHTML += "4";
                    break;
                case "5":
                    input.innerHTML += "5";
                    break;
                case "6":
                    input.innerHTML += "6";
                    break;
                case "7":
                    input.innerHTML += "7";
                    break;
                case "8":
                    input.innerHTML += "8";
                    break;
                case "9":
                    input.innerHTML += "9";
                    break;
                case ".":
                    input.innerHTML += ".";
                    break;
            }
        }
    })
})
