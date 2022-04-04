const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '08',
        month: '04',
        year: '1985'
    }
}
function isGotBirthday(day,month){

    const date=new Date();
    const currDay=date.getDate();
    const currMonth=date.getMonth()+1;
if (Number(day)===currDay && Number(month)===currMonth)
    {
    console.log("today is your birthday");
}else{
    console.log("no  your birthday ")
}
}
isGotBirthday(user.born.day,user.born.month)


