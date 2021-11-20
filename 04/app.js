const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const now = new Date(2021, 10, 20)
const bday = new Date(1985, 03, 14)

const isSameDay = (now, bday) => {
if (now.getMonth() === bday.getMonth() &&
    now.getDate() === bday.getDate()) {
        console.log("najlepszego!");
} else {
    console.log("sorry, nie masz urodzin")
    }
}

isSameDay(now,bday)
