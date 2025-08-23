const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

function birthdayCheck (person) {
    const date = new Date();
    const dayToday = date.getDate();
    const monthToday = date.getMonth() +1;

    if (parseInt(person['born']['day'])===dayToday && parseInt(person['born']['month'])===monthToday) {
        return "Dzisiaj są urodzinki!"
    }

    return "Dzisiaj nie ma urodzinek"
}

console.log(birthdayCheck(user));
