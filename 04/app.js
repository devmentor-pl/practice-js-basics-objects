const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '24',
        month: '04',
        year: '1985'
    }
}

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1; //months from 1-12
let day = dateObj.getUTCDate();

console.log(month, day)
console.log(parseInt(user.born.month), parseInt(user.born.day))

if (parseInt(user.born.day) === day && parseInt(user.born.month) === month) {
    console.log('User ma dzisiaj urodziny!')
}