const hit = document.querySelector("#btn")
const select = document.querySelector('#select')

hit.addEventListener('click',()=>{
    // 1st version
    // const promise = fetch('https://api.publicapis.org/categories')

    // promise.then((response)=>{
    //     // returning you a promise
    //     const promise2= response.json()
    //     console.log(promise2)
        
    //the answer you are going to receive eventually is passed in "then" handler
    //     promise2.then((value)=>{
    //         console.log(value)
    //     }) 
    // })
    
    // 2nd version
    // fetch('https://api.publicapis.org/categories')
    //     .then((response)=>{
    //     response.json()
    //         .then((value)=>{
    //             console.log(value)
    //         })
    // })

    // promise chaining 1st version
    // fetch('https://api.publicapis.org/categories')
    //     .then((response)=>{
    //         return response.json()
    //     }).then((value)=>{
    //         console.log(value)
    //     })

    // promise chaining 2nd version that will be used from now
    fetch('https://api.publicapis.org/categories')
    .then((response)=>response.json())
    .then((value)=>console.log(value))

    fetch('https://api.publicapis.org/categories')
    .then((response)=>response.json())
    .then((value)=>{
        console.log(value)
        value.categories.forEach((val) => {
           select.innerHTML += `<option value = "${val}">${val}</option>`
        })
    })

    fetch('https://dog-api.kinduff.com/api/facts')
    .then((response)=>response.json())
    .then((value)=>{
        console.log(value)
        return fetch('https://cat-fact.herokuapp.com/facts')
    })
    .then((response)=>response.json())
    .then((value)=>console.log(value))
})

select.addEventListener('change',()=>{

console.log(select.value)
fetch(`https://api.publicapis.org/entries?category=${select.value}`)
.then((response)=>response.json())
.then((value)=>console.log(value))
})
// const ip = document.querySelector('#ip')
// ip.addEventListener('input',()=>{
// console.log(ip.value)
// })
const btn = document.querySelector('#btn-2')
 btn.addEventListener('input',()=>{
    console.log(btn.value)
})


btn.addEventListener('click',()=>{
    fetch(`https://api.publicapis.org/entries?title=${btn.value}&category=${select.value}`)
    .then((response)=>response.json())
    .then((value)=>console.log(value))
   
})
