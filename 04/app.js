const user = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '2',
		month: '10',
		year: '2023',
		// fullDate: () => {
		// 	return Object.values(user.born).join('-')
		// },
	},
}
const isUserBirthday = () => {
	// get user birthday
	const userBirthDay = Object.values(user.born).join('-')

	// get today date
	let today = new Date()
	const day = today.getDate()
	const month = today.getMonth() + 1
	const year = today.getFullYear()
	today = day + '-' + month + '-' + year

	if (userBirthDay === today) {
		console.log(`${user.firstName} ${user.lastName} ma dzisiaj urodziny.`)
	} else {
		console.log(`${user.firstName} ${user.lastName} nie ma dzisiaj urodzin.`)
	}
}

isUserBirthday()
