const user = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '3',
		month: '5',
		year: '1985',
	},
}
const birthdayShow = function () {
	const dateToday = new Date()
	const dayToday = dateToday.getDate()
	const monthToday = dateToday.getMonth() + 1
    
	if (dayToday == 3 && monthToday == 5 ) {
		console.log(`${user.firstName} masz dziś urodziny`)
	} else {
		console.log(`${user.firstName} dziś nie masz urodzin`)
	}
}

birthdayShow(user.born.day, user.born.month)
