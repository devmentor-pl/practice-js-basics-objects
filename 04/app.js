const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985',
    }
}

const now = new Date();

const check = checkDate(user, now)

if (check === true) {
    console.log('ma urodziny :-)');
} else {
    console.log('nie ma urodzin ;-(');
}


function checkDate(user, date) {
    if (user.born['year'] == date.getFullYear() || user.born['month'] == date.getMonth() || user.born['day'] == date.getDate()) {
        return true;
    } else {
        return false
    }
}

