const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '7',
        month: '08',
        year: '1985'
    }
}

console.log(parseInt(user.born.day), parseInt(user.born.month));

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() +1;

console.log(currentDay, currentMonth);

if(parseInt(user.born.day) === currentDay && parseInt(user.born.month) === currentMonth) {
    console.log(user.firstName + ' ' + user.lastName + ' masz dzisiaj urodziny!!!')
}