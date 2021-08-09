const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "9",
    month: "08",
    year: "1985",
  },
};

const userBirthday = new Date(
  user.born.year,
  user.born.month - 1,
  user.born.day
);

const now = new Date();

if (
  now.getMonth() === userBirthday.getMonth() &&
  now.getDate() === userBirthday.getDate()
) {
  console.log("Użytkownik obchodzi dziś urodziny");
} else {
  console.log("Użytkownik nie obchodzi dziś urodzin");
}
