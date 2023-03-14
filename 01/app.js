const user = {
	firstName: 'Paweł',
	lastName: 'Niedużak',
	sex: 'male',
	age(birthYear) {
		const currentYear = new Date().getFullYear();
		return currentYear - birthYear;
	},
};
const { firstName, lastName, sex, age } = user;
const myAge = age(1800);
console.log(`My name is ${firstName} ${lastName} i'm ${sex} and i'm ${myAge} years old`);
