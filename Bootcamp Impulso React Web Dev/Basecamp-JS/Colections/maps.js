const users = new Map();

users.set('Pedro', 'admin');
users.set('John', 'admin');
users.set('Marco', 'user');
users.set('Nah', 'user');
users.set('Paula', 'admin');

function adminUsers(map) {

   let admins = [];

   for ([key, value] of map) { // for...of example
      if (value === 'admin') {
         admins.push(key);
      }
   }

   return admins;

}

console.log(adminUsers(users));