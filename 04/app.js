const user = {
	firstName: "Adam",
	lastName: "Nowak",
	born: {
		day: "27",
		month: "04",
		year: "1985",
	},
};

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1;

// Dla porównania oprócz wartości również typu danych możemy użyć "parseInt()" do sprowadzenia wartości w obiekcie 'user' ze string do typu "number" lub "toString()" do wartości typu "number" z new Date() do typu "string" , wówczas sprawdzam przy pomocy "==="
user.born.day == currentDay && user.born.month == currentMonth
	? console.log("Birthday")
	: console.log("Not today");
