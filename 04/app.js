const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '17',
        month: '03',
        year: '1985'
    }
}


const date = new Date();

let day = date.getDate()
let month = date.getMonth()+1
let year = date.getFullYear()

console.log(
    day + ' -',
    month+1 +' -',
    year
    )


    if (Number(user.born.day) === day && Number(user.born.month) === month) {
        console.log("Happy Birthday")
    }
    else {
        console.log("Be patient ... ")
    }


    // console.log(user.born.day)
    // console.log(Number(user.born.day) === day)