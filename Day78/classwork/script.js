// 1
let lst = ["k", "a", "k", "h", "a", 6, 7]
let slice = lst.slice(2, 6)
console.log(slice)



// 2
lst.splice(1, 3)
console.log(lst)


// 3
lst.shift()
console.log(lst)


// 4
lst.unshift("kakha", "igive")
console.log(lst)


// 5
let joinSt = lst.join("%")
console.log(joinSt)


// 6
let secList = [4, 5, 666666, 77777, 8]
let finding = secList.indexOf(666666)
console.log(finding)


// 7
let thiList = [1, 2, 3, 4, 5]
let combine = secList.concat(thiList)
console.log(combine)