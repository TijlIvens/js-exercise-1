const readLine = require("readline-sync");

const numberOfPlayers = readLine.questionInt("How many players are there? ");
const numberOfDice = readLine.questionInt("Max number on the dice? ");

const handleRound = () => {};

while (true) {
  handleRound();

  const playAgain = readLine.keyInYN("Do you want to play on other round? ");

  if (!playAgain) {
    break;
  }
}
