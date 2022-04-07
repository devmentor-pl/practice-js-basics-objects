const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '07',
        month: '04',
        year: '1985'
    }
}


user.getDay = function () {
    return this.born.day;
}

user.getMonth = function () {
    return this.born.month;
}




const bornDay = user.getDay();
console.log('Dzień urodzenia ' + bornDay);

const bornMonth = user.getMonth();
console.log('Miesiąc urodzenia  ' + bornMonth);




let nowDay = new Date().getDate();

let nowMonth = new Date().getMonth() + 1;





function addZero(param) {
    if (param < 10) {
        param = '0' + param;
        return param;
    }

}





function check(paramA, paramB, paramC, paramD) {
    if (paramA === paramB && paramC === paramD) {
        console.log('TAK! Dziś są urodziny.');
    }
    else {
        console.log('Nie! Dziś nie ma urodzin.');
    }
}


console.log('Aktualny miesiąc: ' + addZero(nowMonth));


console.log('Aktualny dzień: ' + addZero(nowDay));


console.log('Czy dzisiaj są urodziny?')





check(addZero(nowDay), bornDay, addZero(nowMonth), bornMonth);



