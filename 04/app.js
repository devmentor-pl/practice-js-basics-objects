const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const currentDate = new Date()

const userDate = user.born.day + user.born.month 
const currentDateFormated = startWithZero(currentDate.getDate()) + "" + startWithZero((currentDate.getMonth() + 1))

if(userDate == currentDateFormated) {
    console.log("Masz Dzisiaj Urodziny!!")
} else console.log("Nie masz dzisiaj urodzin")

function startWithZero(number) {
    return (number < 10 ? '0' : '') + number
}
