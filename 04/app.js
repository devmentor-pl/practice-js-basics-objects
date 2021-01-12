const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}


// const date = new Date(1985, 4, 14);
const date = new Date(1985, 1, 7);
console.log(
    date.getMonth(), 
    date.getDate(),
    )
    const now = new Date();

    setInterval( function() {
        const now = new Date();
         const time = getTime(now);
        // console.clear();
        console.log(
            now.getMonth() +1,
            now.getDate(),
            );
        }, 1000);

        


        function getTime(now) {
            let time = Date();
         return time;

        }
        


         if( date.getMonth() === now.getMonth()) {
            console.log('jest');
        } else {
            console.log('nie jest');
        }
        