const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '21',
        month: '03',
        year: '1985'
    },
    checkBirthday: function() {
      const now = new Date();
      const day = now.getDate();
      const month = (now.getMonth() + 1);
      const bornDayInteger = parseInt(this['born']['day']);
      const bornMonthInteger = parseInt(this['born']['month']);

      if ((bornDayInteger === day) && (bornMonthInteger === month)) {
        return console.log('Happy Birthday!!!');
      } else {
        return console.log('Sorry it is not your birthday');
      }
        
    },
}

user.checkBirthday();
