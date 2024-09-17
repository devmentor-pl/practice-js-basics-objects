const user = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '04',
		month: '04',
		year: '1985',
	},
};

const fullDate = getCurrentDate();

function getCurrentDate() {
	const now = new Date();
	return now;
}

function isBirthdatToday(now, obj) {
	const currentlyMonth = now.getMonth() + 1;
	const currentlyDay = now.getDate();

	if (currentlyDay === obj.born['day'] && currentlyMonth === obj.born['month']) {
		console.log('Dziś są Twoje urodziny!!!');
	} else {
		console.log('Niestety to nie są Twoje urodziny :(');
	}
}

isBirthdatToday(fullDate, user);
