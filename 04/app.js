const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '06',
        month: '07',
        year: '1985'
    }
}
const date = new Date();
const day = date.getUTCDate();
const month = date.getMonth() + 1;

const userBornDate = parseInt(user.born.day);
const userBornMonth = parseInt(user.born.month);

console.log(month);
console.log(userBornMonth)


if (userBornDate == day && userBornMonth == month) {
    console.log('Happy B-Day')
} else {
    console.log('Not your birthday today')
}