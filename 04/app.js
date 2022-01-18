const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '20',
        month: '01',
        year: '1985'
    }
}

user.checkIfBirthday= function() {
    const date= new Date;
    const day= addZero(date.getDate());
    const month= addZero(1+(date.getMonth())); 
    function addZero(element){
        return element<10?'0'+element:''+element;
    }
    day===this.born.day&&month===this.born.month?console.log('Its your birthday !'):console.log('Its not your birtday :(');
}

user.checkIfBirthday();

