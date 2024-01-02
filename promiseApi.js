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

  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  let user = urls.map(i=>fetch(i))
  console.log(user)
  Promise.all(user).then(res=>res.forEach(i=>{console.log(`${i.url}:${i.status}`)}))

  let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
console.log(requests)

Promise.all(requests)
  .then(responses => {
    // all responses are resolved successfully
    for(let response of responses) {
      console.log(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into an array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => console.log(user.name)))

  // Promise.all([
  //   fetch('/template.html'),
  //   fetch('/style.css'),
  //   fetch('/data.json')

  // ]).then(res=>console.log(res)); 

  Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 3000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 2000))
  ]).then(res=>console.log(res));