const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const user2 = {
    firstName: 'Tomasz',
    lastName: 'Tomaszewski',
    born: {
        day: '02',
        month: '03',
        year: '1985'
    }
}

const me = {
    firstName: 'Filip',
    lastName: 'K',
    born: {
        day: '17',
        month: '03',
        year: '1994'
    }
}

const hasBirthday = function(person){

    if (person === undefined){
        return null
    }

    const { firstName, lastName, } = person
    const birthDay = Number(person.born.day);
    const birthMonth = Number(person.born.month);
    const birtYear = Number(person.born.year);

    const today = new Date();
    const currentlyYear = today.getFullYear();
    const currentlyDay = today.getDate();
    const currentlyMonth = Number(today.getMonth() + 1) ;

    if((birthDay === currentlyDay) && (birthMonth === currentlyMonth)){
        return console.log(`Hey ${firstName}, you have birthday today! The date is ${currentlyDay}.${currentlyMonth}.${currentlyYear}`)
    } else if ((birthDay < currentlyDay) && (birthMonth === currentlyMonth)){
        return console.log(`Hey ${firstName}, you will have birthday in ${currentlyDay - birthDay} days`);
    } else {
        return console.log(`Hey ${firstName}, you need to wait for your birthday`)
    }

    

};

hasBirthday(me);
hasBirthday(user);
hasBirthday(user2);