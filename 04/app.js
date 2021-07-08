const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '08',
        month: '07',
        year: '1985'
    }
}

const date = new Date();
const currentDay = date.getUTCDate();
const currentMonth = date.getMonth() +1;

console.log(currentMonth) ;

if((user.born.day) == currentDay && (user.born.month) == currentMonth) {
    console.log('Masz dzisiaj urodziny!!')
} else {console.log('Dziś nie pijesz')};