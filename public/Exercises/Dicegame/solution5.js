const readLine = require("readline-sync");

const numberOfPlayers = readLine.questionInt("How many players are there? ");
const numberOfDice = readLine.questionInt("Max number on the dice? ");

let diceResults = Array(numberOfPlayers).fill([]);

const rolledDice = () => Math.floor(Math.random() * numberOfDice) + 1;

const handleRound = () => {
  for (let i = 0; i < numberOfPlayers; i++) {
    const rolledNumber = rolledDice();
    console.log(`Player ${i + 1} rolled: ${rolledNumber}`);

    diceResults[i] = [...diceResults[i], rolledNumber];

    if (i !== numberOfPlayers - 1) {
      readLine.keyInPause("Ready for the next player?");
    }
  }
};

while (true) {
  handleRound();

  const playAgain = readLine.keyInYN("Do you want to play on other round? ");

  if (!playAgain) {
    break;
  }
}

const totalPerPlayer = diceResults.map((diceResult) =>
  diceResult.reduce((a, b) => a + b)
);

const maxRollPerPlayer = diceResults.map((diceResult) =>
  Math.max(...diceResult)
);

const winnerIndex = totalPerPlayer.indexOf(Math.max(...totalPerPlayer));

console.log(`Results: ${totalPerPlayer}`);

console.log(`Max roll per player: ${maxRollPerPlayer}`);

console.log(
  `Player ${winnerIndex + 1} won with a total of ${totalPerPlayer[winnerIndex]}`
);