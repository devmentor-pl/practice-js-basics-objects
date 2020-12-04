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
console.log(now.getMonth() + 1);   // '12'
console.log(now.getDate());        // '4'



const check = checkDate(user, now)

if (check === true) {
    console.log('ma urodziny :-)');
} else {
    console.log('nie ma urodzin ;-(');
}


function checkDate(user, date) {
    let month = parseInt(user.born['month']);
    let day = parseInt(user.born['day']);
    let monthLokal = date.getMonth() + 1;
    let dayLokal = date.getDate();


    if (month === monthLokal && day === dayLokal) {
        return true;
    } else {
        return false;
    }
}

