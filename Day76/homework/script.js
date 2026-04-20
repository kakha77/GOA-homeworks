const users = ["დათო", "მარი", "ლაშა", "ელენე"];

console.log("1. მასივის სიგრძეა:", users.length); 

users.pop(); 
users.push("გიორგი"); 

console.log("განახლებული users:", users);


const shopList = ["პური", "რძე", "კვერცხი"];

const hasMilk = shopList.includes("რძე"); 
console.log("არის თუ არა სიაში რძე?", hasMilk);


let queue = ["დათო", "ელენე"];

queue.push("ნიკა");
queue.shift();

console.log("ახალი რიგის სიგრძე:", queue.length);
console.log("მთლიანი რიგი:", queue);