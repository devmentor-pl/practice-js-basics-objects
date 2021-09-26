const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '21',
        month: '03',
        year: '1984'
    }
}

user.getBirthdayDay = function() {

    const today = new Date().toLocaleDateString();
    const date = this['born'];
    const baseDate =  date['day'] + "." + date['month'] + "." + date['year'];

    if ( baseDate === today) {
        console.log("Today is the birthday of " + this['firstName'] + ' ' + this['lastName'])
    }
    else {
        console.log('Today is no birthdays');
    }

}

user.getBirthdayDay();

// Myślę, żę da się to zrobić innym sposobem, ale ten wydawał mi się najprostszy :)