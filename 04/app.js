const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '27',
        month: '03',
        year: '2022'
    }
};

const checkUserBirthday = function ({born}) {
    const dateNow = new Date().toLocaleDateString().split('.');
    const [dayNow, monthNow] = dateNow;
    const { day, month} = born;

    const dayMonthNowArr = [dayNow, monthNow];
    const userDayMonthArr = [day, month];

    const isBirthday = dayMonthNowArr.every(function (el, i) {
        return el === userDayMonthArr[i];
    });

    isBirthday? console.log(`It's your birthday ${user.firstName}`): null;

    return isBirthday;
};
checkUserBirthday(user);