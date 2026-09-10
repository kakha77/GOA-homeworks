//1 
//Higher order functions - ეს არის ისეთი ფუნქცია რომელიც არგუმენტად იღებს "ქალბექ" ფუნქციას და აბრუნებს სხვა ფუნქციას ანუ შედეგს



//2
function sayHello(name) {
    return `გამარჯობა, ${name}!`
}
function processUser(name, callback) {
    console.log(callback(name))
}
processUser("kakha", sayHello)