const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '13',
        month: '06',
        year: '1985'
    }
}


const day = new Date().getDate();
const month = new Date().getMonth() + 1;

function checkBirthday() {
    const bornDay = user['born']['day'];
    const bornMonth = user['born']['month'];
    if (bornDay == day && bornMonth == month) {
        console.log("Masz dzisiaj urodziny");
    } else {
        console.log('Nie masz dzisiaj urodzin');
    }
}

checkBirthday();
// console.log(day, month);
// console.log(user['born']['day'])


