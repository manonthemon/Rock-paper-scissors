var items = ["rock", "paper", "scissors"];

var rock = items[0];
var paper = items[1];
var scissors = items[2];

var wins = 0;
var loses = 0;
var draws = 0;
var round = 0;

for (var i = 0; i < 3; i++) {

    round++

    alert ("Round " + round + "! Fight!")

    var userChoice = prompt ("Chose rock, paper or scissors.").toLowerCase();
    
    switch(userChoice) {
        
        case rock:
            alert("You selected rock.");
            console.log("User selected " + userChoice);
            break;
        case paper:
            alert("you selected paper.");
            console.log("User selected " + userChoice);
            break;
        case scissors:
            alert("you selected scissors.");
            console.log("User selected " + userChoice);
            break;
        default:
            alert("You must chose rock, paper or scissors");
            break;
    }

var computerChoses = alert ("Now the computer makes a choice.");

var computerChoses = Math.floor(Math.random() * items.length);
console.log("The computer selected " + items[computerChoses]);
alert("The computer selected " + items[computerChoses]);

var computerChoice = items[computerChoses]

if (userChoice===computerChoice) {
    console.log ("It's a draw");
    alert ("It's a draw!");
    draws++
}

else if (userChoice===rock && computerChoice===paper) {
    console.log ("User loses");
    alert ("You lose this round!");
    loses++;
}

else if (userChoice===rock && computerChoice===scissors) {
    console.log ("User wins");
    alert ("You win this round!");
    wins++;
}

else if (userChoice===paper && computerChoice===rock) {
    console.log ("User wins");
    alert ("You win this round!");
    wins++;
}

else if (userChoice===paper && computerChoice===scissors) {
    console.log ("User loses");
    alert ("You lose this round!");
    loses++;
}

else if (userChoice===scissors && computerChoice===rock) {
    console.log ("User loses");
    alert ("You lose this round!");
    loses++;
    }

else if (userChoice===scissors && computerChoice===paper) {
    console.log ("User wins");
    alert ("You win this round!");
   }
}

if (wins < loses) {

    alert (wins + " wins, " + loses + " loses, " + draws + " draws. You lost the game!")
    }

else if (wins > loses) {

        alert (wins + " wins, " + loses + " loses, " + draws + " draws. You won the game!")
 }

else     {
    alert (wins + " wins, " + loses + " loses, " + draws + " draws. It's a draw!")
};

var playAgain = alert ("Try again? Press enter");

 window.location.reload();