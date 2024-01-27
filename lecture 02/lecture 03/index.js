// let arr =[1,2,3,4,5]
// traditional for loop 
// for(let i=0;i<arr.length;i++)
// {
    // console.log(arr[i])
// }
// for-of loop 
// for(let elem of arr){
    //    console.log(elem)
// }
// let obj={
    // name:"foo",
    // Email:"Bhoomik ",
    // number:"12345",
    
// }
// for ( let key in obj){
    // console.log(key,"_" ,obj[key])
// }
// let i=0
// while (i<arr.length) {
    // console.log(arr[i])
    // i++
// }
// alert ("Hello world")
let value =prompt("Enter value" )
console.log(value) 
//  }  
let count = 0
for(let num=2;count<value;num++)  
{
   let flag = true;
  for(let i=2;i<num/2;i++){
       if(num%i==0){
          flag=false;
       }
}
   if(flag){
       console.log(num);
       count++
   }
}
//  Declaration function 
function addTwoNumbers(x,y){
  console.log(x,y)
  return x+y;
}

console.log(addTwoNumbers(5,6))

