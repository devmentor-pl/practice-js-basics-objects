const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '05',
        month: '04',
        year: '1985'
    }
}

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear()

if (Number(user.born.day) === day && Number(user.born.month) === month) {
    console.log(`${user.firstName} ${user.lastName} ma dzisiaj urodziny i skończył ${year - user.born.year} lat`)
} else {
    console.log(`${user.firstName} ${user.lastName} niestety nie ma dzisiaj urodzin`)
}