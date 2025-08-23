const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '18',
        month: '08',
        year: '1985'
    }
}

function happyBday(user) {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

    if (day == user.born.day && month == user.born.month) {
        return "Today is your birthday!";
    } else {
    return "Today is not your birthday :c";
    }
}

console.log(happyBday(user));