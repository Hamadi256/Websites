window.onload = function() {
    const tasks = document.getElementById("tasks");
    const task_form = document.getElementById("new-task-form");
    var a = -1;

    var tasksArray = [];
    if(!window.localStorage.getItem("taskArray"))
    {
        window.localStorage.setItem("taskArray", tasksArray);
        
    }
    if(window.localStorage.getItem("taskArray"))
    {
        tasksArray = JSON.parse(window.localStorage.getItem("taskArray"));
        for(i = 0; i < tasksArray.length; i++)
        {
            MakeArrayElement(tasksArray[i]);
            console.log(tasksArray[i]);
        }
    }

    task_form.onsubmit = function(event) {
        event.preventDefault();
        MakeElement();
    }
        
        function MakeElement() {
            const inputText = document.getElementById("new-task-input");
        
            if(!inputText.value)
            {
                alert("Please add a Task");
                return;
            }
            a++;
    
            const task = document.createElement("div");
            task.classList.add("task");
        
            const task_identify = document.createElement("h1");
            task_identify.setAttribute("hidden", true);
            task_identify.classList.add("task-identify");
            task_identify.innerHTML = a;
            task.appendChild(task_identify);

            const task_input = document.createElement("input");
            task_input.value = inputText.value;
            task_input.setAttribute("readonly", "readonly");
            task_input.classList.add("task-input");
            task.appendChild(task_input);

            const action = document.createElement("div");
            action.classList.add("action");

            const editButton = document.createElement("button");
            editButton.classList.add("edit");
            editButton.innerHTML = "edit";
            action.appendChild(editButton);

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete");
            deleteButton.innerHTML = "delete";
            action.appendChild(deleteButton);

            task.appendChild(action);
            tasks.appendChild(task);

            tasksArray.push(inputText.value);
            window.localStorage.setItem("taskArray", JSON.stringify(tasksArray));
            inputText.value = "";

            editButton.onclick = function() {
                if(editButton.innerHTML == "edit")
                {
                    task_input.focus();
                    task_input.removeAttribute("readonly");
                    editButton.innerHTML = "save";    
                }

                else  {
                    task_input.setAttribute("readonly", true);
                    editButton.innerHTML = "edit";
                    tasksArray[task_identify.innerHTML] = task_input.value;
                    window.localStorage.setItem("taskArray", JSON.stringify(tasksArray));
                }
            }

            deleteButton.onclick = function() {
                console.log(task_identify.innerHTML);
                tasksArray.splice(task_identify.innerHTML, 1);
                window.localStorage.setItem("taskArray", JSON.stringify(tasksArray));
                tasks.removeChild(task); 
            }
        }


        function MakeArrayElement(inputString) {
            const inputText = inputString;
        
            a++;
    
            const task = document.createElement("div");
            task.classList.add("task");
        
            const task_identify = document.createElement("h1");
            task_identify.setAttribute("hidden", true);
            task_identify.classList.add("task-identify");
            task_identify.innerHTML = a;
            task.appendChild(task_identify);

            const task_input = document.createElement("input");
            task_input.value = inputText;
            task_input.setAttribute("readonly", "readonly");
            task_input.classList.add("task-input");
            task.appendChild(task_input);

            const action = document.createElement("div");
            action.classList.add("action");

            const editButton = document.createElement("button");
            editButton.classList.add("edit");
            editButton.innerHTML = "edit";
            action.appendChild(editButton);

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete");
            deleteButton.innerHTML = "delete";
            action.appendChild(deleteButton);

            task.appendChild(action);
            tasks.appendChild(task);

            inputText.value = "";

            editButton.onclick = function() {
                if(editButton.innerHTML == "edit")
                {
                    task_input.focus();
                    task_input.removeAttribute("readonly");
                    editButton.innerHTML = "save";    
                }

                else  {
                    task_input.setAttribute("readonly", true);
                    tasksArray[task_identify.innerHTML] = task_input.value;
                    window.localStorage.setItem("taskArray", JSON.stringify(tasksArray));
                    editButton.innerHTML = "edit";
                }
            }

            deleteButton.onclick = function() {
                console.log(task_identify.innerHTML);
                tasksArray.splice(task_identify.innerHTML, 1);
                window.localStorage.setItem("taskArray", JSON.stringify(tasksArray));
                tasks.removeChild(task); 
           
            }
        }
}