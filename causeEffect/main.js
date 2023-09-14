window.addEventListener("load", function() {
    const people = [
        {
            name: "John Doe",
            street: "123 Main St",
            telephone: "555-1234",
            birthday: "01/15/1980"
        },
        {
            name: "Jane Smith",
            street: "456 Elm St",
            telephone: "555-5678",
            birthday: "05/23/1990"
        },
        {
            name: "Bob Johnson",
            street: "789 Oak St",
            telephone: "555-9876",
            birthday: "11/10/1985"
        },
        {
            name: "Alice Brown",
            street: "321 Pine St",
            telephone: "555-4321",
            birthday: "09/03/1995"
        },
        {
            name: "Sarah Wilson",
            street: "555 Cedar St",
            telephone: "555-5555",
            birthday: "03/18/1993"
        },
        {
            name: "Michael Johnson",
            street: "888 Birch St",
            telephone: "555-8888",
            birthday: "07/27/1988"
        },
    ];

    const nameList = this.document.getElementById("nameList");
    const name = this.document.getElementById("name");
    const adress = this.document.getElementById("adress");
    const telephone = this.document.getElementById("telephone");
    const birthday = this.document.getElementById("birthday");

    people.forEach(function(data) {
        const liElement = document.createElement("li");
        liElement.innerHTML = data.name;
        liElement.classList.add("user");
        nameList.appendChild(liElement);

        liElement.addEventListener("click", function() {
            name.innerHTML = "Name: " + data.name;
            adress.innerHTML = "Adress: " + data.street;
            telephone.innerHTML = `Telephone: ${data.telephone}`; 
            birthday.innerHTML = "Birthday: " + data.birthday;
        })
    });

})

