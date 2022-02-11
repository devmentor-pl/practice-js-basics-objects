const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '17',
        month: '04',
        year: '1985'
    }
}



user.isBirthday = function() {

    const now = new Date();
    const month = parseInt(now.getMonth() + 1);
    const day= parseInt(now.getDate());

    if(month == this.born["month"] && day == this.born["day"]) {

        return console.log(this.firstName + " dzis są twoje urodziny!");

    } else {

        return console.log(this.firstName + " jeszcze musisz poczekać");
        
    };

};

console.log(user.isBirthday());

