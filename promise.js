let promise = new Promise(function(resolve,reject){
setTimeout(() => {
    resolve("done")
}, 1000);
setTimeout(() => {
    reject("error")
}, 1000);
})
promise.then(result=>console.log(result),error=>console.log(error)).finally(()=>console.log("stop loading"))