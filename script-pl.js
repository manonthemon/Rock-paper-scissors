

/*Create an array with all choices
Prompt user to make a choice from array
Make computer make a random choice from array
Compare choices using switch 
Print results */

var items = ["kamień", "papier", "nożyce"];

var rock = items[0];
var paper = items[1];
var scissors = items[2];

var userChoice = prompt ("Wybierz papier, nożyce lub kamień");


switch(userChoice) {
    case rock:
        alert("Wybrałeś kamień");
        console.log("User selected " + userChoice);
        break;
    case paper:
        alert("Wybrałeś papier");
        console.log("User selected " + userChoice);
        break;
    case scissors:
        alert("Wybrałeś nożyce");
        console.log("User selected " + userChoice);
        break;
    default:
        alert("Musisz wybrać papier, nożyce lub kamień");
        break;
}



var computerChoses = alert ("Teraz wybiera komputer");

var computerChoses = Math.floor(Math.random() * items.length);
console.log("The computer selected " + items[computerChoses]);
alert("Komputer wybrał " + items[computerChoses]);


var computerChoice = items[computerChoses]


if (userChoice===computerChoice) {
    console.log ("It's a draw");
    alert ("Remis!");
}


else if (userChoice===rock && computerChoice===paper) {
    console.log ("User loses");
    alert ("Przegrałeś!");
}

else if (userChoice===rock && computerChoice===scissors) {
    console.log ("User wins");
    alert ("Wygrałeś");
}

else if (userChoice===paper && computerChoice===rock) {
    console.log ("User wins");
    alert ("Wygrałeś");
}

else if (userChoice===paper && computerChoice===scissors) {
    console.log ("User loses");
    alert ("Przegrałeś!");
}

else if (userChoice===scissors && computerChoice===rock) {
    console.log ("User loses");
    alert ("Przegrałeś");
}

else if (userChoice===scissors && computerChoice===paper) {
    console.log ("User wins");
    alert ("Wygrałeś");
}