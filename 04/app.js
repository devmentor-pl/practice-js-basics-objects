const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

console.log(
    user.born.day,
    user.born.month,
    user.born.year,
)

function checkBirthsDate() {
    if(user.born.day === now.day && user.born.month === now.month) {
        console.log('Dzisiaj ' + user.firstName + ' ' + user.lastName + ' ma urodziny!')
    } else {
        console.log('Dzisiaj ' + user.firstName + ' ' + user.lastName + ' nie ma urodzin.')
    }
}

const now = new Date();

console.log(now.getDate(), now.getMonth());
console.log(now);

checkBirthsDate();
