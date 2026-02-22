let number = Number(prompt("შეიყვანე რიცხვი:"));
let result = (number % 2 === 0) ? "Number is even" : "Number is odd";
console.log(result);





let age = Number(prompt("შეიყვანე ასაკი:"));
let is_student = prompt("ხარ სტუდენტი? (true/false)") === "true";
if (age >= 18 && age <= 24 && is_student) {
    console.log("შენ ხარ სტუდენტი და გეკუთვნის სტიპენდია");
} else if (age === 18 && !is_student) {
    console.log("18 წლის ხარ მარა სტუდენტი არა, რა სტიპენდიაზე ლაპარაკობ");
} else {
    console.log("ჯერ სკოლა დაამთავრე");
}





for (let i = 1; i <= 5; i++) {
    let car = prompt(`შეიყვანე მანქანა ${i}:`);
    switch (car.toLowerCase()) {
        case "bmw":
            console.log("BMW არის გერმანული მანქანა");
            break;
        case "mercedes":
            console.log("Mercedes არის პრემიუმ კლასის მანქანა");
            break;
        case "toyota":
            console.log("Toyota არის სანდო და ეკონომიური");
            break;
        case "tesla":
            console.log("Tesla არის ელექტრო მანქანა");
            break;
        case "audi":
            console.log("Audi არის თანამედროვე და კომფორტული");
            break;
        default:
            console.log("უცნობი მანქანა");
    }
}