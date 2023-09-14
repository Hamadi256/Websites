window.onload = function() {
    const expense_Form = document.getElementById("form-input")
    const type = document.getElementById("type");
    const name = document.getElementById("name");
    const amount = document.getElementById("amount");
    const date = document.getElementById("date");
    const table = document.getElementById("expense-table");
    var a = -1;
    
    if(!window.localStorage.getItem("ArrayKey"))
    {
        window.localStorage.setItem("ArrayKey", "ValuesArray")
    }

    var ValuesArray = JSON.parse(window.localStorage.getItem("ArrayKey"));
    for(i = 0; i < ValuesArray.length; i++)
    {
        AddOldExpenses(ValuesArray[i]);
    }


    expense_Form.onsubmit = function(event) {
        event.preventDefault();
        AddNewExpenses();
    }

    function AddNewExpenses() {
        if(!type.value || !name.value || !amount.value || !date.value)
        {
            alert("Please fill in the form correctly")
            return;
        }

        ValuesArray.push([type.value, name.value, amount.value, date.value]);
        window.localStorage.setItem("ArrayKey", JSON.stringify(ValuesArray));

        a++;
        const identifier = document.createElement("h1");
        identifier.innerHTML = a;
        identifier.setAttribute("hidden", true);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteRow");
        deleteButton.innerHTML = "DELETE";

        const row = table.insertRow(table.rows.length);
        row.insertCell(0).textContent = type.value;
        row.insertCell(1).textContent = name.value;
        row.insertCell(2).textContent = amount.value;
        row.insertCell(3).textContent = date.value;
        const deleteCell = row.insertCell(4);
        deleteCell.appendChild(deleteButton);

        
        const identifierCell = row.insertCell(5);
        identifierCell.setAttribute("hidden", true);
        identifierCell.appendChild(identifier);

        type.value = "";
        name.value = "";
        amount.value = "";
        date.value = "";

        deleteButton.onclick = function() {
            const rowIndex = deleteButton.parentNode.parentNode.rowIndex;
            ValuesArray.splice(identifier.innerHTML, 1);
            window.localStorage.setItem("ArrayKey", JSON.stringify(ValuesArray));
            table.deleteRow(rowIndex);
        }
    }








    function AddOldExpenses(Array) {
        a++;
        const identifier = document.createElement("h1");
        identifier.innerHTML = a;
        identifier.setAttribute("hidden", true);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteRow");
        deleteButton.innerHTML = "DELETE";

        const row = table.insertRow(table.rows.length);
        row.insertCell(0).textContent = Array[0];
        row.insertCell(1).textContent = Array[1];
        row.insertCell(2).textContent = Array[2];
        row.insertCell(3).textContent = Array[3];
        const deleteCell = row.insertCell(4);
        deleteCell.appendChild(deleteButton);

        
        const identifierCell = row.insertCell(5);
        identifierCell.setAttribute("hidden", true);
        identifierCell.appendChild(identifier);

        deleteButton.onclick = function() {
            const rowIndex = deleteButton.parentNode.parentNode.rowIndex;
            ValuesArray.splice(identifier.innerHTML, 1);
            window.localStorage.setItem("ArrayKey", JSON.stringify(ValuesArray));
            table.deleteRow(rowIndex);
        }
    }
}
