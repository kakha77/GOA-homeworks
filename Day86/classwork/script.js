const zoo = {
    wolf: true,
    bear: true,
    monkey: true,
    lion: true
}
//1
const {wolf, monkey} = zoo
console.log(wolf,monkey)
//2
const {monkey:name, lion:name2} = zoo
console.log(name,name2)
//3
function createObject(par1, par2, par3) {
    return {par1, par2, par3}
}
console.log(createObject("value1", "value2", "value3"))
//4
const keys = Object.keys(zoo)
console.log(keys)
//5
const entries = Object.entries(zoo)
console.log(entries)