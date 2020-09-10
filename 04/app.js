const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const todayDate = new Date();

if((user.born.day == todayDate.getDate()) && (user.born.month == todayDate.getMonth() + 1) && (user.born.year == todayDate.getFullYear())) {
    console.log('Happy birthday', user.firstName);
}