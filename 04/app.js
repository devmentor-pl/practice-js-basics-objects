const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "14",
    month: "04",
    year: "1985",
  },
}

function showBirtDay(user) {
  const today = new Date()
  const currentDay = String(today.getDate()).padStart(2, "0")
  const currentMonth = String(today.getMonth() + 1).padStart(2, "0")
  // +1 ponieważ getMonth() zwraca miesiące od 0 do 11, to dla zapamiętania

  if (user.born.day === currentDay && user.born.month === currentMonth) {
    console.log("You have birthday", user.firstName)
  } else {
    console.log("You don't have birthday", user.firstName)
  }
}

showBirtDay(user)

