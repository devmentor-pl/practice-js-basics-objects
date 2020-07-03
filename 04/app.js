const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}
const day = new Date().getUTCDate();
const month = new Date().getMonth();
console.log(month);
if (user.born.day == day && user.born.month == month) {
    console.log('Happy B-Day')
} else {
    console.log('Not your birthday today')
}