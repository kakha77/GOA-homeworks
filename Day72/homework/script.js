function flipCoin() {
  const random = Math.random();
  return random < 0.5 ? "Heads" : "Tails";
}

console.log(flipCoin());




function getCurrentYear() {
  return 2026;
}

function getAge(birthYear) {
  const age = getCurrentYear() - birthYear;
  return `You are ${age} years old`;
}

console.log(getAge(2000));