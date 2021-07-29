const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '28',
        month: '07',
        year: '1985'
    }
}

const dayBirth = +user.born.day;
const monthBirth = +user.born.month;

checkBirthday(dayBirth, monthBirth);

function checkBirthday(day, month) {
    const today = new Date();
    const text = (today.getDate() === day && (today.getMonth() + 1) === month) ?
        'ma dziś urodziny' :
        'nie ma dziś urodzin';
    console.log(user.firstName + ' ' + text);
}