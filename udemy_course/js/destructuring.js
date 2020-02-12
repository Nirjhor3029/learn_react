const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2);
// console.log(num3);
[num1, , num3] = numbers;
console.log(num3);


// Object destructuring
const person = {
    name: "Nirjhor",
    age: 28
};
console.log(person);
// console.log(person.name);
// {name} = person;
// console.log(name);