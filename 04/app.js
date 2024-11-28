const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
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
        return 'Wszystkiego najlepszego z okazji dzisiejszych urodzin!';
    }
    else {
        return 'Dzis nie masz urodzin'
    }

}

console.log(checkBirthday(user));