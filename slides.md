---
theme: seriph

background: https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2

class: "text-center"
highlighter: shiki
lineNumbers: false
info: |
  ## JavaScript course
  Starter course for JavaScript

  Exercises
drawings:
  persist: false
favicon: '/favicon.ico'
css: unocss
---

# Interactive webapps

## A guide to JavaScript

<p class="color-stone-400">Exercises</p>

---

# Exercise 1

- Given:

```javascript
const persons = [ 
  { name: "Bart", age: 34 }, 
  { name: "Tom", age: 26 }, 
  { name: "Olivia", age: 47 }, 
];
```

- Create a function called `getOldestName`
- Input function: the array `persons`
- Output: name oldest person
- Call the function with `console.log()`

[Solution](Exercises/Solutions/ex1.js)



---

# Exercise 2

- Given:

```javascript
const numbers = [ 
  2, 457, 76, 54, 4, 37, 486, 64846, 46, 574, 57457, 34, 23, 7, 686, 24, 466, 204, 467, 67 
];
```

- Create a function called `getAmountOfEvenNumbers`
- Input function: the array `numbers`
- Output: the amount of even numbers
- Call the function with `console.log()`

[Solution](Exercises/Solutions/ex2.js)

---

# Exercise 3

- Given:

```javascript
const products = [
  { name: "Banana", price: 2 },
  { name: "Pear", price: 1 },
  { name: "Orange", price: 1.5 },
  { name: "Grapes", price: 1.7 },
];
```

- Create a new list called `reducedProducts`
- The list must contain the same products, but the price is reduced by 50%
- Show the list with `console.log()`

[Solution](Exercises/Solutions/ex3.js)

---

# Exercise 4

- Given:

```javascript
const numbers = [324, 489, 25, 32, 209, 1098, 235, 74, 2, 58];
```

- Create a function called `getAmountDivisibleBy` with 2 parameters: `numbers` and `divider`
- The function returns the amount of numbers that is divisible by the input
- Show the result with `console.log()`

> Tip: use the modulo operator

[Solution](Exercises/Solutions/ex4.js)

---

# Exercise 5

- Given:

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

- Create a new variable that is 1 long list of all numbers 
- Show the result with `console.log()`

[Solution](Exercises/Solutions/ex5.js)

---

# Exercise 6

- Given:

```javascript
const products = [
  { name: "Kiwi", price: 10 },
  { name: "Apple", price: 20 },
  { name: "Orange", price: 30 },
];
```

- Create a function called `reduceProducts` with 2 parameters: `products` and `reduction`
- The function returns the same products but with a reduced price
- The reduction is in percentage
- Show the result with `console.log()`

[Solution](Exercises/Solutions/ex6.js)

---

# Exercise 7

- Given:
```javascript
const store = {
  products: [
    { id: "5087", name: "TV", price: 978 },
    { id: "8758", name: "Radio", price: 99 },
    { id: "3974", name: "Computer", price: 1476 },
    { id: "2094", name: "Phone", price: 569 },
    { id: "6789", name: "Laptop", price: 1987 },
    { id: "1234", name: "Tablet", price: 769 },
    { id: "4321", name: "Headphones", price: 269 },
    { id: "5678", name: "Keyboard", price: 147 },
    { id: "9876", name: "Mouse", price: 75 },
    { id: "8765", name: "Monitor", price: 249 },
  ],
  cart: [
    { id: "5087", quantity: 1 },
    { id: "3974", quantity: 1 },
    { id: "2094", quantity: 3 },
    { id: "4321", quantity: 1 },
    { id: "5678", quantity: 4 },
    { id: "9876", quantity: 2 },
    { id: "8765", quantity: 4 },
  ],
};
```

---

# Exercise 7

- Create a list of all the products in the cart 
- This is an example of 1 item in the list:
```javascript
{
  id: "9876",
  name: "Mouse",
  price: 75,
  quantity: 2,
  totalPrice: 150,
}
```

- Calculate the total price for each product to put in the list
- If a user has more than 2 items of the same product, an automatic reduction of 10% needs to be applied
- Calculate the total price

[Solution](Exercises/Solutions/ex7.js)

---

# Exercise 8

### Ticketing system for a cinema

[Setup](Exercises/Cinema/setup.js)

- Add `readline-sync` as a npm dependency to the project
- Follow the instructions on the following slides to implement the system

