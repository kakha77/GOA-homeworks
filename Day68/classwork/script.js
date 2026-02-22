let age = prompt("შეიყვანე შენი ასაკი:")
let result = age >= 18 ? "სრულწლოვანი ხარ" : "არა ხარ სრულწლოვანი"
console.log(result)


let number = Number(prompt("შეიყვანე რიცხვი 1-5-მდე:"))
switch (number) {
    case 1:
        console.log("რიცხვი არის 1");
        break;
    case 2:
        console.log("რიცხვი არის 2")
        break;
    case 3:
        console.log("რიცხვი არის 3")
        break;
    case 4:
        console.log("რიცხვი არის 4")
        break;
    case 5:
        console.log("რიცხვი არის 5")
        break;
    default:
        console.log("1დან 5მდე შეიყვანე მეთქი")
}



let asaki = Number(prompt("ასაკი შეიყვანე:"))
if (asaki >= 18 || asaki <= 60) {
    console.log("მუშაობა შეგიძლია")
} else if (asaki > 60) {
    console.log("გადი პენსიაზე რა გინდა აქ")
}



let feri = (prompt("შეიყვანე ფერი(red, blue, green:)"))
switch (feri) {
    case "red":
        console.log("წითელი")
        break;
    case "blue":
        console.log("ლურჯი")
        break;
    case "green":
        console.log("მწვანე")
        break;
    default:
        console.log("რაც გითხარი ის ფერი შეიყვანე")
}