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
console.log(now);

const currDay = now.getDate();
console.log(currDay);

const currMonth = now.getMonth();
console.log(currDay);

birthday();
