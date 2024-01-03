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

function asynchronous_operational_method() {
	let first_promise = 
		new Promise((resolve, reject) => resolve("Hello"));
	let second_promise = 
		new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(" its a async function..");
		}, 1000);
	});
	let combined_promise = 
		Promise.all([first_promise, second_promise]);
	return combined_promise;
}

async function display() {
	let data = await asynchronous_operational_method();
	console.log(data);
}

display();

// async function f() {
//     throw new Error("Whoops!");
//   }
//   f()

  async function jokes(){
    try {
        const url  = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1")
        let joke = await url.json()
        return joke
        
    } catch (error) {
        console.log(error)
    }
  }
  jokes().then((i)=>
  console.log(i))

  //task 1
  async function loadJson(url) {
    const response = await fetch (url)
    try {
        if (response.status == 200){
        
        let data  = await response.json();
        return data
    }   
    } catch (error) {
        throw new Error(response.status);
    }
   
  }
  
  loadJson('https://javascript.info/no-such-user.json')
  .catch(err=>console.log(err));
