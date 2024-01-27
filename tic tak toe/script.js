// if true roh x varnaa 0
let turnX = true

let count = 0;
let gamecontainer = document.querySelectorAll('.boxtext');
gamecontainer.forEach(button => {
    button.addEventListener('click', () => {
        console.log("clicked");
        if(turnX){
            button.textContent='x'
            turnX=false
            button.disabled= true
        }
        else{
            button.textContent='o'
            turnX=true
            button.disabled= true
        }

    });
});

