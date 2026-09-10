function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}


function myMap(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }

  return newArray;
}



const fruits = ["Apple", "Banana", "Orange", "Kiwi"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});




const numberss = [2, 4, 6, 8, 10];

numberss.forEach(function (number) {
  console.log(number * 2);
});



const names = ["gio", "vano", "nika", "ana"];

names.forEach(function (name) {
  console.log(name.toUpperCase());
});




const prices = [15, 30, 20, 45];

let sum = 0;

prices.forEach(function (price) {
  sum += price;
});

console.log(sum);




const nums = [1, 2, 3, 4, 5, 6, 7, 8];

nums.forEach(function (num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});





const colors = ["Red", "Blue", "Green"];

colors.forEach(function (color, index) {
  console.log(index, color);
});





const words = ["JavaScript", "HTML", "CSS", "React"];

words.forEach(function (word) {
  console.log(word, word.length);
});






const ages = [12, 18, 25, 16, 30, 21];

ages.forEach(function (age) {
  if (age >= 18) {
    console.log(age);
  }
});





const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = [];

numbers.forEach(function (number) {
  squaredNumbers.push(number * number);
});

console.log(squaredNumbers);





const users = [
  { name: "Gio", age: 20 },
  { name: "Ana", age: 17 },
  { name: "Nika", age: 25 }
];

users.forEach(function (user) {
  console.log(user.name, user.age);
});