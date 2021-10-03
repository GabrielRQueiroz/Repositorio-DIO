const prompt = require('prompt-sync')();
 
let input = prompt("Array formatter:");

console.log(arrayCorrection(input))

function arrayCorrection(input) {

   input = input.split('');

   if (input == '') {

      return -1;

   } else if (input != []) {

      for (let i = 0; i < input.length; i++) {

         if (input[i] % 2 == 0 && input[i] != 0) {
   
            input.splice(i, 1);
            
         } 
   
      }

      return input;

   }

}