const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}
const today = new Date()
const currentDay = today.getDate()
const currentMonth = today.getMonth() + 1
const currentYear = today.getFullYear()

user.hasBirthday = function(day, month) {
    let bornDay = parseInt(this.born.day)
    let bornMonth = parseInt(this.born.month)
    if (bornDay === day && bornMonth === month)
    {
        let name = this.firstName + ' ' + this.lastName
        let age = currentYear - parseInt(this.born.year)
        return `${name} ma dzisiaj ${age} urodziny.`
    }        
    return null
}

console.log( user.hasBirthday(currentDay, currentMonth) ) // null
console.log( user.hasBirthday(14, 4) ) //Adam Nowak ma dzisiaj urodziny