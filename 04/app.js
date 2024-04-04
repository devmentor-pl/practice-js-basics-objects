const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '05',
        month: '04',
        year: '1985'
    }
}

function checkBirthday(person) {
    let today = new Date();
    let currentDay = addLeadingZero(today.getDate());
    let currentMonth = addLeadingZero(today.getMonth() + 1);
    let birthdayDay = person['born']['day'];
    let birthdayMonth = person['born']['month'];
    return (birthdayDay == currentDay && birthdayMonth == currentMonth);
}


console.log(checkBirthday(user));

function addLeadingZero(input) {
    return (input < 10 ? '0' : '') + input;
}