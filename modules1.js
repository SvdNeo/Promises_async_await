export let admin = {name:"sanjay"}
export let config = { };

 function sayHi() {
  console.log(`Ready to serve, ${config.user}!`);
}
 function sayBye(){
    console.log(`Bye ${config.user}`)
 }
 let obj = {team:"India"}
 export{sayHi,sayBye,obj}