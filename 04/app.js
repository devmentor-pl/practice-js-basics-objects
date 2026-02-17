const user = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '14',
		month: '04',
		year: '1985',
	},
};

const today = new Date();
const todayDay = today.getDate();
const todayMonth = today.getMonth() + 1;

const userBornDay = Number(user.born.day);
const userBornMonth = Number(user.born.month);

if (todayDay === userBornDay && todayMonth === userBornMonth) {
	console.log('You have birthday today!!');
} else {
	console.log("You don\'t have birthday today!!");
}
