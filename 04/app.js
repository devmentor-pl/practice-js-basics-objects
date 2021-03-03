const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const checkIfUserBirthdayIsToday = (user) => {
    const date = new Date();
    const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

    if (user.born.day === day && user.born.month === month) {
        return `It's ${user.firstName} ${user.lastName}'s birthday!`;
    }
    return `It's not ${user.firstName} ${user.lastName}'s birthday.`;
}

console.log(checkIfUserBirthdayIsToday(user));



