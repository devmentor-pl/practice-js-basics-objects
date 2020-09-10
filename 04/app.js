const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '10',
        month: '09',
        year: '1985'
    }
    // born: {
    //     day: 'wpisz aktualny dzień miesiąca',
    //     month: 'wpisz aktualny miesiąc',
    //     year: '1985'
    // }
}
const actDay = new Date().getDate();
const actMonth = new Date().getMonth() + 1;

user.checkBrthDay = function() {
    if(typeof this.born === 'undefined') {
        return undefined
    }
    brthMonth = parseInt(this.born.month);
    brthDay = parseInt(this.born.day);
    if (brthMonth === actMonth && brthDay === actDay) {
        if(typeof this.firstName === 'undefined') {console.log('Happy b-day to you!')} else {
        console.log(`Happy b-day ${this.firstName}!`)}
    } 
}

user.checkBrthDay()


