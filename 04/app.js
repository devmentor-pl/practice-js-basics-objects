const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '09',
        month: '02',
        year: '1985'
    }
}

const date = new Date();
const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
const month = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
console.log(day, month);

if(user.born.day === day && user.born.month === month) {
    console.log("Masz dzis urodziny!");
}
