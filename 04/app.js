const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '16',
        month: '11',
        year: '1985',
    }
}

const now = new Date();
const nowDate = now.getDate();
const nowMonth = now.getMonth() + 1;
console.log('Dzisiejsza data to: ' + nowDate + " " + nowMonth);

user.checkData = function(day,month) {

    if((this['born']['day'] == day) && (this['born']['month'] == month)){
        console.log('Adam Nowak ma dzis urodziny! Wszytkiego najlepszego Adam');
    }
    else {
        console.log('Adam Nowak nie ma dziś urodzin!');
     }
}

user.checkData(nowDate,nowMonth);



// const {born:{day:adamDay, month:adamMonth}} = user;
// console.log(adamDay,adamMonth);

// const adamDay = user.born.day;
// console.log('Sprawdzam liczbe: '+ adamDay);


// function checkData(day){
//     if(day == nowDate){
//         console.log('ok');
//     }
//     else {
//         console.log('blad');
//     }
// }

// checkData(adamDay);


