const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '08',
        month: '01',
        year: '1969'
    }
}

const now = new Date();

const date = [now.getDate(), now.getMonth()]
  .map(function (value) {
    if (value === 0) {
      value++;
    }
    if (value < 10) {
      return "0" + value;
    }
  });

const userBirthday = Object.values(user.born);

todaysBirthday (date, userBirthday);

function todaysBirthday (currentDate, userBirthday) {

  for (let i = 0; i < currentDate.length; i++) {
    if (currentDate[i] !== userBirthday[i]) {
      return console.log("Today are no birthdays.");
    }
  }

  return console.log("Today are " + user.firstName + " " + user.lastName + "'s birthday!");

}