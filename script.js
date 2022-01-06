var name = prompt("welcome! What is your name?");
alert("Hey " + name);

var input = prompt("Enter a number between 0 and 25 to start guessing");
let randomNumber = Math.floor(Math.random() * 25);

const game = function () {
  while (input != randomNumber) {
    var tryAgain = prompt("Awnser is wrong, enter a new number");
    input = tryAgain;
  }
  if (input == randomNumber) {
    alert("You have won the game");
  }
};

game();
alert("Bye " + name);
