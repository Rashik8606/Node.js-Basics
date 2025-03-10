const { resolve, reject } = require("promise");

async function Name() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Rashik')
        }, 3000);
    })
}
async function Age() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(22)
        }, 3000);
    })
}

Promise.all([Name(),Age()]).then((result)=>{
    console.log(result)
})