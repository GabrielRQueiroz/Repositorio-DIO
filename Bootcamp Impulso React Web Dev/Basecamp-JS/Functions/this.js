
const person1 = {
   name: "Gabriel",
   age: 17,
}
const person2 = {
   name: "Bia",
   age: 5,
}
const person3 = {
   name: "Mom",
   age: 40,
}

function ageCalculator(years) {
   return `${this.name} will be ${this.age + parseInt(years)} years old!`;
}

const prompt = require('prompt-sync')();
 
let years = prompt("How many years in the future do I have to look at:");

console.log(`In ${years} years, ` + ageCalculator.call(person1, years) + " and...");

console.log(ageCalculator.call(person2, years) + " and...");

console.log(ageCalculator.call(person3, years) + " WOW!");