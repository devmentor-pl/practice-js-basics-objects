const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

user.getBorn = function() {

    const bornDay = Number(this.born['day']);
    const bornMonth = Number(this.born['month']);

    const currentDay = (new Date()).getDate();
    const currentMonth = ((new Date()).getMonth())+1;

    if (bornDay == currentDay || bornMonth == currentMonth) {
        return true;
    }
    return false;
}
console.log(user.getBorn());