const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '4',
        year: '1985'
    }
}

const bornDay = Number(user['born']['day'])
const bornMonth = Number(user['born']['month'])
const bornYear = Number(user['born']['year'])

const now = new Date();

const year = now.getFullYear()
const month = now.getMonth()
const day = now.getDate()

const check = function(){
   
    if(bornDay&&bornMonth&&bornYear===day&&month&&year){
    return 'yes'

} else return 'no'
}

console.log(check())
