

/*Create an array with all choices
Prompt user to make a choice from array
Make computer make a random choice from array
Compare choices using switch 
Print results */

var items = ["rock", "paper", "scissors"];

var rock = items[0];
var paper = items[1];
var scissors = items[2];

var userChoice = prompt ("Chose rock, paper or scissors");


switch(userChoice) {
    case rock:
        alert("You selected rock");
        console.log("User selected " + userChoice);
        break;
    case paper:
        alert("you selected paper");
        console.log("User selected " + userChoice);
        break;
    case scissors:
        alert("you selected scissors");
        console.log("User selected " + userChoice);
        break;
    default:
        alert("You must chose rock, paper or scissors");
        break;
}



var computerChoses = alert ("Now the computer makes a choice");

var computerChoses = Math.floor(Math.random() * items.length);
console.log("The computer selected " + items[computerChoses]);
alert("The computer selected " + items[computerChoses]);


var computerChoice = items[computerChoses]


if (userChoice===computerChoice) {
    console.log ("It's a draw");
    alert ("It's a draw!");
}


else if (userChoice===rock && computerChoice===paper) {
    console.log ("User loses");
    alert ("You lose!");
}

else if (userChoice===rock && computerChoice===scissors) {
    console.log ("User wins");
    alert ("You win!");
}

else if (userChoice===paper && computerChoice===rock) {
    console.log ("User wins");
    alert ("You win!");
}

else if (userChoice===paper && computerChoice===scissors) {
    console.log ("User loses");
    alert ("You lose!");
}

else if (userChoice===scissors && computerChoice===rock) {
    console.log ("User loses");
    alert ("You lose!");
}

else if (userChoice===scissors && computerChoice===paper) {
    console.log ("User wins");
    alert ("You win!");
}