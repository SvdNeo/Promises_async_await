function loadScript(src,cb){
    let script = document.createElement("script");
    script.src = src;
    script.onload = ()=>{cb(null,script)}
    script.onerror = ()=>{new Error(`New error generated from ${src}`)}
    document.head.appendChild(script)
}
// loadScript("/promise.js",(err,script)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("page loaded")
//     }
// })

let loadScriptPromise = function load(src){
    return new Promise((res,reject)=>{
        loadScript(src,(err,script)=>{
            if(err){
                console.log(err)
            }else{
                console.log("page loaded")
            }
        })
    })
}
loadScriptPromise("/promise.js").then(res=>console.log(res))

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const data = {message:"Hi its sanjay"}
            resolve(data)
        }, 3000);
    })
}

const updateMessage=()=>{
document.getElementById("container").innerHTML = data.message
}
fetchData().then(i=>{updateMessage(data)}
    ).catch(err=>console.log(err))