const { resolve, reject } = require("promise");

function Name() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Rashik')
        }, 3000);
    })
}
function Age() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(22)
        }, 3000);
    })
}

Promise.all([Name(),Age()]).then((result)=>{
    console.log(result)
})

async function getName(){
    let getData = await Name()
    console.log(getData)
}
getName()
