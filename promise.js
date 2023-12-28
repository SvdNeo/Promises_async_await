let promise = new Promise(function(resolve,reject){
setTimeout(() => {
    resolve("done")
}, 1000);
setTimeout(() => {
    reject("error")
}, 1000);
})
promise.then(result=>console.log(result),error=>console.log(error)).finally(()=>console.log("stop loading"))

new Promise((resolve,reject)=>{
    throw new Error("err")
})
.finally(()=>{console.log("ignore the error")}).catch(err=>console.log(err))

//task 1
let promise1 = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise1.then(res=>console.log(res));

  //task 2
  function delay(ms) {
    return new Promise(resolve=>setTimeout(resolve,ms))
  }
  
  delay(3000).then(() => console.log('runs after 3 seconds'));

  //task 3
  function showCircle(cx, cy, radius) {
    return new Promise(resolve => {
      let div = document.createElement('div');
      div.style.width = 0;
      div.style.height = 0;
      div.style.left = `${cx}px`;
      div.style.top = `${cy}px`;
      div.className = 'circle';
      document.body.append(div);
  
      setTimeout(() => {
        div.style.width = `${radius * 2}px`;
        div.style.height = `${radius * 2}px`;
  
        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    });
  }
  
  // Example usage:
  showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });
  