const user = {
        firstName: "Krzysiek",
        lastName: "Swół",
        sex: "male",
        age: "35"
}

console.log(user.firstName);
console.log(user.lastName);
console.log(user.sex);
console.log(user.age);

//  lub

for (const key in user) {
        console.log(`wersja z pętla for....in - ${user[key]}`);
}