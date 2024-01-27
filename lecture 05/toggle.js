const elem= document.querySelector('#btn')
elem.addEventListener('click',()=>{
    const bulb =document.querySelector('#myImage')
    if(btn.textContent==='on'){
        bulb.setAttribute('src','images/bulb_on.jpg')
        btn.textContent='off'
    }
    else{
        bulb.setAttribute('src','images/bulb_off.jpg')
        btn.textContent='on'
    }
})