const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '26',
        month: '04',
        year: '1985'
    }
}

user.checkBirthday = function() {

    const now = new Date();
    const dayNow = now.getDate();
    const monthNow = now.getMonth() + 1;



    const dayUser = this['born']['day'];
    const monthUser = this['born']['month'];


    if (dayUser == dayNow && monthUser == monthNow) {
        return true;
    }
    return false;

}

const isBirthdayToday = user.checkBirthday();
console.log(isBirthdayToday);