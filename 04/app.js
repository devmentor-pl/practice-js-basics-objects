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

/* Sprawdzenie */
console.log(user.born['month']);   // '04'
console.log(user.born['day']);     // '14'
console.log(now.getMonth());       // '11'
console.log(now.getDate());        // '3'



const check = checkDate(user, now)

if (check === true) {
    console.log('ma urodziny :-)');
} else {
    console.log('nie ma urodzin ;-(');
}


function checkDate(user, date) {
    let month = parseInt(user.born['month']);
    let day = parseInt(user.born['day']);

    if (month === date.getMonth() && day === date.getDate()) {
        return true;
    } else {
        return false
    }
}

