const user = {
	firstName: "Adam",
	lastName: "Nowak",
	born: {
		day: "10",
		month: "03",
		year: "2024",
	},
}

const userFirstName = user.firstName
const userLastName = user.lastName
const userDayBirth = user.born.day
const userMonthBirth = user.born.month
const userYearBirth = user.born.year

const checkBirthDay = () => {
	const fullDate = new Date()
	let currentDay = fullDate.getDate()
	let currentMonth = fullDate.getMonth()
	const currentYear = fullDate.getFullYear()

	console.log(typeof currentMonth)

	if (currentDay < 10) {
		currentDay = "0" + currentDay
	} else {
		currentDay
	}

	if (currentMonth < 10) {
		currentMonth = "0" + currentMonth
		currentMonth++
	} else {
		currentMonth++
	}

	if (
		currentDay === userDayBirth &&
		currentMonth === userMonthBirth &&
		currentYear === userYearBirth
	) {
		console.log(
			`Użytkownik ${userFirstName} ${userLastName} obchodzi dzisiaj urodziny.`
		)
	} else {
		console.log("Dzisiaj nikt nie obchodzi urodzin.")
	}
}

checkBirthDay()
