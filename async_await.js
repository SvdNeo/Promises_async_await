async function hello(){
const p1 = new Promise((resolve,reject)=>{
    resolve("Hi i am sanjay")
    
})
let output = await p1;
    console.log(output)
}
hello()



const getData = async () => {
    let y = await "Hello World";
    console.log(y);
}
 
console.log(1);
getData();
console.log(2);