const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const now = new Date().toLocaleDateString()
const userDay = user.born.day
const userMonth = user.born.month

const checkBirthday = function () {
    const userBirthDate = `${userDay}.${userMonth}`

    if (now.includes(userBirthDate)) {
        console.log("Correct! Today is the day of your birth!")
    } else {
        console.log("Today is not the day of your birth.")
    }
}

checkBirthday()