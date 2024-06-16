const user = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '16',
		month: '6',
		year: '1979',
	},
};

const todayDate = new Date();

let userDay = parseInt(user.born.day);
let userMonth = parseInt(user.born.month);
let userYear = parseInt(user.born.year);

console.log(
	`Dzisiaj jest dzień ${todayDate.getDate()}, miesiąca ${
		todayDate.getMonth() + 1
	}, ${todayDate.getUTCFullYear()} roku, a więc `
);

birthday(userDay, userMonth);

console.log(
	`Bo urodziłeś się dnia ${userDay}, miesiąca ${userMonth}, ${userYear} roku.`
);

function birthday(userDay, userMonth) {
	if (
		userDay === todayDate.getDate() &&
		userMonth === todayDate.getMonth() + 1
	) {
		return console.log('dzisiaj są twoje urodziny! Masz ' + userAge() + 'lat!');
	} else {
		return console.log('dzisiaj nie są stwoje urodziny');
	}
}

// przy okazji warto policzyć wiek uzytkownika.

function userAge() {
	userAge = todayDate.getUTCFullYear() - userYear;
	return userAge;
}
