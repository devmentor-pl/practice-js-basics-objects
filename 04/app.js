const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const currentData = new Date()

const currentDay = currentData.getDate().toString()
const currentMonth = getMonth()

const ifBirthday = checkIfBirthday(user)
console.log(ifBirthday)

function getMonth() {
    const month = currentData.getMonth() + 1
    return month < 10 ? '0' + month : month
}

function checkIfBirthday(person) {
    if (person.born.day === currentDay && person.born.month === currentMonth) {
        return "użytkownik obchodzi dzisiaj urodziny"
    } else {
        return "użytkownik nie ma dzisiaj urodzin"
    }
}

