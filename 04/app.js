const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '12',
        month: '10',
        year: '2020'
    }
}

user.checkBirthday = function(){
    const currYear = (new Date()).getFullYear();
    const currMonth = (new Date()).getMonth() +1;
    const currDay = (new Date()).getDate();
    console.log(currYear);
    console.log(currMonth);
    console.log(currDay);

    if(currYear==this.born.year && currMonth==this.born.month &&currDay==this.born.day){
        return 'Wszystkiego najlepszego!!! :-)'
    } else{
        return 'Użytkownik nie ma dziś urodzin'
    }
}