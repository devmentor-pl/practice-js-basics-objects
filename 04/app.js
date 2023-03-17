const user = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '15',
		month: '03',
		year: '1985',
	},
};

const createAgeString = user => {
	const day = user.born.day;
	const month = user.born.month;

	return `${day}/${month}`;
};
user.calcAge = function (currentDate, birthYear, user) {
	const userBirthday = birthYear(user);

	if (currentDate.includes(userBirthday)) {
		console.log('This person has today birthday');
	}
};
const currentDate = new Date().toLocaleDateString();

user.calcAge(currentDate, createAgeString, user);
