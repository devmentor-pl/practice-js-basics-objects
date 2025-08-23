const user = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '14',
		month: '04',
		year: '1985',
	},
};

const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth() + 1;

user.checkBirthday = function () {
	if (
		parseInt(this.born.day) === currentDay &&
		parseInt(this.born.month) === currentMonth
	) {
		return console.log(
			`Wszystkiego najlepszego ${this.firstName} ${this.lastName}!`
		);
	}
	return false;
};

user.checkBirthday();
