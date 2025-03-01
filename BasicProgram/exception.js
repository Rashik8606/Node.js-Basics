var number = require('readline-sync')
var value = number.question('what is your age :> ')
value = Number(value)
try{
    if (value <=18) {
        throw new Error ('You Are not eligible !')  
    } 
    console.log('You are eligible!');
}catch(error){
    console.log(error.message);
}