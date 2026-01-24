const score = Number(prompt("ჩაწერე ქულა (0-100)"))

if (score > 50 && score <= 100) {
    console.log('ჩააბარე')
} else {
    console.log('ვერ ჩააბარე')
}





const age = Number(prompt("ჩაწერე შენი ასაკი"))
const bileti = Boolean(prompt("გაქვს თუ არა სტუდენტური ბილეთი (true/false)"))

if (age >= 18 || bileti == false) {
    console.log("შესვლა ნებადართულია")
} else {
    console.log("შესვლა აკრძალულია")
}






const password = (prompt('შეიყვანეთ პაროლი'))
const blocked = Boolean(prompt('დაბლოკილია თუ არა ანგარიში(true/false)'))

if (password === "kakha" && blocked === true) {
    console.log("წარმატებით შეხვედით სისტემაში")
} else {
    console.log("შესვლა ვერ მოხერხდა")
}



const gradus = Number(prompt('შეიყვანეთ გრადუსი ცელსიუსში'))

if (gradus < 0) {
    console.log("Cold ❄️")
} else if (gradus > 0 || gradus < 30) {
    console.log('Normal 🌤️')
} else if(gradus > 30) {
    console.log("Hot ☀️")
}