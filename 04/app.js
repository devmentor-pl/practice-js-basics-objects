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
console.log(now);

const currDay = now.getDate();
console.log(currDay);

const currMonth = now.getMonth() + 1;
console.log(currDay);

birthday();

function birthday() {
    const dBirth = user.born.day;
    const mBirth = user.born.month;
    if (
        parseInt
    )
}