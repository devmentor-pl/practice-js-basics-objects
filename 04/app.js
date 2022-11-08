const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const day = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

function isUserBirthday() {

    if((user.born.day === day) && (user.born.month === month)) {
        return console.log('Happy Birthday!');
    }
    return console.log('Not Happy Birthday! but Have A Nice Day! ;) ');
}

isUserBirthday()