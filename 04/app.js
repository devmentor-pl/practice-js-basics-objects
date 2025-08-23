const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '03',
        month: '04',
        year: '1985'
    }
}

const currDate = new Date();
const currDay = currDate.getDate();
const currMonth = currDate.getMonth() + 1;

if(currDay === parseInt(user.born.day) & currMonth === parseInt(user.born.month)) {
    console.log('Gratulacje! ' + user.firstName + ' ' + user.lastName + ' ma dziś urodziny.')
}