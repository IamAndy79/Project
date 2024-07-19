/*
 * ----------------------------------------------------------------------------
 * Copyright (c) 2024 Andrea Skacikova. All rights reserved.
 * ----------------------------------------------------------------------------
 *
 * Created by Andrea Skacikova on July 13, 2024.
 */


/* TODO:
 * - ID AKA RODNE CISLO OR TO CHANGE IT - ID .... ?????????
 *  - CHANGE FONTS ?  
 *  - BETTER IMAGE ? 
 *  - KEEP GOING :) 
 *  - BACKGROUND - WHITE OR SOME COLOR  ????
 *  - ADD MORE WINDOWS (MAIN - POJIŠTĚNCI, SECONDARY - O APLIKACI, MAYBE SOMETHING ELSE LIKE VARIABLE INSURANCE TYPES FOR EACH PERSON ? IF WILL HAVE TIME HAHA)
 */



const form = document.getElementById("form");
const tableData = document.getElementById("tbody");



class pojistenec {
    name;
    surname;
    age;
    telephone;
    id;
    constructor(name, surname, age, telephone, id) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.telephone = telephone;
        this.id = id;
    }
}


let pojistenci = new Array(new pojistenec("Andrea", "Skacikova", "45", "736 686 501", "795318/2551"));


function addPerson() {
    // Get data from form
    var data = new FormData(form);
    // Create elements for table
    const newEntry = document.createElement("tr");
    const name = document.createElement("td");
    const age = document.createElement("td");
    const tel = document.createElement("td");
    const id = document.createElement("td");


    // Name needs to be bold, so class it is
    name.setAttribute("class", "name");
    // Add text to table elements
    name.innerHTML = data.get("jmeno") + " " + data.get("prijmeni");
    age.innerHTML = data.get("vek");
    tel.innerHTML = data.get("tel");
    id.innerHTML = data.get("rodne cislo");
    
    // Append elements together
    newEntry.appendChild(name);
    newEntry.appendChild(tel);
    newEntry.appendChild(age);
    newEntry.appendChild(id);
    // Append to the data
    tableData.appendChild(newEntry);

    pojistenci.push(new pojistenec(data.get("jmeno"), data.get("prijmeni"), data.get("vek"), data.get("tel"), data.get("rodne cislo")));
}