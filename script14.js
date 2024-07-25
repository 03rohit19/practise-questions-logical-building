//Reverse String Function
export function reverseString(str) {
  return str.split("").reverse().join("");
}

// Capitalize First Letters Function
export function capitalizeFirstLetter(str) {
  return str
    .split("")
    .map((word) => word.charAt(0).toUpperCase())
    .slice(1)
    .join("");
}

// Find Longest Word Function

export function findLongestWord(str) {
  return str
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
}

//Word Count Function
export function countWords(str) {
  return str.split("").length;
}

// Capitalizwthe first word

export const capitaliseAllWords = (input) => {
  if (!input) return "";
  return input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// object oriented programing
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  teach() {
    return `I teach ${this.subject}`;
  }
}

const myTeacher = new Teacher("Rama", 38, "English");
console.log(myTeacher.greet());
console.log(myTeacher.teach());
