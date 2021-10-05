const list = [
   {
      name: 'Street Fighter III',
      price: 15,
   },
   {
      name: 'Streets of Rage',
      price: 20,
   },
   {
      name: 'Golden Axe',
      price: 18,
   },
   {
      name: 'Altered Beast',
      price: 20,
   },

];

const availableBalance = 80;

function balanceCalc(availableBalance, list) {
   return list.reduce(function (prev, current, index) {
      return prev-current.price;
   }, availableBalance);
}
console.log(`${balanceCalc(availableBalance, list)}$ remaining`);