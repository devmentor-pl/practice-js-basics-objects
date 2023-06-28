const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "28",
    month: "06",
    year: "1985",
  },
};

function checkDate(user) {
  if (typeof user.born.day === "undefined") return null;
  if (typeof user.born.month === "undefined") return null;

  const userDay = Number(user.born.day);
  const userMonth = Number(user.born.month);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;

  if (userDay === day && userMonth === month) {
    return "Happy Briday 🎂";
  }

  return "Better luck next time";
}

const result = checkDate(user);
console.log(result);
