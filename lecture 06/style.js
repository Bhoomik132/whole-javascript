const  p1Elem = document.querySelector('#p1')
const p2Elem  = document.querySelector('#p2')
const opElem =  document.querySelector('#operand')
const print = document.querySelector('#answer')
const elem = document.querySelector('#check')

elem.addEventListener(('click'),() => {
    const p1= parseInt(p1Elem.value);
    const p2= parseInt(p2Elem.value);
    const operand= opElem.value;
    // console.log(p1,p2,operand)
    let answer = 0;
    switch(operand){
        case '+':
            answer = p1+p2;
            break;

        case'-':
            answer= p1-p2;
            break;
        
        case '*':
            answer = p1*p2;
            break;

          case'/':
            answer = p1/p2;
            break;    
    }
    // console.log(p1,p2,operand)
    //  answer = eval(p1 + operand + p2)
    print.textContent = `Answer is ${answer}`
})