const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '07',
        month: '03',
        year: '1985'
    }
}

console.log( user.firstName + (isBirthday(user) ? ' ma dzisiaj urodziny' : ' nie ma dzisiaj urodzin'));

function isBirthday(person){
    
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth()+1;
    
    if ((person['born'].day==day)&&(person['born'].month==month)){
        return true;
    }
    
    return false;
}

