const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
};

const today = new Date();

user.isBday = function (dateObj) {
    if (dateObj.getFullYear < parseInt(this.born.year)) {
        return false
    } else {
        return dateObj.getDate() === parseInt(this.born.day) && dateObj.getMonth() === parseInt(this.born.month) - 1;
    }
}

console.log(user.isBday(today));