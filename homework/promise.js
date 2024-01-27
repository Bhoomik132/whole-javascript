const btn = document.querySelector('#btn')
btn.addEventListener('click',() =>{
    const promise= fetch('https://dog-api.kinduff.com/api/facts')
    
        


// load end kin jagah pe then use karsakte hai
promise.then(() =>{
console.log("Done!!")
})
console.log("Hello!!")
})
