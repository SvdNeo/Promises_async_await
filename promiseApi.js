const p1 = new Promise((resolve)=>setTimeout(() => {
    resolve(1)
  }, 3000))
  const p2 = new Promise((resolve)=>setTimeout(() => {
    resolve(2)
  }, 2000))
  const p3 = new Promise((resolve)=>setTimeout(() => {
    resolve(3)
  }, 1000))
  Promise.all([p1,p2,p3]).then(res=>console.log(res)).catch(err=>console.log(err)).finally(i=>console.log("All promises executed"))