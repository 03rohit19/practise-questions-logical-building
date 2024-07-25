// Encapsulation Object Oriented Programming
const user = {
  firstName: "Rohit",
  lastName: "Singh",
  age: 26,
  getUserAge: function () {
    return new Date().getFullYear - user.age;
  },
};
// Factory function
function createUser(firstName, lastName, age) {
  const user1 = {
    firstName,
    lastName,
    age,
    getUserAge: function () {
      return new Date().getFullYear() - this.age;
    },
  };
  return user1;
}

let result = createUser("Rohit", "singh", 26);
console.log(result.getUserAge());

// Construtor funstion and new keyword

function newUser(first, last, age) {
  this.first = first;
  this.last = last;
  this.age = age;
}

newUser.prototype.getFullYear = function () {
  return new Date().getFullYear() - this.age;
};

const user2 = new newUser("Ram", "Kumar", 36);
const user3 = new newUser("Ramesh", "Kumar", 36);

console.log(user2);
console.log(user3);
