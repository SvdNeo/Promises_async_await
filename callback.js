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
function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond();

  function display(val){
    document.getElementById("demo").innerHTML = val
  }

  function add(n1,n2){
    let sum = n1+n2
    return sum
  }
 
  display(add(5,5));
