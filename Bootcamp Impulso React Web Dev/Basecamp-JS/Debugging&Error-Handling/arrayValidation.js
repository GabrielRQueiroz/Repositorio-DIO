const prompt = require('prompt-sync')();

let inputArray = prompt("Insert an array:");

let inputLength = prompt("Insert the array length:");

console.log(arrayValidation(inputArray.split(' '), parseInt(inputLength)));


function arrayValidation(arr, num) {

   try {

      if (!arr && !num) throw new ReferenceError("Insert the required parameters");

      if (typeof arr !== 'object') throw new TypeError("Your array has to be an object");
      
      if (typeof num !== 'number') throw new TypeError("Your number has to be a number");

      if (arr.length !== num) throw new RangeError('Invalid array length');

      return arr;

   } catch(e) {

      if (e instanceof ReferenceError) {
         console.log('This is a reference error');
         console.log(e.message);
      } else if (e instanceof TypeError) {
         console.log('This is a type error');
         console.log(e.message);
      } else if (e instanceof RangeError) {
         console.log('This is an unexpected error: ' + e);
      }

   }

}
