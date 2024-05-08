user = {
    firstName: "Krzysztof",
    lastName: "Kozłowski",
    sex: "Male",
    age: 38
}

for(const key in user) {
    console.log(key + ": " + user[key]);
}

for(const key in user) {
    console.log(`${key}: ${user[key]}`);
}