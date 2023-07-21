const user = {
  firstName: 'Adam',
  lastName: 'Nowak',
  born: {
    day: '11',
    month: '07',
    year: '1985',
  },
};

const today = new Date();
const birthDate = new Date(
  parseInt(user.born.year),
  parseInt(user.born.month) - 1,
  parseInt(user.born.day)
);

if (
  today.getDate() === birthDate.getDate() &&
  today.getMonth() === birthDate.getMonth()
) {
  console.log(
    'Dzisiaj są urodziny użytkownika ' +
      user.firstName +
      ' ' +
      user.lastName +
      '!'
  );
} else {
  console.log(
    'Dzisiaj nie są urodziny użytkownika ' +
      user.firstName +
      ' ' +
      user.lastName +
      '.'
  );
}
