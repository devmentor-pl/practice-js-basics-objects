const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '04',
        month: '12',
        year: '1985'
    }
}

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;


function checkBirthday(user){

    const userBirthday = user.born;
    const birthdayDay = parseInt(userBirthday.day);
    const birthdayMonth = parseInt(userBirthday.month);

    if (birthdayDay == currentDay && birthdayMonth == currentMonth) {
        return true;
    }
    else {
        return false;
    }

}
if (checkBirthday(user)){
    console.log('Wszystkiego najlepszego z okazji urodzin!');
}

console.log(checkBirthday(user));