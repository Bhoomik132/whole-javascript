const hit = document.querySelector('#hit')
hit.addEventListener('click',()=>{
    let xhr = new XMLHttpRequest()
    xhr.addEventListener('loadend',()=>{
        console.log(xhr.response)
        let xhr2 =new XMLHttpRequest();
        xhr2.addEventListner('loadend',()=>{
            console.log(xhr2.respone)
        })
        

    })
    xhr.open("GET","")
    xhr.send();
})
