const numbers = [
  2, 457, 76, 54, 4, 37, 486, 64846, 46, 574, 57457, 34, 23, 7, 686, 24, 466,
  204, 467, 67,
];

// long answer
const getAmountOfEvenNumbers = (numbersArray) => {
  const evenNumbers = numbersArray.filter((number) => {
    const isEven = number % 2 === 0;
    return isEven;
  });

  const amountOfEvenNumbers = evenNumbers.length;

  return amountOfEvenNumbers;
};

// short answer
const getAmountOfEvenNumbers = (numbersArray) =>
  numbersArray.filter((number) => number % 2 === 0).length;

console.log(getAmountOfEvenNumbers(numbers));
