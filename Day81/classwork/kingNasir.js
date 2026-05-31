//davaleba 1
const lst = [10,20,30,40,50]
lst.forEach((element, i) => {
    const totl = i+element
    console.log(`index: ${i}, element: ${element}, total: ${totl}`)
})


//davaleba 2 ver gavige :(


//davaleba 3
const lists =["hi", 20, true, 0,67, false, 7, "kingNasir"]
const numsOnly = lists.filter(x => typeof x === 'number' && !isNaN(x))
console.log(numsOnly)




//davaleba 4
const fruits = ["banana", "apple", "badrijani"]
const lsts = fruits.map((element, i) => `${element} - ${i}`)
console.log(lsts)



//davaleba 5
const randomList = [67, false, 6.7, "epstein", "kingNasir"]
let ind = -1
for (let i = 0; i < randomList,length; i++) {
    if (typeof randomList[i] === 'string') {
        ind = i
    }
}
console.log(ind)