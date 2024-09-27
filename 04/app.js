const user = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '4',
		month: '05',
		year: '1985',
	},
}
const birthdayShow = function () {
	const dateToday = new Date()
	const dayToday = startWithZero(dateToday.getDate())
	const monthToday = startWithZero(dateToday.getMonth() + 1)
	const birthDay = startWithZero(Number(user.born.day)) 
	const birthMonth = startWithZero(Number(user.born.month))
	console.log(typeof birthDay)
    console.log(birthDay);
	console.log(dayToday)
	console.log(typeof dayToday)

	if (dayToday === birthDay && monthToday === birthMonth) {
		console.log(`${user.firstName} masz dziś urodziny`)
	}
   else {
		console.log(`${user.firstName} dziś nie masz urodzin`)
	}
}
function startWithZero(num) {
	return (num < 10 ? '0' : '') + num
}
birthdayShow(user.born.day, user.born.month)
