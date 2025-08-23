const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const currentDate = new Date()
const currentDay = currentDate.getDate()
const currentMonth = currentDate.getMonth() + 1

if (Number(user.born.day) === currentDay && Number(user.born.month) === currentMonth) {
    console.log('Masz dziś urodziny!' + user.firstName + ' ' + user.lastName)
} else {
    console.log('Dziś nie obchodzisz swoich urodzin! ' + user.firstName + ' ' + user.lastName)
}

