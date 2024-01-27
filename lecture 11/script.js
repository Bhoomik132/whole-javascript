const hit= document.querySelector('#hit')
hit.addEventListener('click',()=>{
    hiturl()
    console.log("Hit Sent!!")
})


async function hiturl(){
    const response=await fetch(`https://api.publicapis.org/entries`)
    const value= await response.json()
    console.log(value)
    console.log("fetched")
}

//  var x = 5

//  console.log(x) 
// // numm ek special object hai
// let X ="Test";
// let str = X.toLowerCase()
// console.log(str)
// x();
// function foo(x){
//     x.flip();

// }
// const obj ={
    //  flip : ()=>console.log("fliped")
    // name :"test"
// }
// foo(obj);
// if flip would not exist, it would give error on runtime
// const user = {
//     name : "Daniel",
//     age : 26
// }
// // console.log(user.location)
// it would give you an error on runtime that you does not give on while not writing
function flipCoin(){
    // Meant to be Math.random()
     return Math.random ();
}
console.log(flipCoin())
// parenthesis error we don't give round ()
const value = Math.random() <0.5 ? "a" :"b";
if (value !==a ) {
    console.log ("a")
} else if( value ==-"b"){
// oops , unreachrable
}
