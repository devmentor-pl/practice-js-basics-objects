function checkBirthday() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const userBorn = this.born.day + '.' + this.born.month;

    if (day.toString() === this.born.day.toString() && month.toString() === this.born.month.toString()) {
        return console.log(`Today is ${this.firstName}'s birthday. Happy Birthday ${this.firstName}!`);
    } else {
        return console.log(`Today is not ${this.firstName}'s birthday :(. ${this.firstName}'s birthday is in ${userBorn} – remember that date!`);
    }
}

const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '23',
        month: '12',
        year: '1985'
    },
    isBirthday: checkBirthday,
}
