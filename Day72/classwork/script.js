function greet(name = "saxeli") {
    return `Hello ${name}`
}

console.log(greet("Kakha"))






function generateEmail(firstName, lastName) {
    const first = cleanText(firstName);
    const last = cleanText(lastName);

    return `${first}.${last}@company.com`
}

function cleanText(text) {
    return text.toLowerCase();
}

console.log(generateEmail("first","last"))