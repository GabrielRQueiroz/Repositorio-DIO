const prompt = require('prompt-sync')();

let numbers = prompt("Insert your numbers here:");

let numArray = numbers.split(" ")

function killRepeatings(arr) {

   const onlyOnce = new Set(arr);

   return [...onlyOnce]; // spread method example
   
}

console.log(`Here is your array of non-repeated numbers:`);
console.log(killRepeatings(numArray));