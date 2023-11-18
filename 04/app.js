const user = {
  firstName: 'Adam',
  lastName: 'Nowak',
  born: {
    day: '18',
    month: '11',
    year: '2023',
  },
};

user.checkIfBirthday = function () {
  const date = new Date();
  const actualYear = date.getFullYear().toString();

  const actualMonth =
    (date.getMonth() + 1).toString() < 10
      ? '0' + (date.getMonth() + 1).toString()
      : (date.getMonth() + 1).toString();

  const actualDay =
    date.getDate().toString() < 10
      ? '0' + date.getDate().toString()
      : date.getDate().toString();
  if (
    this.born.day === actualDay &&
    this.born.month === actualMonth &&
    this.born.year === actualYear
  ) {
    console.log(`${this.firstName} ${this.lastName} ma dzisiaj urodziny`);
  } else {
    console.log(
      'Nikt nie ma dzisiaj urodzin',
      actualDay,
      actualMonth,
      actualYear
    );
  }
};
user.checkIfBirthday();
