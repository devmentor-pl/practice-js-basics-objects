const user = {
    firstName:'Jacek',
    lastName:'Rózga',
    sex:'mezczyzna',
    age:"34",
}

for(const key in user){
    console.log(user[key]); //wyswietla samą wartość właściwości
    // console.log(key,user[key]); jak chcemy wyswietlic nazwe wlasciwosci i wartosc
}