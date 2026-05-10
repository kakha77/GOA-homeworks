let number = [1, 2, 3, 4, 5];
console.log(number.slice(1, 4));
number.splice(1, 2);
console.log(number);
number.shift();
console.log(number);
number.unshift(10, 20);
console.log(number);
let number2 = [30, 40];
let combined = number.concat(number2);
console.log(combined);
console.log(combined.join("-"));
console.log(combined.indexOf(40));




let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i < numbers.length; i++) {
    numbers.splice(i, 1);
}
console.log(numbers);