function callbackFn(item) {
   return item % 2 === 0;
}

function pairFilter(arr) {
   return arr.filter(callbackFn);
}

const prompt = require('prompt-sync')()
const numbers = prompt('Insert your numbers: ').split(' ')

console.log(pairFilter(numbers).join(', '), ">>> these were the listed pair numbers.");