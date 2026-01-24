// == არამკაცრი ტოლობის შემთხვევაში ყურადღებას არ აქცევს ბრჭყალებს და ასე შემდეგ
// === და მკაცრი ტოლობის შემთხვევაში აუცილებლად უნდა ემთხვეოდეს და ყურადღებასაც აქცევს ბრჭყალებს და ა.შ.

const age = Number(prompt("შეიყვანეთ თქვენი ასაკი"));

if (age >= 18) {
  console.log("შეგიძლია მართვის მოწმობის აღება");
} else {
  console.log("პატარა ხარ მართვის მოწმობისთვის 18 წლის მაინც უნდა იყო");
}





const score = Number(prompt("შეიყვანეთ სტუდენტის ქულა (0-დან 100-მდე)"));

if (score >= 90 && score <= 100) {
  console.log("A. real chad");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("ნC");
} else if (score >= 60 && score <= 69) {
  console.log("ნიშანი: D");
} else if (score >= 0 && score <= 59) {
  console.log("F. 24/7 pubg");
}