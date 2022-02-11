const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '24',
        month: '04',
        year: '1985'
    }
}

const now = new Date();
const currentDay = now.getDate();
const currentMonth = now.getMonth() + 1;

if(parseInt(user.born.day) === currentDay && parseInt(user.born.month) === currentMonth) {
    console.log('Dziś są Twoje urodziny');
} else {
    console.log('Nie masz dzisiaj urodzin');
}