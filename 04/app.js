const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const currentDate = new Date(2002, 3, 14); 

if (
    currentDate.getDate() === Number(user.born.day) &&
    currentDate.getMonth() === Number(user.born.month - 1)
) {
    console.log(`${user.firstName} ${user.lastName} ma dzisiaj urodziny!`)
} else {
    console.log(`${user.firstName} ${user.lastName} nie obchodzi dziś urodzin`)
}
