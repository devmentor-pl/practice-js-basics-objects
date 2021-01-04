const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

user.checkingDate = function (day, month) {

    const currentMonth = new Date().getMonth();
    const userMonth = this['born']['month'];

    if (userMonth === currentMonth) {

        const currentDay = new Date().getDate();
        const userDay = this['born']['day'];

        if (currentDay === userDay) {
            const congrats = 'Sto lat';
            return congrats;
        }
        return null;
    }
}