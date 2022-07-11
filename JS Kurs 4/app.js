let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.menu')
let hamb_menu = false;
let menu_resp = document.querySelector('.menu_hamburger')
window.addEventListener('resize', () => {
    if(window.screen.width < 992) {
        hamburger.style.display="block"
        menu.style.display="none"
    }
    else {
        hamburger.style.display='none'
        menu.style.display="block"
        menu_resp.style.display="none"
        hamb_menu=false
    }
})


hamburger.addEventListener('click', () => {
hamb_menu = !hamb_menu;
console.log(hamb_menu)
if (hamb_menu == true) {
    menu_resp.style.display="block"
}
else {
    menu_resp.style.display="none"
}
})


let images = document.querySelectorAll('.img')
let next = document.querySelector('.next')
let previous = document.querySelector('.previous')

let current = 0;

window.addEventListener('load', ()=>{
    images.forEach((img) => {
        img.style.display='none'})
        images[0].style.display='block'
})

next.addEventListener('click', () => {
   
    images.forEach((img) => {
        img.style.display='none'})


    if(current < images.length-1) {
        images[current+ 1].style.display='block' 
        current++
        console.log(current)
    }
    
    else {
       current=0
        images.forEach((img) => {
            img.style.display='none'
            
        })
        images[current].style.display='block'
        console.log(current)
        
    }
})



previous.addEventListener('click', () => {
    

    if (current <= 0 ) {
        current = images.length-1
        images.forEach((img) => {
            img.style.display='none'})

        images[current].style.display='block'

    }

    else {
        console.log(current)
        current--
        images.forEach((img) => {
            img.style.display='none'})

        images[current].style.display='block'
        
    }
})


/* MODAL
*/
let modal_open = document.querySelector('.modal_open')
let modal_close = document.querySelector('.text button')
let modal_content = document.querySelector('.modal_container')
modal_open.addEventListener('click', () => {

modal_content.style.display='flex'
})


modal_close.addEventListener('click', () => {
    modal_content.style.display='none'
})


let buttons = document.querySelectorAll('.buttons button')

buttons.forEach( (button) => {
button.addEventListener('click', () => {
    let btn_atr = button.getAttribute('data-category')

let divs = document.querySelectorAll('.portfolio_divs div')
let container = document.querySelector('.portfolio_divs')

if(btn_atr == "sve") {
    divs.forEach((div) => {
        div.style.display='grid'})
}
else {
    divs.forEach((div) => {
        div.style.display='none'
      let div_atr = div.getAttribute('data-category')
      if(btn_atr == div_atr) {
       div.style.display='grid'
       container.style.justifyContent='center'
      }
    
    })
    
}

})
})


