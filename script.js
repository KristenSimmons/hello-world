'use strict';

console.log("HTML is hard!");
alert("Welcome to our company page!");

function getSrc(){
    const theSrc = prompt("How did you hear about us?");
    return theSrc;
}

let theSrc = getSrc();
console.log(theSrc);

if (theSrc == "google"){
    alert ("Thank you for using Google to find us!");
} else if (theSrc == "referal"){
    alert ("Let us know who referred you so we can thank them!");
} else if (theSrc == "drive by"){
    alert ("Glad you found us!"); 
} else {
    alert ("Glad you found us! Check out our amzing reviews!");
}

function greetUser(){
    document.write("Hello!!");
}

greetUser();






