const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "14",
    month: "04",
    year: "1985",
  },
};

const user2 = {
  firstName: "Jan",
  lastName: "Kowalski",
  born: {
    day: "25",
    month: "05",
    year: "2000",
  },
};

function happyBirthday(person) {
  const { year, month, day } = person.born;
  const { firstName, lastName } = person;

  const birthday = new Date(`${year}-${month}-${day}`)
    .toLocaleDateString("pl")
    .substring(0, 5);
  const now = new Date().toLocaleDateString("pl").substring(0, 5);
  const age = new Date().getFullYear() - year;

  return birthday === now
    ? console.log(`${firstName} ${lastName} obchodzi dzisiaj ${age}. urodziny.`)
    : console.log(`${firstName} ${lastName} nie obchodzi dzisiaj urodzin.`);
}

happyBirthday(user);
happyBirthday(user2);
