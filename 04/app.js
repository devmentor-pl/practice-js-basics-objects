const user = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '27',
		month: '00',
		year: '1985',
	},
}

const date = new Date()
const userBirthday = new Date(0, user.born.month, user.born.day)
const birthdayDay = new Date(0, date.getMonth(), date.getDate())

if (userBirthday.getTime() === birthdayDay.getTime()) {
	console.log('Użytkownik ma dziś urodziny!')
} else {
	console.log('Nie ma dziś urodzin')
}
