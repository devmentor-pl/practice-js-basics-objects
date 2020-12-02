const user1 = {
    firstName: 'Roman',
    lastName: 'Juzak',
    sex: 'man',
    age: 44,
}

const user2 = {
    firstName: 'Kinga',
    lastName: 'Juzak',
    sex: 'woman',
    age: 40,
}

for (const key in user1) {
    console.log(key, user1[key]);
}

for (const key in user2) {
    console.log(user2[key]);
}