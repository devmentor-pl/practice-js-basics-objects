function checkBirthday() {
    const date = new Date('2022-02-01');
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    const userBornDay = this.born.day.toString();
    const userBornMonth = this.born.month.toString();
    const userBorn = userBornDay + '.' + userBornMonth;

    if (day.length === 1 && userBornDay.length === 2) {
        day = '0' + day;
    }

    if (month.length === 1 && userBornMonth.length === 2) {
        month = '0' + month;
    }

    if (day === userBornDay && month === userBornMonth) {
        return console.log(`Today is ${this.firstName}'s birthday. Happy Birthday ${this.firstName}!`);
    } else {
        return console.log(`Today is not ${this.firstName}'s birthday :(. ${this.firstName}'s birthday is in ${userBorn} – remember that date!`);
    }
}

const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '01',
        month: '02',
        year: '1985'
    },
    isBirthday: checkBirthday,
}
