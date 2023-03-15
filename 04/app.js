const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '15',
        month: '03',
        year: '1985'
    }
}

user.checkBirthday = function (day, month, year) {
    const date = (new Date).toLocaleDateString().split('.')
    const actualDay = date[0]
    const actualMonth = date[1]
    const actualYear = date[2]

    if (day === actualDay && month === actualMonth) {
        return `${this.firstName} obchodzi dziś ${actualYear - year} urodziny`
    }
    return `${this.firstName} nie ma dziś urodzin`
}
console.log(user.checkBirthday(user.born.day, user.born.month, user.born.year));