var items = ["rock", "paper", "scissors"];

var rock = items[0];
var paper = items[1];
var scissors = items[2];
var wins = 0;
var loses = 0;
var draws = 0;
var round = 0;

for (var i = 0; i < 6; i++) {

    round++

    alert ("Round " + round + "! Fight!")

    var userChoice = prompt ("Chose rock, paper or scissors.").toLowerCase();
    
    switch(userChoice) {
        
        case rock:
            alert("You selected rock.");
            break;
        case paper:
            alert("you selected paper.");
            break;
        case scissors:
            alert("you selected scissors.");
            break;
        default:
            alert("You must chose rock, paper or scissors");
            break;
    }

var computerChoses = alert ("Now the computer makes a choice.");

var computerChoses = Math.floor(Math.random() * items.length);
alert("The computer selected " + items[computerChoses]);

var computerChoice = items[computerChoses]

if (userChoice===computerChoice) {
    alert ("It's a draw!");
    draws++
}
else if (userChoice===rock && computerChoice===paper) {
    alert ("You lose this round!");
    loses++;
}
else if (userChoice===rock && computerChoice===scissors) {
    alert ("You win this round!");
    wins++;
}
else if (userChoice===paper && computerChoice===rock) {
    alert ("You win this round!");
    wins++;
}
else if (userChoice===paper && computerChoice===scissors) {
    alert ("You lose this round!");
    loses++;
}
else if (userChoice===scissors && computerChoice===rock) {
    alert ("You lose this round!");
    loses++;
    }
else if (userChoice===scissors && computerChoice===paper) {
    alert ("You win this round!");
   }
}

if (wins < loses) {
    alert (wins + " wins, " + loses + " loses, " + draws + " draws. You lost the game!")
    }
else if (wins > loses) {
        alert (wins + " wins, " + loses + " loses, " + draws + " draws. You won the game!")
 }
else  {
    alert ("Game over! " + wins + " wins, " + loses + " loses, " + draws + " draws. It's a draw!")
};

var playAgain = alert ("Try again? Press enter");
 window.location.reload();