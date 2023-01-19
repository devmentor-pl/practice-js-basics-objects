function Name(firstName,lastName,sex,age){
    this.firstName = firstName,
    this.lastName = lastName,
    this.sex = sex,
    this.age = age;   
    // this.info = this.info
    this.check()
    // this.info()
} 

Name.prototype.info = function(){
    console.log('imie:' + this.firstName +
                'nazwisko:' + this.lastName +
                'plec:' + this.sex + 
                'wiek:' + this.age);
}

Name.prototype.check = function() {
    if(this.age !== Number(this.age)){
        console.log('to nie jest wiek')

    }
    else{
        this.info()
    }
}

const nameOne = new Name(' lukas, ',' lukas, ',' male, ',99);
// nameOne.info();