//1

//local storage - ამით ინახება მონაცემები რასაც მაგალითად მომხმარებელი შეიყვანს და local storage-ში შეინახება
//და ასევე დახურვის შემდეგაც შეინახავს ინფორმაციას


//2

//JSON - ამით ჩვენ შეგვიძლია რო აი მაგალითად მონაცემების შენახვა შეუძლია და დაახლოებით ობიექტის ნაირია ანუ თითქმის იგივეა



//3
//JSON.stringify() - ობიექტის გარდაქმნა შეუძლია სტრინგად ანუ ტექსტად რო მერე შევინახოთ local storage-ში, ობიექტები რო ეწერა
//მაგალითში მერე ეს რო გავუწერეთ გასწორდა და გამოიტანა ინფორმაცია


//4

let name = prompt("enter name: ")
let surname = prompt("enter surname: ")
let age = prompt("enter age")
let favcolor = prompt("enter color: ")

localStorage.setItem("user", JSON.stringify({name: name, surname: surname, age: age, color, favcolor}))