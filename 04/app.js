const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const today = getDate();
checkAge(user);

function getDate() {
    const today = new Date();

    let fullDate = {
        day: '',
        month: '',
        year: '',
    }
     
    fullDate.day += today.getDate();
    fullDate.month += startWithZero((today.getMonth() + 1));
    fullDate.year += today.getFullYear();
    return fullDate;
}

function checkAge(userData) {
    if (today.day == userData.born.day && today.month == userData.born.month) {
        const age = today.year - userData.born.year;
        console.log('Dzisiaj są '+ age +' urodziny użytkownika '+ userData.firstName +' '+ userData.lastName);
    }
    else {
        console.log('Dzisiaj użytkownik nie obchodzi urodzin');
    }
}

function startWithZero(num) {
    return (num < 10 ? '0' : '') + num
}