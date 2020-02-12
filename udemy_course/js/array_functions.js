const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
const map2 = array1.map(function (x) {
    if (x % 2 == 1) {
        x *= 2;
    }
    return x;
});
console.log(map2);

let numbers = [1, 4, 9]
let roots = numbers.map(function (num) {
    return Math.sqrt(num)
})
console.log(numbers);
console.log(roots);

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]