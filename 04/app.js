const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}



let currentDate = new Date;
let today = {
  day: currentDate.getDate(),
  month: currentDate.getDay(),
  year: currentDate.getFullYear(),
}

if(user.born.day == today.day && user.born.month == today.month && user.born.year == today.year) {
  console.log('Happy Birthday');
}
