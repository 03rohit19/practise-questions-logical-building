// New Concepts
const stringOne = 'Hello, Developer!'
const stringUpper = stringOne.toUpperCase()
console.log(stringUpper)
const stringNoSpace = stringOne.replace(/ /g, '')
console.log(stringNoSpace)

const isLeap = (year) => {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return true;
    } else {
        return false;
    }
};

const result = isLeap(2016);
console.log(result);

const currentDate = new Date();

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
const dayOfWeek = days[currentDate.getDay()];

console.log(currentDate.getDay())

// find firts non-repeating character
export const findCharacter = (str) => {
	const charCounts = {}

	for (let i = 0; i < str.length; i++) {
		const char = str[i]
		charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1
	}

	for (let i = 0; i < str.length; i++) {
		const char = str[i]
		if (charCounts[char] === 1) {
			return char
		}
	}

	return null
}

// prototypal inheritance
export function Person(firstName, lastName, age) {
	this.firstName = firstName
	this.lastName = lastName
	this.age = age
}

export function Employee(firstName, lastName, age, jobTitle, salary) {
	Person.call(this, firstName, lastName, age)
	this.jobTitle = jobTitle
	this.salary = salary
}

Employee.prototype = new Person()

export const employee1 = new Employee(
	'John',
	'Doe',
	30,
	'Software Developer',
	80000
)
console.log(employee1)