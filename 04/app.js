const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

// test
// ----------------
// const user = {
//     firstName: 'Adam',
//     lastName: 'Nowak',
//     born: {
//         day: '09',
//         month: '04',
//         year: '1985'
//     }
// }

// test
// -----------------
// const date = new Date(2022,2,29)

// current date
const date = new Date()
console.log('Current date: ', date.getFullYear(), date.getMonth() + 1, date.getDate())

// current date for birthday
const month =  date.getMonth() + 1
const newMonth = date.getMonth() + 1 < 10 ? '0'+ month: month
const day = date.getDate()
const newDay = day < 10 ? '0'+ day : day
const currentDateBirthday = `${newMonth} ${newDay}`
console.log('current date:', currentDateBirthday)

//  user's date
const userDateBirthday = `${user.born['month']} ${user.born['day']}`
console.log('birthday day:',userDateBirthday)

// checking dates
if(userDateBirthday === currentDateBirthday) {
    console.log("Today is the user's birthday :) CONGRATULATIONS")
} else {
    console.log("Today there isn't user's birthday - wait for it ...")
}






