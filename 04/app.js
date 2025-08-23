const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '19',
        month: '08',
        year: '1985'
    }
}

function checkBirthday(user) {
    const today = new Date();
    const currentDay = String(today.getDate()).padStart(2, '0');
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0');

    if (user.born.day === currentDay && user.born.month === currentMonth) {
        console.log(`Dzisiaj są urodziny użytkownika ${user.firstName} ${user.lastName}!`);
    } else {
        console.log(`Dzisiaj nie są urodziny użytkownika ${user.firstName} ${user.lastName}.`);
    }
}

checkBirthday(user);