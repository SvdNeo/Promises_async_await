async function hello(){
const p1 = new Promise((resolve,reject)=>{
    resolve("Hi i am sanjay")
    
})
let output = await p1;
    console.log(output)
}
hello()