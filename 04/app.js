const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '02',
        month: '06',
        year: '1985'
    }
}
const currDate = new Date();
const currDay = currDate.getDate();
const currMonth = currDate.getMonth() +1;

if (parseInt(user.born.day) === currDay && parseInt(user.born.month) === currMonth) {
    console.log ('HAPPY B DAY')
} else {
    console.log('Today is not your BDay')
}
