'use strict';

console.log("HTML is hard!");


function getName(){
        //declaring a constant variable called usersName, assigning it the value of what the prompt returns (the users input)
     const usersName = prompt("What is your name?");
        while (usersName == null || usersName == ''){
            if (usersName == null){
                usersName = confirm("Would you like to skip this step?");
                usersName = '';
                return usersName;
            } else {
                usersName = prompt("Please provide a name");
            }
        }
        return usersName;
}

let usersName = getName();
console.log(usersName);

// Welcome message that uses Users Name input
function welcomeMessage(){
    if (usersName !== null && usersName !== ''){
        document.write (`Welcome to our company page, ${usersName}!`);
    } else {
        document.write("Welcome to our company page!");
    }    
}

welcomeMessage();



function getSrc(){
    const theSrc = prompt("How did you hear about us?");
    return theSrc;
}

let theSrc = getSrc();
console.log(theSrc);


if (theSrc == "Google"){
    alert ("Thank you for using Google to find us!");
} else if (theSrc == "referral"){
    alert ("Let us know who referred you so we can thank them!");
} else if (theSrc == "drive by"){
    alert ("Glad you found us!"); 
} else {
    alert ("Glad you found us! Check out our amzing reviews!");
}


function rateMyPage(){
    let rating = prompt("How many stars do you give us? 1-5");

    for (let i = 0; i < rating; i++){
        document.write("<img class='loop-img' src='links/starimage.jpg' width=100px height=100px margin=auto alt='blue and red star' />");
    }
}




