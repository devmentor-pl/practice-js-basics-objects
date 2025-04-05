const user = {
  firstName: 'Adam',
  lastName: 'Nowak',
  born: {
    day: '05',
    month: '04',
    year: '2025',
  },
};

// user born date
let bornDay = user.born.day;
let bornMonth = user.born.month;
let bornYear = user.born.year;

let userBornDate = `${bornDay}-${bornMonth}-${bornYear}`;

// current date
let currentDate = new Date();
currentDate.setDate(currentDate.getDate());

let day = ('0' + currentDate.getDate()).slice(-2);
let month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
let year = currentDate.getFullYear();

let formattedDate = `${day}-${month}-${year}`;

if (userBornDate === formattedDate) {
  console.log('Happy Birthday!');
}
