const user = {
	firstName: "Adam",
	lastName: "Nowak",
	born: {
		day: "14",
		month: "04", 
		year: "1985",
	},
};

const userDay = Number(user.born.day);
const userMonth = Number(user.born.month);
console.log( userDay, userMonth);

// const now = new Date();
const now = new Date(2023, 3, 14);
const day = now.getDate();
const month = (now.getMonth() + 1);
console.log( day, month);


if (day === userDay && month === userMonth) {
	console.log('Happy Birthday !!!')
} else {
	console.log('Never mind')
}


