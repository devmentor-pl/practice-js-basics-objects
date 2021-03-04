const user = {
  firstName: 'Adam',
  lastName: 'Nowak',
  born: {
    day: '04',
    month: '03',
    year: '1985',
  },
};

const getDateOfBirth = (userObj) => {
  if (userObj.hasOwnProperty('born')) {
    const { year, month, day } = userObj.born;
    const userDateOfBirth = new Date(`${year}/${month}/${day}`);

    return {
      userDayOfBirth: userDateOfBirth.getDate(),
      userMonthOfBirth: userDateOfBirth.getMonth() + 1,
    };
  }

  return false;
};

const getCurrentDate = () => {
  const currentDate = new Date();

  return {
    currentDay: currentDate.getDate(),
    currentMonth: currentDate.getMonth() + 1,
  };
};

const checkBirthday = (user) => {
  const { userDayOfBirth, userMonthOfBirth } = getDateOfBirth(user);
  const { currentDay, currentMonth } = getCurrentDate();

  return userDayOfBirth === currentDay && userMonthOfBirth === currentMonth;
};

const isHavingBirthay = checkBirthday(user);

if (isHavingBirthay) {
  console.log('Happy Birthday!');
} else {
  console.log('Not today :(');
}
