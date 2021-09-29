const prompt = require('prompt-sync')();
 
let x = prompt("Insert X's value as an integer:");
let y = prompt("Now, insert Y's value as an integer:");

console.log(compareNumbers(x, y))

function compareNumbers(x, y) {
   x = parseInt(x);
   y = parseInt(y);

   let equals = x==y;
   let sum = x+y;

   let case1 = ""
   let case2 = `Their sum equals ${sum}. `; 

   equals === true ? case1 = `The numbers ${x} and ${y} are the same. ` : case1 = `The numbers ${x} and ${y} are NOT the same. `;
   
   sum < 10 ? case2 += "It means it is less than 10 " : case2 += "It means it is greater or equal to 10 ";
   
   sum < 20 ? case2 += "and is less than 20." : case2 += "and is greater or equal to 20.";

   return case1 + case2
}