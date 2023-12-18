'use strict';

console.log("My first intro into JavaScript!")
console.log("Send help!")

alert("Welcome to our company page!")

const userSrc = prompt("How did you hear about us?")
console.log("userSrc");



if (userSrc == "google"){
    alert (Thank you for using Google to find us!);
} else if (userSrc == "referal"){
    alert ("Let us know who referred you so we can thank them!");
} else if (userSrc == "drive by"){
    alert ("Glad you found us!"); 
} else {
    alert (Glad you found us! Check out our amzing reviews!);
}

function rateThisPage(){
    let rating = prompt("What do you rate this page on a scale of 1-5?");
    for (let i = 0; i < rating; i++) {
       document.write('<img src="images/Frolic.gif" class="rating-img" alt="Homer Simpson frolicing in a meadow gif">');
    }
 


    

