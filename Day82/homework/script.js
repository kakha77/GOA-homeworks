//ობიექტი არის მონაცემთა სტრუქტურა, რომელიც ინახავს ინფორმაციას key-value წყვილების სახით.
//იგი იქმნება ფიგურული ფრჩხილებით {} და მონაცემები ინახება გასაღები-მნიშვნელობის სახით.

//some() და every() ორივე მასივის იტერატორია.
//some() აბრუნებს true-ს, თუ მინიმუმ ერთი ელემენტი აკმაყოფილებს პირობას.
//every() აბრუნებს true-ს მხოლოდ მაშინ, თუ ყველა ელემენტი აკმაყოფილებს პირობას.

let numbers = [1, 2, 3, 4];
console.log(numbers.some(num => num > 3)); // true
console.log(numbers.every(num => num > 0)); // true
let me = {
    name: "Giorgi",
    age: 16,
    city: "Kutaisi",
    hobby: "Programming"
};
console.log(me.name);
me.age = 17;
me.school = "Public School";
me.favoriteLanguage = "JavaScript";
console.log(me);