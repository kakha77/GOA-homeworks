const num1 = 10;
const num2 = 25.5;
const num3 = -3;

const str1 = "გამარჯობა";
const str2 = "კახა";
const str3 = "123";

const bool1 = true;
const bool2 = false;
const bool3 = 5 > 3;

console.log(typeof num1);   
console.log(typeof num2);   
console.log(typeof num3);   

console.log(typeof str1);  
console.log(typeof str2);  
console.log(typeof str3);  

console.log(typeof bool1);
console.log(typeof bool2); 
console.log(typeof bool3); 

let cars = ["BMW", "Mercedes", "Tesla", "Hyundai", "Honda", "Bugatti", "Lambo"];

let randomIndex = Math.floor(Math.random() * cars.length);

console.log(cars[randomIndex]);

console.log(5 <= 6);
console.log(7 <= 3);
console.log(5 == 6);
console.log(7 == 3);
console.log(5 >= 6);
console.log(7 >= 3);
console.log(5 < 6);
console.log(7 < 3);
console.log(5 > 6);
console.log(7 > 3);

console.log(Math.floor(Math.random()*100))

let text = prompt("შეიყვანეთ სახელი");
let randomIndex2 = Math.floor(Math.random() * text.length);
let randomChar = text[randomIndex];
console.log(randomChar);