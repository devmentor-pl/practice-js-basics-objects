const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985',
       
    }
}


let today= new Date;

if(Number(user.born.day) === today.getDate() && Number(user.born.month) === (today.getMonth()+1)) {
    console.log("Urodziny");
}
else{
    console.log("Nie dziś!");
}
