const user1 = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '06',
		month: '01',
		year: '1985',
	},
};
const user2 = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '16',
		month: '09',
		year: '2000',
	},
};

const user3 = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '08',
		month: '10',
		year: '1995',
	},
};

function isBirthday(user) {
	const extractDateFromGivenObj = `${user.born.day}.${user.born.month}`;
	const dateToday = new Date().toLocaleDateString().match(/\d\d.\d\d/g);
	return Number(dateToday) === Number(extractDateFromGivenObj);
}

console.log(isBirthday(user1));
console.log(isBirthday(user2));
console.log(isBirthday(user3));
