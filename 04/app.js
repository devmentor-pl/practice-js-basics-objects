const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "14",
    month: "04",
    year: "1985",
  },
};

const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDate();

if (
  currentDay === parseInt(user.born.day) &&
  currentMonth === parseInt(user.born.month)
) {
  console.log(`Wszystkiego Najlepszego ${user.firstName}!!!`);
} else {
  console.log("Nie masz dziś urodzin :(");
}
