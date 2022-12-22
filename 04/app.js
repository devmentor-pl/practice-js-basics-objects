// 1st solution
function checkBirthday() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const dateToday = day + '/' + month;

    // DD/MM
    const userBorn = Object.values(this.born).join('/').slice(0, -5);
    const userName = this.firstName;

    output(dateToday, userBorn, userName);
}

// 2nd solution
function checkBirthday2() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const dateToday = day + '/' + month;
    const userBorn = this.born.day + '/' + this.born.month;
    const userName = this.firstName;

    return output(dateToday, userBorn, userName);
}

// Output message
const output = function (date, born, name) {
    if (date === born) {
        console.log(`Today is ${name}'s birthday. Happy Birthday ${name}!`);
    } else {
        console.log(`Today is not ${name}'s birthday :(. ${name}'s birthday is in ${born} – remember that date!`);
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
    isBirthday: checkBirthday,
    isBirthday2: checkBirthday2,
}
