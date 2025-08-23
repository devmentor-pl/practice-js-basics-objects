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
const userDayBirth = parseFloat(user.born.day)
const userMonthBirth = parseFloat(user.born.month)
const userYearBirth = user.born.year

const checkBirthDay = () => {
	const fullDate = new Date()
	let currentDay = fullDate.getDate()
	let currentMonth = fullDate.getMonth()
	const currentYear = fullDate.getFullYear()

	if (currentDay < 10) {
		currentDay = "0" + currentDay
	} else {
		currentDay
	}

	// console.log(typeof currentDay, currentDay)

	if (currentMonth < 10) {
		currentMonth++
		currentMonth = parseFloat("0" + currentMonth)
	} else {
		currentMonth++
	}

	// console.log(typeof currentMonth, currentMonth)

	if (
		currentDay === userDayBirth &&
		currentMonth === userMonthBirth
	) {
		console.log(
			`Użytkownik ${userFirstName} ${userLastName} obchodzi dzisiaj urodziny.`
		)
	} else {
		console.log("Dzisiaj nikt nie obchodzi urodzin.")
	}
}

checkBirthDay()
