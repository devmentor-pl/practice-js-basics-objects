const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

console.log(checkHisBirthday(user));

function checkHisBirthday(person) {
    const today = new Date();

    const isBirthday = person.born.day === startWithZero(today.getDate()) && person.born.month === startWithZero(today.getMonth());
    if(isBirthday) {
        return `Wszystkiego najlepszego, ${person.firstName} ${person.lastName}! Dzisiaj masz urodziny.`;
    } else {
        return `${person.firstName} ${person.lastName} dzisiaj nie ma urodzin.`;
    }
}

function startWithZero(num) {
    return (num < 10 ? '0' : '') + num;
}