const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '27',
        month: '11',
        year: '1985'
    }
}

user.Birthday = function() {
    const now = new Date();
    const day = this['born']['day'];
    const month = this['born']['month'];
    const year = this['born']['year'];
    const date = new Date(year, month ,day);
    
    console.log(now.getMonth())
    if((now.getDate() == day) && (now.getMonth()+1 == month)) console.log("wszystikego najlepszego!");
    else console.log("to jeszcze nie ten dzień")
}

user.Birthday();