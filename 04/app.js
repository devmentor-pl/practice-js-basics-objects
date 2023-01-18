const user = {
	firstName: "Adam",
	lastName: "Nowak",
	born: {
		day: "13",
		month: "04",
		year: "1985",
	},
};

const today = new Date();
console.log(today);

const currentDay = today.getDate();
console.log(currentDay);

const currentMonth = today.getMonth() + 1;
console.log(currentMonth);

birthday();

function birthday() {
	const dayOfBirth = user.born.day;
	const monthOfBirth = user.born.month;
	if (
		parseInt(dayOfBirth) === currentDay &&
		parseInt(monthOfBirth) === currentMonth
	) {
		console.log("Happy Birthday!");
	} else {
		console.log("Today is not your birthday");
	}
}
