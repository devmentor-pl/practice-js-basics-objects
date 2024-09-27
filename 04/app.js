const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '18',
        month: '02',
        year: '1985'
    }
}

const bornDay = parseInt(user.born.day);
const bornMonth = parseInt(user.born.month);

console.log(bornDay, bornMonth);

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() +1;

console.log(currentDay, currentMonth)

if(bornDay === currentDay && bornMonth === currentMonth){
    console.log(` ${user.firstName} ${user.lastName} ma dzis urodziny `)
}else{
    console.log(` ${user.firstName} ${user.lastName} ma urodziny  ${bornDay}.${bornMonth}, lecz to nie jest dziś  ` );
}