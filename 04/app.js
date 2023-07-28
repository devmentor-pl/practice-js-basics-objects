const user = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '28',
		month: '07',
		year: '1985',
	},
};

function brithdayChecker(name) {
	const userDay = this.born.day;
	const userMonth = this.born.month;

	const dateDay = new Date().getDate();
	const dateMonth = new Date().getMonth() + 1;

	if (dateMonth === 12) {
		dateMonth = 0;
	}

	if (userDay == dateDay && userMonth == dateMonth) {
		return 'the user has a birthday today';
	} 
}

console.log(brithdayChecker.call(user));
