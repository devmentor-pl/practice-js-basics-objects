const user = {
	firstName: "Adam",
	lastName: "Nowak",
	born: {
		day: "30",
		month: "06",
		year: "1985",
	},
};

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1;

parseInt(user.born.day) === currentDay &&
parseInt(user.born.month) === currentMonth
	? console.log("Birthday")
	: console.log("Not today");