---

# Exercise 8.1

- Show all movie titles as a list to the user
- Ask the user what move they want to watch. The user has to enter the number corresponding to the movie in the list.
- Save the id of the movie in a variable
- Create a function `getMovieById` that requires an id as input and returns the object of the corresponding movie.  

> (For an easier way you can save the index given by the user or the movie object chosen by the user.)

[Solution](Exercises/Cinema/solution1.js)

--- 

# Exercise 8.2

- Show the information of the selected movie
- Example of how it should be displayed:

```
Pulp Fiction
1994 - Crime, Drama
The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.
```

- Make sure you use only 3 `console.log`'s

[Solution](Exercises/Cinema/solution2.js)

---

# Exercise 8.3

- Ask the user if they want to select an other movie with Y/N
- If the user selects Y, repeat the previous code to ask for a movie

[Solution](Exercises/Cinema/solution3.js)

---

# Exercise 8.4

- Ask the user how many tickets they want to buy
- Ask the user the amount of kids
- Show a message to the user if the user enters more kids than the total number of tickets
- Ask the question of the amount of kids again until the users enters a valid amount

[Solution](Exercises/Cinema/solution4.js)

---

# Exercise 8.5

- Ask the names of all the grownups
- Ask `What is the name of person: <number of person> ` for every person
- Do the same for all the children
- Save all the names in the following format:

```javascript
names = [
  { name: "John", isChild: false },
  { name: "Tijl", isChild: true },
];
```

[Solution](Exercises/Cinema/solution5.js)

---

# Exercise 8.6

- Create a new list `visitors`, this is the same list `names` from the previous step, but with an extra property: `price`
- The price for an adult is: 11 and for a kid: 7
- Example:

```javascript
visitors = [
  { name: "John", isChild: false, price: 11 },
  { name: "Tijl", isChild: true, price: 7 },
];
```

[Solution](Exercises/Cinema/solution6.js)

---

# Exercise 8.7

- Calculate the total price based on the list `visitors`
- Show the total price to the user

[Solution](Exercises/Cinema/solution7.js)

---

# Exercise 9

## Dice game

The game runs as following:

- When the game starts the user needs to enter the amount of players and the amount of sides on the dice
- The game can take multiple rounds
- In every round the computer throws a dice for every player
- After the computer shows the random number it asks if the next player is ready
- After the last player the computer asks if you wanna play an other round
- At the end of the game the player with the highest sum won also the highest amount for every player is shown

---

# Exercise 9.1

- Add `readline-sync` as a npm dependency to the project
- Ask the number of players using `readLine.questionInt`
- Ask the number of sides of the dice using `readLine.questionInt`

[Solution](Exercises/Dicegame/solution1.js)

---

# Exercise 9.2

- Create a function that handles a round, this function should run until a user presses no at the end of a round
- So after the round function has run we ask if the user wants to continue with: `readLine.keyInYN`
- If the user presses N the loop should stop

[Solution](Exercises/Dicegame/solution2.js)

---

# Exercise 9.3

- We need a function that returns a random number based on the maximum amount we entered
- For every player this random function needs to be called
- After a player amount has been thrown the number is shown
- A question is asked if the next player is ready with `readLine.keyInPause`
- This doesn't need to be asked after the last player

[Solution](Exercises/Dicegame/solution3.js)

---

# Exercise 9.4

- We need to safe the results of the dices in a state
- This is a matrix that contains al of the results for every player
- Example of a matrix with 3 players, 6 rounds, max 8 sides of the dice:

```javascript
[
  [2, 6, 2, 1, 8, 3],
  [1, 2, 1, 6, 5, 5],
  [4, 1, 3, 7, 7, 8],
]
```

- We start this state by creating an array with the length of the amount of players, every item in that array starts with an empty array
- This can be done with: `let diceResults = Array(numberOfPlayers).fill([]);`
- Every time a dice is thrown we need to add this value to the array on `diceResults[i]` 

[Solution](Exercises/Dicegame/solution4.js)


---

# Exercise 9.5

- Create an array with the total of every player, example based on the previous matrix: `[ 22, 20, 30 ]`
- Create an array with the highest number of every player, example: `[ 8, 6, 8 ]`
- Determine the player with the highest score and show the number of that player (If multiple players have the same highest score, the first player can be shown)


[Solution](Exercises/Dicegame/solution5.js)