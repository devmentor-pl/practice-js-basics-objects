const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

console.log(Number(user.born.day), Number(user.born.month))
const now = new Date()

const nowDay = now.getDate();
const nowMonth = now.getMonth() + 1;

console.log(nowDay, nowMonth)

if (Number(user.born.day) === nowDay && Number(user.born.month) === nowMonth){
    console.log(user.firstName + ' ma dzisiaj urodziny')
}