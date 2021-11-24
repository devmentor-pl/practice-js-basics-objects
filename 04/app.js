const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '21',
        month: '11',
        year: '1985'
    }
}

const now = new Date()
const bday = new Date(user.born.year, user.born.month - 1, user.born.day)

const bdayCheck = (now, bday) => {
    if (now.getMonth() === bday.getMonth() &&
        now.getDate() === bday.getDate()) {
        console.log("najlepszego!");
    } else {
        console.log("sorry, nie masz urodzin")
    }
}

bdayCheck (now, bday)
