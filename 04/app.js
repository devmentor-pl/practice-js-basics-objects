const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const currDate = (new Date).toLocaleDateString();

user.checkBirthday = function(date) {

    if (typeof this.born === 'undefined') {
        return 'Nie podano danych urodzenia';
    }

    const userBornDate = this.born.day + '.' + this.born.month + '.' + this.born.year;

    if (userBornDate === date) {
        return `${this.firstName} ma dzisiaj urodziny!`
    }

    return false;
}

console.log(user.checkBirthday(currDate));