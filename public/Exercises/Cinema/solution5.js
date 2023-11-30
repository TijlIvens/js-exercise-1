const readLine = require("readline-sync");

const movies = [
  {
    id: "17e6a1bc-70ee-11ed-a1eb-0242ac120002",
    name: "Pulp Fiction",
    year: "1994",
    genre: ["Crime", "Drama"],
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    id: "ebbea8f0-36d7-482a-b8bc-42182dd1bedd",
    name: "Taxidermia",
    year: "2006",
    genre: ["Comedy", "Drama", "Horror"],
    description:
      "Three generations of men, including a pervert that constantly seeks for new kinds of satisfaction, an obese speed eater and a passionate embalmer.",
  },
  {
    id: "118b4b8c-4573-4193-855b-9f0bc3330d45",
    name: "Naked Lunch",
    year: "1991",
    genre: ["Drama"],
    description:
      "After developing an addiction to the substance he uses to kill bugs, an exterminator accidentally kills his wife, and becomes involved in a secret government plot being orchestrated by giant bugs in a port town in North Africa.",
  },
  {
    id: "e0144323-d34f-407f-a65a-d54e83b27896",
    name: "There Will Be Blood",
    year: "2007",
    genre: ["Drama"],
    description:
      "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
  },
];

console.log("Welcome to MovIt!");

console.log("Please choose a movie from the list below:");

movies.forEach((movie, index) => {
  console.log(index, movie.name);
});

const getMovieById = (id) => {
  return movies.find((movie) => movie.id === id);
};

let selectedMovie;

while (true) {
  const movieIndex = readLine.questionInt(
    "Enter the number of the movie you want to watch: "
  );

  selectedMovie = getMovieById(movies[movieIndex].id);

  console.log("You have selected:");

  console.log(selectedMovie.name);

  console.log(`${selectedMovie.year} - ${selectedMovie.genre.join(", ")}`);

  console.log(selectedMovie.description);

  const selectOtherMovie = readLine.keyInYN(
    "Do you want to select another movie?"
  );

  if (!selectOtherMovie) {
    break;
  }
}

let amountOfTickets;
let amountOfKids;

while (true) {
  amountOfTickets = readLine.questionInt(
    "How many tickets do you want to buy: "
  );

  amountOfKids = readLine.questionInt("How many of those tickets are kids: ");

  if (amountOfKids > amountOfTickets) {
    console.log("You cannot buy more kids tickets than tickets!");
  } else {
    break;
  }
}

let names = [];

for (let i = 0; i < amountOfTickets - amountOfKids; i++) {
  const adultName = readLine.question(`What is the name of person ${i + 1}: `);

  names.push({ name: adultName, isChild: false });
}

for (let i = 0; i < amountOfKids; i++) {
  const kidName = readLine.question(`What is the name of kid ${i + 1}: `);

  names.push({ name: kidName, isChild: true });
}

// alternative solution to go over n times
// you create an array with the amount of tickets to have something to loop over

let alternativeNames = [];

Array.from(Array(amountOfTickets - amountOfKids).keys()).forEach((_, index) => {
  const adultName = readLine.question(
    `What is the name of person ${index + 1}: `
  );

  alternativeNames.push({ name: adultName, isChild: false });
});

Array.from(Array(amountOfKids).keys()).forEach((_, index) => {
  const kidName = readLine.question(`What is the name of kid ${index + 1}: `);

  alternativeNames.push({ name: kidName, isChild: true });
});
