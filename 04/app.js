const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '18',
        month: '04',
        year: '1985'
    }
}

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();

console.log(month, day)
console.log(parseInt(user.born.month), parseInt(user.born.day))

if (parseInt(user.born.day) === day && parseInt(user.born.month) === month) {
    console.log('User ma dzisiaj urodziny!')
}
if (parseInt(user.born.day) !== day || parseInt(user.born.month) !== month) {
    console.log('User nie ma dzisiaj urodzin')
}