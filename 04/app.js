const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '10',
        year: '1985'
    }
}

const now = new Date();
const nowDate = now.getDate();
const nowMonth = now.getMonth();
console.log('Dzisiejsza data to: ' + nowDate + " " + nowMonth);


user.checkData = function(day,month) {
    if(this['born']['day'] === day && this['born']['month']=== month){
        console.log('Adam Nowak ma dzis urodziny! Wszytkiego najlepszego Adam');
    }
    else {
       console.log('Adam Nowak nie ma dziś urodzin!');
    }
}

user.checkData(nowDate,nowMonth);