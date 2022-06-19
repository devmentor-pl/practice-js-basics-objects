const user = {
	firstName: "Adam",
	lastName: "Nowak",
	born: {
		day: "14",
		month: "04",
		year: "1985",
		// day: "19",
		// month: "06",
		// year: "1985",
	},
};
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;

if (parseInt(user.born.day) === currentDay && parseInt(user.born.month) === currentMonth) {
	console.log("Dziś są Adama urodziny. Pamiętaj aby złożyć mu życzenia.");
} else {
	console.log("Dziś Adam nie obchodzi urodzin.");
}
