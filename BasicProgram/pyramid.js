const { Sample } = require("./sample");

function  Pyramid () {
    for (i = 1; i<=6; i++){
        row = ''
        for (j = 1; j<=i; j++){
            row += '*'
        }
        console.log(row)
    }
}

function Maths (a,b){
    let num1 = a+b;
    let num2 = a-b
    console.log(num1,num2)
}

Pyramid()
Maths(10,40)


function List (){
    var list = [
        'Rashik',
        'Farsana',
        'Mebin',
        'Akaash',
        'Vinayak',
        'Akshai',
        'Abhinav'
    ]
    
    for (k = 0; k<list.length; k++){
        console.log(list[k])
    }
}

List()

function Largest (){
    let lar = [10,20,110,40]
    let max = lar[0]
    for (i = 1; i<lar.length; i++){
        if (lar[i]> max){
            max = lar[i]
        }
    }
    console.log(max)
}
Largest()

var Person = {
    name : 'Rashik',
    age : 22,
    place : 'Kochi',
    display : function(){
        console.log(this.name)
    }
}
Person.dob='29-11-2002'
for (val in Person){
   
}
console.log(Person)

Person.displayAge=function(){
    console.log(this.age)
}
console.log(Person.displayAge())

function EmployeData (id,empname,empage,empcompany){
    this.id = id
    this.empname = empname
    this.empage = empage
    this.empcompany = empcompany
    this.display = function(){
        console.log('ID :'+ id,'Name :'+this.empname, 'Age :'+ this.empage, 'Company Name :'+empcompany)
    }
}
var Name1 = new EmployeData(1,'Rashik',23,'Infosis')
var Name2 = new EmployeData(2,'Farsana',23,'Aramco Saudi')

Name1.display()
Name2.display()

try{
    console.log(x)
}catch(error){
    console.log(error.message)
}

try {
    eval("Alert('hello'");
}catch(error){
    console.log("Syntax Error",error.message)
}

try{
    var result = 10/0;
    console.log('Result:'+result)
}catch(error){
    console.log('Error :',error.message)
}finally{
    console.log('this always runs')
}

name = Sample()