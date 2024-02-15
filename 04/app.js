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
    if(user.born.day === newUser.born.day && user.born.month === newUser.born.month && user.born.year === newUser.born.year) {
        console.log('Dzisiaj są ' + user.firstName + ' ' + user.lastName + ' urodziny!')
    } else {
        console.log('Dzisiaj ' + user.firstName + ' ' + user.lastName + ' nie ma urodzin.')
    }

}


const now = new Date();
console.log(now);

const newUser = { 
    ...user, 
    born: {
        day: '15',
        month: '02',
        year: '2024'
    }
}

console.log(newUser);

checkBirthsDate();
