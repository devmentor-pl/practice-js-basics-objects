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
    firstName: 'Karol',
    lastName: 'Nowak',
    born: {
        day: '15',    //
        month: '05',  //test na aktualny dzień
        year: '1985'
    }
}


const checkBirthday = function (obj) {
    // pobranie aktualnej daty
    const date = new Date();
    let currentDay = function() {
        return date.getDate();
    } 

    let currentMonth = function() {
        return date.getMonth()+1;
    } 

    // pobranie wartosci z obiektu
    let userDayOfBirth = parseInt(obj.born['day']);
    let userMonthOfBirth = parseInt(obj.born['month']);
    
    // porównanie dat
    if(userDayOfBirth === currentDay() && userMonthOfBirth === currentMonth()) {
        return "Super!, masz urodziny"}
    else {
        return "Musisz poczekać na swoje urodziny"};
        
   
}

console.log(checkBirthday(user));
console.log(checkBirthday(user2));