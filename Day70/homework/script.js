//hoisting არის ისეთი ფუნქცია როდესაც ჩვენ შეგვიძლია ფუნქცია გამოვიძახოთ მანამდე სანამ კოდს დავწერთ.


rectangleArea(5, 10);
function rectangleArea(width, height) {
  let area = width * height;
  console.log("Rectangle Area:", area);
}



// ის შედგება 1.function 2.function name 3.parameters 4.function body