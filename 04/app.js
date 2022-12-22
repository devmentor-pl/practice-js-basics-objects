function birthdayCheck() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const dateToday = day + '/' + month;
    const userBorn = Object.values(this.born).join('/');
    const userBirthday = userBorn.slice(0, -5);

    if (dateToday === userBirthday) {
        console.log(`Today is ${this.firstName}'s birthday. Happy Birthday ${this.firstName}!`);
    } else {
        console.log(`Today isn't ${this.firstName}'s birthday :(. ${user.firstName}'s birthday is in ${userBirthday} – remember that date!`);
    }
}

const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '22',
        month: '12',
        year: '1985'
    },
    isBirthday: birthdayCheck,
}