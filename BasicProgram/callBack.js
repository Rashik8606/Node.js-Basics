const { Details } = require("./sample");

var details=(name)=>{
    console.log('name :> '+name)
}
var nameFunction  =(call)=>{
    call('Rashik')
}
nameFunction (details)


module.exports = { Details, nameFunction };

var name1 = new Details(1,'Rashik',22,'Male')
var name2 = new Details(2,'Farasana',23,'Female')

name1.display()
name2.display()
