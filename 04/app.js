const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '07',
        month: '07',
        year: '1985'
    }
}

const date = new Date();
const currentDay = date.UTCDate(),
const currentMonth = date.getMonth(),

if((user.born.day) == currentDay && (user.born.month) == currentMonth) {
    console.log('Masz dzisiaj urodziny!!')
} else {console.log('Dziś nie pijesz')};