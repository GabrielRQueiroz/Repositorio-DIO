const prompt = require('prompt-sync')();
 
let input = prompt("Palindrome check:");

console.log(palindromeChecker(input))

function palindromeChecker(input) {

   let original = input.split("").join("");
   let reverse = [];

   if (!input) {

      return "Type a word or a phrase.";

   } else {

      for (let i = input.length -1; i >= 0; i--) {
         reverse.push(original[i])
      }

      var text = reverse.join("");

   }

   return text === original ? "This is a palindrome! Nice." : "This is NOT a palindrome...";

}