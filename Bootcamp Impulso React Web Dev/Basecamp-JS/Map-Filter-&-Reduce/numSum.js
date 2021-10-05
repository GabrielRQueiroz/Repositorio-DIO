function sumNumbers(arr) {
   return arr.reduce(function(previous, current) {
      return parseInt(previous) + parseInt(current);
   })
}

const prompt = require('prompt-sync')()
const numbers = prompt('Insert the numbers you want to sum: ').split(' ')

console.log(`${sumNumbers(numbers)} is the result.`);