const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '07',
        month: '06',
        year: '1985'
    }
}


// cała ta funkcja działa, wszysto OK,
// nie mogę tylko skonwertować daty z 0 na początku,
// kiedy liczba dnia jest jednocyfrowa

const bDay = function isBday(user) {
  const today = parseInt(new Date().getDate()) + '/' + (new Date().getMonth()+1);
  const born = (`${user.born['day']}/${user.born['month']}`);


  console.log('today: ' + today);
  console.log('born: ' + born);

  if (born === today) {
    console.log('Dziś są twoje urodziny, mimo złej pamięci wiem.');
  } else {
    console.log('Trop żubry dalej');
  }
}
// user.isBday = (date) {
//   const today = new Date().getDate()
//   console.log(today)
// };
