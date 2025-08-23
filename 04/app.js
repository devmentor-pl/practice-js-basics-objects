const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '13',
        month: '09',
        year: '1985'
    }
}

const today = new Date();
const day = today.getDate();
console.log(day);

const month = today.getMonth() +1;
console.log(month);

const userMonth = parseInt(user.born.month);
console.log(userMonth);

const userDay = parseInt(user.born.day);
console.log(userDay);


if (userMonth === month && userDay === day ) {
    console.log('Gratulacje')
}
else {
    console.log ('Przykro mi')
}
