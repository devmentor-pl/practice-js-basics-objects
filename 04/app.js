const user = {
	firstName: "Adam",
	lastName: "Nowak",
	born: {
		day: "14",
		month: "04", // było 04
		year: "1985",
	},
};

function birthday(person) {
	// const now = new Date();
	const now = new Date(2023, 4, 14);

	const day = now.getDate();
	const month = now.getMonth();

  const date = person.born;

  if (month == date['month'] && day == date['day']) {
    return console.log('Happy Birthday !!!');
  }
  else return console.log('Never mind');
}

birthday(user)