const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '03',
        year: '1985'
    }
}

console.log(user.born.day, user.born.month)

const today = new Date()
const todayDay = today.getDate()
const todayMonth = today.getMonth() + 1
console.log(todayDay, todayMonth)

if(Number(user.born.day) === todayDay && Number(user.born.month) === todayMonth) {
    console.log (user.firstName + ' dziś są Twoje urodziny')
} else {
    console.log(';-)')
}