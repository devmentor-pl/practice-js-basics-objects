const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const today = new Date();
const nowDay = getDay(today);
const nowMonth = getMonth(today);
birthdayToday(user);


function getDay(date) {
    let day = date.getDate();
    return (day < 10 ? '0' : '') + day;
}

function getMonth(date) {
    let month = date.getMonth() + 1;
    return (month < 10 ? '0' : '') + month;
}

function birthdayToday(object) {
    if(object.born.day === nowDay && object.born.month === nowMonth) {
        console.log('Dziś są urodziny ' + object.firstName + ' ' + object.lastName);
    } else{
        console.log('Dziś nikt nie ma urodzin'); 
    }
}