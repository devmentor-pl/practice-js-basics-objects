const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

let today = new Date();

let todayDate = String(today.getMonth()) + String(today.getDate())

let birthday = new Date(1985, 03, 14)

let birthdayDate = String(birthday.getMonth()) + String(birthday.getDate())

if (todayDate === birthdayDate) {
    console.log(user.firstName, user.lastName, ' Today is Your Birthday ')
} else {
    console.log('Not your birthday')
}

