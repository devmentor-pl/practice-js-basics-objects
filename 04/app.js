const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '23',
        month: '05',
        year: '1985'
    }
}

const currentDay = new Date().getDate() > 9 ? new Date().getDate() : '0' + new Date().getDate();
let currentMonth = new Date().getMonth();
currentMonth = parseInt(currentMonth+1) > 9 ? parseInt(currentMonth + 1) : '0' + parseInt(currentMonth+1);
const currentYear = new Date().getFullYear();

const date = `${currentDay}.${currentMonth}`;

console.log(`Aktualna data: ${currentDay}.${currentMonth}.${currentYear}`);

function checkDate(date, user) {
  if(date == `${user.born.day}.${user.born.month}`) {
      console.log(`Użytkownik ${user.firstName} ${user.lastName} obchodzi dzisiaj urodziny`)
   } else {
       console.log(`Użytkownik ${user.firstName} ${user.lastName} obchodzi urodziny dn. ${user.born.day}.${user.born.month}`);
   }
}
checkDate(date, user);