//1
//nested object- არის ობიექტი რომელიც ანუ არის სხვა ობიექტის შიგნით როგორც რომელიმე keyს მნიშვნელობა

//2
const animals = {
    dog : {
        name: "mailo",
        age: 2
    },
    kitty : {
        name: "shavlegi",
        age: 2
    }
} 

console.log(animals.kitty.name)
console.log(animals.kitty.age)


//3
const zoo = {
    wolf: true,
    bear: true,
    monkey: true,
    lion: true
}

function checkingAnimal(zooObject, animalName) {
    if (zooObject[animalName] ===true){
        zooObject[animalName] = false
    } else {
        zooObject[animalName] = true
    }
}


checkingAnimal(zoo, "monkey")
checkingAnimal(zoo, "mgeli")

console.log(zoo)