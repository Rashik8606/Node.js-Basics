
// function Add(num1,num2,callBack){
//     let err = false
//     if (num1==0){
//         err = true 
//     }
//     callBack(num1+num2,err)
// }

// function Multi(num1,num2,callBack){
//     callBack(num1*num2)
// }

// function Div(num1,num2,callBack){
//     callBack(num1/num2)
// }

// Add(10,20,(sum,err)=>{
//     if (err){
//         console.log('number is zero')
//     }else{
//         console.log(sum)
//         Multi(sum,sum,(result)=>{
//             console.log(result)
//             Div(result,10,(pro)=>{
//                 console.log(pro)
//             })
//         })
//     }    
// })

var Promise = require('promise')

function Add(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
           reject('Number is zero')
        }
        resolve(num1+num2)
    })
    
}
function Multi(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
           reject('Number is zero')
        }
        resolve(num1*num2)
    })
    
}
function Div(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
           reject('Number is zero')
        }
        resolve(num1/num2)
    })
    
}
Add(10,20).then((sum)=>{
    console.log(sum)
    return Multi(sum,sum)
}).then((result)=>{
    console.log(result)
    return Div(result,10)
}).then((pro)=>{
    console.log(pro)
})
.catch((err)=>{
    console.log(err)
})