const users = {
    0: {
        firstName: 'Adam',
        lastName: 'Nowak',
        born: {
            day: '14',
            month: '04',
            year: '1985'
        }
    },
    //dodanie drugiego użytkownika
    1: {
        firstName: 'Tomasz',
        lastName: 'Piątek',
        born: {
            day: '01',
            month: '05',
            year: '2002'
        }
    }
}

const today = new Date()
const currentDay = today.getDate()
const currentMonth = today.getMonth() + 1
const currentYear = today.getFullYear()

function hasBirthday(user, day, month) {
    
    let bornDay = parseInt(user.born.day)
    let bornMonth = parseInt(user.born.month)
    if (bornDay === day && bornMonth === month)
    {
        let name = user.firstName + ' ' + user.lastName
        let age = currentYear - parseInt(user.born.year)
        return `${name} ma dzisiaj ${age} urodziny.`
    }        
}

for (let key in users) {
    let user = users[key]
    // console.log( hasBirthday(user, 14, 4) ) // Czy ktoś ma urodziny 14.04?
    // console.log( hasBirthday( user, 1, 5) ) // Czy ktoś ma urodziny 01.05?
    console.log( hasBirthday( user, currentDay, currentMonth) ) // Czy ktoś ma dzisiaj urodziny?
}