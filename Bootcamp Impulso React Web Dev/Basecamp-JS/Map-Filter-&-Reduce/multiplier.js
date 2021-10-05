const apple = {
   value: 1.
}

const orange = {
   value: 2,
}

const banana = {
   value: 3,
}

function useThis(arr, thisArg) {
   return arr.map( function(item) {
      return item * this.value;
   }, thisArg);

}

function noThis(arr) {
   return arr.map( function(item) {
      return item * 2;
   });
}

const numArr = [1, 2, 3, 4];

console.log('When: this == apple: ', useThis(numArr, apple));
console.log('When: this == orange: ', useThis(numArr, orange));
console.log('When: this == banana: ', useThis(numArr, banana));

console.log('Without "this": ', noThis(numArr));