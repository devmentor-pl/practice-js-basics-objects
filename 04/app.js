const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '9',
        month: '03',
        year: '1985'
    }
}

const time = new Date();

const day = time.getDate().toString();
let month = time.getMonth();
// powiększam o 1 wartość, ponieważ metoda indeksuje miesiące od 0
month+=1;

month = month < 10 ? '0' + month  : month ;

function showBirthday() {
    if(user.born.day == day && user.born.month == month ) {
        console.log('Wszystkiego najlepszego Adam :)');
    } else {
        console.log('Adam nie obchodzi dziś urodzin :(');  
    }
}

showBirthday();