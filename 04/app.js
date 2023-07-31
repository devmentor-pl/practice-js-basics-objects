const user = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '31',
		month: '07',
		year: '1985',
	},
};

function brithdayChecker(name) {
	const userDay = this.born.day;
	const userMonth = this.born.month;

	const dateDay = new Date().getDate();
	const dateMonth = new Date().getMonth() + 1;

	if (userDay == dateDay && userMonth == dateMonth) {
		return 'the user has a birthday today';
	}
}

console.log(brithdayChecker.call(user));
