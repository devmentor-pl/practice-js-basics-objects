const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '05',
        month: '04',
        year: '1985'
    }
}


console.log(Number(user.born.day), Number(user.born.month))

const currDate = new Date()
const currDay = currDate.getDate()
const currMonth = currDate.getMonth() +1

console.log(currDay, currMonth)

if(Number(user.born.day) === currDay && Number(user.born.month) === currMonth) {
    console.log(user.firstName + ' ' + user.lastName + ' ma dziś urodziny!')
}