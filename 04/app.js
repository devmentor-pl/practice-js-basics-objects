const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const now = new Date();
const currentDay = now.getDate();
const currentMonth = now.getMonth() + 1;

if (parseInt(user.born.day) === currentDay && Number(user.born.month) === currentMonth) {
    console.log('Today is your birthday!');
} else {
    console.log('Today is not your birthday.');
}