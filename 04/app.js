const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '17',
        month: '12',
        year: '1985'
    }
}
const fullDate = getCurrentlyDate();


function getCurrentlyDate() {
    const date = new Date();
    return date;
}

function checkBirthsday(date, obj) {
    const currentlyMonth = date.getMonth() + 1;
    const currentlyDay = date.getDate();

    if(currentlyDay == obj.born['day'] && currentlyMonth == obj.born['month']) {
        console.log(`Sto lat ! :)`);
    } else {
        console.log(`Niestety to nie sa jeszcze twoje urodziny :(`);
    }

}    

checkBirthsday(fullDate, user);




