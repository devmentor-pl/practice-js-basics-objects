const user = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '30',
		month: '09',
		year: '1985',
	},
};

const today = new Date();

const userBDay = new Date(
	parseInt(user.born.year),
	parseInt(user.born.month) - 1,
	parseInt(user.born.day)
);

if (
	today.getMonth() === userBDay.getMonth() &&
	today.getDate() === userBDay.getDate()
) {
	console.log('Wszystkiego najlepszego!!! ' + user.firstName);
}
