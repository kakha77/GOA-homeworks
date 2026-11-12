const result = students.filter(student => {
    let sum = 0;

    student.scores.map(score => sum += score);

    let average = sum / student.scores.length;

    return average >= 70;
}).map(student => {
    let sum = 0;

    student.scores.map(score => sum += score);

    return {
        name: student.name,
        average: Number((sum / student.scores.length).toFixed(2))
    };
});

console.log(result);