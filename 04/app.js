const user = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '14',
		month: '04',
		year: '1985',
	},
}

const date = new Date()
const userBirthday = new Date(user.born.month, user.born.day)
const today = new Date(date.getMonth(), date.getDate())

if (userBirthday.getTime() === today.getTime()) {
	console.log('Użytkownik ma dziś urodziny!')
} else {
	console.log('Nie ma dziś urodzin')
}
