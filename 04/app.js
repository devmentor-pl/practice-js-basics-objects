const user = {
  firstName: 'Adam',
  lastName: 'Nowak',
  born: {
    day: '21',
    month: '11',
    year: '2023',
  },
};

user.checkIfBirthday = function () {
  const date = new Date();

  const actualMonth =
    date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();

  const actualDay = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  if (
    parseInt(this.born.day) === actualDay &&
    parseInt(this.born.month) - 1 === actualMonth &&
    parseInt(this.born.year) === date.getFullYear()
  ) {
    console.log(`${this.firstName} ${this.lastName} ma dzisiaj urodziny`);
  } else {
    console.log(
      'Nikt nie ma dzisiaj urodzin',
      actualDay,
      actualMonth,
      date.getFullYear()
    );
  }
};
user.checkIfBirthday();
