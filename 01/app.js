const user = {
	firstName: 'John',
	lastName: 'Doe',
	sex: 'male',
	age: 20,
}

for (const key in user) {
	console.log(user[key])
}

console.log() // for empty space
console.log(user.firstName)
console.log(user.lastName)
console.log(user.sex)
console.log(user.age)
