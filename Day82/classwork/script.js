//1

//forEach-ეს გამოიყენება სიის ყველა ელემენტზე რაიმე მოქმედების შესასრულებლად.
//map-მაპი ქმნის ახალ სიას უკვე არსებული სიის ელემენტების გადატანით.
//filter-ქმნის ახალ სიას, მაგრამ მხოლოდ იმ ელემნტებისგან როცა მნიშვნელობა იქნება true.
//reduce-რედიუსი ამცირებს სიას ერთ ელემენტამდე
//indexOf-ეს პოულობს იმ ინდექსს როდესაც მაგალითად რეტურნში პირობა იქნება ტრუე.


//2

const list = [10, 'ლუკა', true, 20, 'ნიკა']
const integers = list.filter(item => typeof item === 'number')
console.log(integers)



//3


const numbers = [10, 20, 30, 67]

const result = numbers.reduce((acc, curr) => acc * curr, 1)

console.log(`${result}`)




//4


const numbers = [2, 3, 4, 5]
let result = 1

for (const num of numbers) {
    result *= num
}

console.log(`${result}`)



//5

const values = [true, false, true, false]

const booleans = values.every(element => typeof element === "booleans")
console.log(booleans)




//6


const string = values.some(element => typeof element === "string")
console.log(string)




//7


const user = {
    name: "kakha",
    age: 25,
    student: true
}
user.age = 26
console.log(user)



//8


user.city = "tbilisi"
user.profession = "developer"
console.log(user)