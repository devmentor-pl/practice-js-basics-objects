const user = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '17',
		month: '03',
		year: '2021'
	}
};
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
console.log(date, day, month, year);

const isBirthday = ({ day, month, year }) => {
	let date = new Date();
	// console.log(day, month, year);
	if (day == date.getDate() && month == date.getMonth() + 1 && year == date.getFullYear())
		console.log('Today is Your Birthday!');
};

isBirthday(user.born);
