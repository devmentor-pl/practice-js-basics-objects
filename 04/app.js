const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
};

function getYearFromDateString(date) {
    const splittedDate = date.slice(-4);
    return parseInt(splittedDate);
}

function showCommunicate(value) {
    const communicates = {
        1: "Wszystkiego Najlepszego!",
        2: "To jeszcze nie czas Twoich urodzin",
        3: "Jeszcze nie żyjesz :C"
    }
    console.log(communicates[value]);
}

function hasBirthday(person, date) {
    const usersBirthDate = `${person["born"]['day']}.${person["born"]['month']}.${person["born"]['year']}`
    const usersYear = getYearFromDateString(usersBirthDate);
    const currentYear = getYearFromDateString(date);
    if(usersBirthDate === date) {
        showCommunicate(1);
    } else if(currentYear < usersYear) {
        showCommunicate(3);
    } else {
        showCommunicate(2);
    }
    console.log(date);
}

function parseMonthNumber(month) {
    return month < 10 ? '0' + month : month;
}

function getCurrentDate(newDate) {
    const date = new Date();
    if(newDate) {
        const date = new Date(newDate);
        return date.toLocaleDateString();
    }
    return `${date.getDate()}.${parseMonthNumber(date.getMonth())}.${date.getFullYear()}`;
}

function parseMonthNumber(month) {
    return month < 10 ? '0' + month : month;
}


const birthdayDate = getCurrentDate('04-14-1985');
const currentDate = getCurrentDate();
const noLifeDate = getCurrentDate('04-14-1980'); 

hasBirthday(user, birthdayDate);    //Wszystkiego Najlepszego!
hasBirthday(user, currentDate);     //To jeszcze nie czas Twoich urodzin
hasBirthday(user, noLifeDate);      //Jeszcze nie żyjesz :C