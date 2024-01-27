// const btnElem = document.querySelector('#btn')
// btnElem.addEventListener('click',()=>{
    // console.log("clicked")
// })
// console.log("Hello World")
// https://api.publicapis.org/categories

const xhr = document.querySelector('#xhr')
let xhrRequest = new XMLHttpRequest

xhrRequest.addEventListener('loadend',()=>{
    console.log("Ended with request")
})
xhrRequest.open('GET','https://api.publicapis.org/categories')
xhrRequest.send();
console.log("started with request!!!")