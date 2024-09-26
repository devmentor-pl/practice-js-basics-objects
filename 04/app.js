const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}


const now = new Date();
const currDay = now.getDate();
const currMonth = now.getMonth() + 1;

if (parseInt(user.born.day) === currDay && parseInt(user.born.month) === currMonth) {
    console.log(user.firstName + ', wszystkiego najlepszego z okazji Twoich urodzin!');    
} else {
    console.log ('Dzisiaj nie masz urodzin, sprawdź innego dnia! ;)');
}