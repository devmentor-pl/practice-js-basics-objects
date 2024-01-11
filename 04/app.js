const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '11',
        month: '01',
        year: '1969'
    }
}

const now = new Date();
const day = now.getDate();
const month = zeroFill(now.getMonth() + 1);
const date = [day, month];
const userBirthday = [user.born.day, user.born.month];

todaysBirthday (date, userBirthday);

function zeroFill (number) {
  if (number < 10) {
    return "0" + number;
  }
}

function todaysBirthday (currentDate, userBirthday) {
  currentDate = currentDate.map(number => number.toString());
  userBirthday = userBirthday.map((number) => number.toString());

  for (let i = 0; i < 2; i++) {
    if (currentDate[i] !== userBirthday[i]) {
      return console.log("Today are no birthdays.");
    }
  }

  return console.log("Today are " + user.firstName + " " + user.lastName + "'s birthday!");

}