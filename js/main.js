/*
let newName = prompt("Ingrese su nombre");
let newLastname = prompt("Ingrese su apellido");
let newAge = parseInt(prompt("Ingrese su edad"));


let moreHobbies = true;


let arrayHobbies = [];



while(moreHobbies) {
    let newHobbie = prompt("Ingrese un hobbie");
    moreHobbies = confirm("Desea agregar otro hobbie?");
    arrayHobbies.push(newHobbie);
}


class User{
    constructor(name, lastname, age, hobbies){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.hobbies = hobbies;
    }
}


let myUser = new User(newName,newLastname,newAge,arrayHobbies);

console.log("Resultado: ",myUser);

 - moreHobbies para saber si el usuario desea agregar mas hobbies
   - arrayHobbies para almacenar los hobbies
   - while (moreHobbies) -> "Ingrese un hobbie" -> "Desea agregar otro?"
*/






function addHobbie(){
    let hobbieInput = document.getElementById("hobbie");
    let newHobbie = hobbieInput.value;
    let newHobbieDiv = document.createElement("div");
    newHobbieDiv.innerHTML = newHobbie;
    let hobbies = document.getElementById("hobbies");
    hobbies.appendChild(newHobbieDiv);
}



function changeTheme(){
    
    const themeSelect = document.getElementById('theme');
    const theme = themeSelect.options[themeSelect.selectedIndex].value;
    let pageContainer = document.getElementById("page-container");
    pageContainer.className = theme;
    
}


