const numbers = [324, 489, 25, 32, 209, 1098, 235, 74, 2, 58];

const getAmountDivisibleBy = (numbers, divisor) => {
  const divisibleNumbers = numbers.filter((number) => number % divisor === 0);

  return divisibleNumbers.length;
};

console.log(getAmountDivisibleBy(numbers, 2));
