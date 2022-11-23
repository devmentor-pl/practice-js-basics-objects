const user = {
	firstName: 'Jan',
	lastName: 'Nowak',
	sex: 'male',
	age: 28,
};

for (const value in user) {
	console.log(user[value]);
}
