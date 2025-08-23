const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '11',
        month: '04',
        year: '1985'
    }
}



console.log(Number(user.born.day), Number(user.born.month))

const currDate = new Date()
const currDay = currDate.getDate()
const currMonth = currDate.getMonth()+1

console.log(currDay, currMonth)

if(currMonth===Number(user.born.month) && currDay===Number(user.born.day)){
   console.log('today is your birthday')} else{
        console.log('today is not your birthday')
}
           

