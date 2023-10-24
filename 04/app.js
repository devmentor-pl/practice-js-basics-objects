const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985',
        birthday: function () {
            birthday(this.day + "." + this.month);
            return this.birthday
        }
    }
}


let today= new Date;

console.log(today)
console.log(user.born.birthday);