// Spread Operator with array
const numbers = [1, 2, 3];
const newNumber = [numbers, 4];
const newNumber_with_spread_operator = [...numbers, 4];
console.log(newNumber);
console.log(newNumber_with_spread_operator);

// Spread Operator with Object
const person = {
    name: "Nirjhor"
};
const newPerson = {
    ...person,
    age: 28
}
console.log(newPerson);



// Rest Operator here ( ...args ) recieve as much as arguments 
const numberFilter = (...args) => {
    // return args.filter(el => el === 1);
    return args.filter(el => el % 2 == 0);
};

console.log(numberFilter(1, 2, 3));
console.log(numberFilter(1, 2, 3, 3, 45, 6, 1, 3, 2, 6, 77, 55, 50, 34, 2, 45, 99, 87, 88));