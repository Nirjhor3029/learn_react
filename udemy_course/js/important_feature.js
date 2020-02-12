// Types
// primitive types: numbers, booleans, strings
const number = 1;
const num2 = number; //here value of number *copied* to num2
console.log(num2);

// reference types: objects & arrays
// objects
const person = {
    name: "Nirjhor",
    age: "28"
};
const secondPerson = person;
console.log(secondPerson);

//that will change the value of *person.age* too
secondPerson.age = 25;
console.log(person);

//that will change the value of *secondPerson.name* too
person.name = "Fahad";
console.log(secondPerson);

//So How to copy a reference types variable 

const thirdPerson = {
    ...person,
};
console.log(thirdPerson);
person.name = "Max" // that won't change the value of thirdPerson
console.log(thirdPerson);

const name = {
    ...person.name,
}
console.log(name);





// Array
const numer = [1]