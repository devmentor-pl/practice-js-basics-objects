const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const now = new Date();

const calendar =function()
{
   console.log( now.getFullYear(),
                now.getMonth()+1,
                now.getDate());
}

calendar();

user.check =function (b)
{
  console.log(this[b])
  for(key in this[b])
  {
      console.log(this[b][key])
  }
}
user.check('born');
