const persons = [
  { name: "Bart", age: 34 },
  { name: "Tom", age: 26 },
  { name: "Olivia", age: 47 },
];

// long version
const getOldestName = (personArray) => {
  const sortedPersons = personArray.sort((personA, personB) => {
    const difference = personB.age - personA.age;
    return difference;
  });

  const oldestPerson = sortedPersons[0];

  const name = oldestPerson.name;

  return name;
};

// short version
const getOldestName = (personArray) =>
  personArray.sort((personA, personB) => personB.age - personA.age)[0].name;

console.log(getOldestName(persons));
