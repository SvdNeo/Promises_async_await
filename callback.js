// function load(src,callback){
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () =>{
//         callback(script)
//     }
//     document.body.append(script)
// }
// // Usage of the load function
// load('https://example.com/script.js', (script) => {
//   console.log('Script loaded:', script);
  // You can perform additional actions after the script is loaded
// });
// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   myFirst();
//   mySecond();

  function display(val){
    //document.getElementById("demo").innerHTML = val
    console.log(val)
  }

  function add(n1,n2,callback){
    let sum = n1+n2
    callback(sum)
  }
  function multiply(n1,n2,callback){
    let pdt = n1*n2
    callback(pdt)
  }
  add(5,5,display)

  multiply(2589,5469,display)
