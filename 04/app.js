const user = {
	firstName: "Adam",
	lastName: "Nowak",
	born: {
		day: "10",
		month: "05",
		year: "1985",
	},
};
function getDate(user) {
	const month = new Date().getMonth() + 1;

	const day = new Date().getDate();

	if (month === parseInt(user.born.month) && day === parseInt(user.born.day)) {
		console.log("urodziny");
	} else {
		console.log("nie ten dzien");
	}
}

const result = getDate(user);
