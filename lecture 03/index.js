//  const square =(x)=> x*x
//  const divide =(x)=>x/2
// const cube = function(x,callback){ x * callback(x)}
// console.log(ans)
// let ans2=cube(5, square)
// console.log(ans2)
// setTimeout(()=>{le
//     console.log("After 3 seconds -Hii")
// },3000)
// setInterval(()=>{
//     console.log("HeeeLooo")
// },2000)
let arr=[1,2,3,4,5]
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// for (let ind in arr ){
//     console.log(arr[ind])
// }
// arr.forEach((value)=>console.log(value))
let squares =[]
arr.forEach((value)=>{
    squares.push(value*value)
})
console.log(squares)
let newArr=arr.map((value ,index,arr)=>{
    return value*value
})
console.log(newArr)
let even =[]
squares.forEach((value)=>{
    if(value%2 ==0){
        even.push(value)
    }
})
console.log(even)
let filtered = squares.filter((value)=>value%2 ==0)
console.log(filtered)
let prod =[]
let product =1
arr.forEach((value)=>{
    product*=value
})
console.log(product)
let ans=arr.reduce((acc,curr)=>{
    return acc*curr
})
console.log(ans)