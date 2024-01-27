const generateButton = document.querySelector("#generate")
const ip= document.querySelector("#ip")
const answer = document.querySelector("#Answer")

generateButton.addEventListener('click',()=>{
    const range= ip.value
    let count =0;
    let currentNumber = 2;
    while(count<range){
        let flag = true ;
        for (let i=2; i<currentNumber;i++){
            if(currentNumber%i===0){
                flag= false;
            }
        }
        if(flag){
            answer.textContent += ` ${currentNumber}`
            count++;

        }
        currentNumber++;


    }
 
 
 
    
})


