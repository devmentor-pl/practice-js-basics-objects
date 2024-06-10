const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const d = new Date();

userHasBirthday();

function userHasBirthday() {
    console.log(d.getDate() == user.born.day && (d.getMonth() + 1) == user.born.month);
    return d.getDate() == user.born.day && (d.getMonth() + 1) == user.born.month;
}