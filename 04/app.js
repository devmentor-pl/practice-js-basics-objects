const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '15',
        month: '10',
        year: '1985',
    }
}

const now = new Date();
const nowDate = now.getDate();
const nowMonth = now.getMonth();
console.log('Dzisiejsza data to: ' + nowDate + " " + nowMonth);

user.checkData = function(day,month) {

    if((user['born']['day'] == day) && (user['born']['month'] == month)){
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
//     console.log(day);
//     if(day == nowDate){
//         console.log('ok');
//     }
// }

// checkData(adamDay);


