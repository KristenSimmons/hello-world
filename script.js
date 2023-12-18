'use strict';

console.log("I am in the HTML");

alert("Welcome to our company page!");

const userSrc = prompt("How did you hear about us?");
console.log("userSrc");

if (userSrc == "google"){
    alert ("Thank you for using Google to find us!");
} else if (userSrc == "referal"){
    alert ("Let us know who referred you so we can thank them!");
} else if (userSrc == "drive by"){
    alert ("Glad you found us!"); 
} else {
    alert ("Glad you found us! Check out our amzing reviews!");
}



