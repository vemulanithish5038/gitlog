'use strict';

const listcontainer = document.querySelector("#list-container");
const addtexts = document.querySelector("#add-texts");
const input = document.querySelector("#input-data");

let counter = 1;

addtexts.addEventListener("click", () => {
    const inputValue = input.value.trim();  

    if (inputValue) {
        const list1 = document.createElement("li");
        list1.className = "Previous-data";
        list1.innerHTML = `${counter}. ${inputValue}`;  // Add number in front
        listcontainer.appendChild(list1);

        counter++; 
        input.value = ''; 
    } else {
        alert("Please enter some text!"); 
    }
});


// Learn about ASI (Automatic semicolon insertion) in js and problems associated with ASI
// --js engine will automatically insert in appropriate places
// --introduced to avoid syntax errors and allow code to continue running 
// ------ let x=10
//             *3
//             console.log(x);


// BEM naming standard for CSS


// strict mode in js
// --it is a global scope by indicating at first
// -- in strict mode you cannot use undecleared variables
// --use strict is a literal expression & it ignores the earlier version of the Js 
// --easier to write secure code 
// --  ----this keyword in functions behaves differently in js 

// Ajax - what is ajax
// ---it is not a programming lang
// ---after the page loaded it Read data from a web server
// --without loading the page has been updated
// ---in background the data has been send to webserver





