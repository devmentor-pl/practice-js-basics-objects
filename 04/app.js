const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const currentDate = new Date(1985, 4, 14);

if (
    currentDate.getDate() === Number(user.born.day) &&
    currentDate.getMonth() === Number(user.born.month) &&
    currentDate.getFullYear() === Number(user.born.year)
) {
    console.log(`${user.firstName} ${user.lastName} ma dzisiaj urodziny!`)
} else {
    console.log(`${user.firstName} ${user.lastName} nie obchodzi dziś urodzin`)
}
