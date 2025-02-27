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
    place : 'Kochi'
}
Person.dob='29-11-2002'
for (val in Person){
   
}
console.log(Person)


function EmployeData (id,empname,empage){
    
}