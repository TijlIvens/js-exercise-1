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

### Ticketing system for a cinema

[Setup](Exercises/Cinema/setup.js)

- Add `readline-sync` as a npm dependency to the project
- Follow the instructions on the following slides to implement the system

---

# Exercise 4.1

- Show all movie titles as a list to the user
- Ask the user what move they want to watch. The user has to enter the number corresponding to the movie in the list.
- Save the id of the user in a variable
- Create a function `getMovieById` that requires an id as input and returns the object of the corresponding movie.  
   
-

- (For an easier way you can save the index given by the user or the movie object chosen by the user.)

[Solution]()

--- 

# Exercise 4.2

- Show the information of the selected movie
- Example of how it should be displayed:

```
Pulp Fiction
1994 - Crime, Drama
The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.
```

- Make sure you use only 3 `console.log`'s

[Solution]()

---

# Exercise 4.3

- Ask the user if they want to select an other movie with Y/N
- If the user selects Y, repeat the previous code to ask for a movie

[Solution]()

---

# Exercise 4.4

- Ask the user how many tickets they want to buy
- Ask the user the amount of kids
- Show a message to the user if the user enters more kids than the total number of tickets
- Ask the question of the amount of kids again until the users enters a valid amount

[Solution]()

---

# Exercise 4.5

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

[Solution]()

---

# Exercise 4.6

- Create a new list `visitors`, this is the same list `names` from the previous step, but with an extra property: `price`
- The price for an adult is: 11 and for a kid: 7
- Example:

```javascript
visitors = [
  { name: "John", isChild: false, price: 11 },
  { name: "Tijl", isChild: true, price: 7 },
];
```

[Solution]()

---

# Exercise 4.7

- Calculate the total price based on the list `visitors`
- Show the total price to the user

[Solution]()