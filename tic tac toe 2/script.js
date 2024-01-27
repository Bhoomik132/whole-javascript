// if true toh x varnaa o
let turnX = true

// maintaining number of turns to determine if draw
let count = 0

let display = document.querySelector("#result")

// The querySelectorAll returns the array.
let boxes = document.querySelectorAll(".box")

boxes.forEach(button => {
    button.addEventListener('click', () => {
        if(turnX) {
            button.textContent = 'X'
            turnX = false
            
        }
        else {
            button.textContent = 'O'
            turnX = true
        }
        button.disabled = true
        count++
        checkDraw()
        checkWinner()
    })
})

let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
]

function checkWinner() {
    winningPattern.forEach((pattern)=>{ 
        let fvalue = boxes[pattern[0]].textContent
        let svalue = boxes[pattern[1]].textContent
        let tvalue = boxes[pattern[2]].textContent

        if(fvalue!=='' && fvalue==svalue && svalue==tvalue){
            displayWinner(fvalue)
            console.log("jjj")
        }
       
    })
}
function displayWinner(fvalue) {
    display.textContent = "winner is "+fvalue
}
function checkDraw(){
    if (count===9){
        display.textContent='Draw!!'

    }
}
let resetGame= document.querySelector("#restartButton")
resetGame.addEventListener('click',()=>{
    boxes.forEach(button=>{
        button.textContent=""
        button.disabled= false
        turnX= true
        display.textContent = ""
    })
})