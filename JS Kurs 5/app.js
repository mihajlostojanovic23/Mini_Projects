window.addEventListener('DOMContentLoaded', animacija())

function animacija() {
    let text_element = document.querySelector('.section_1 h1')
let text = text_element.innerText
let copy = text
let text_array = text.split("")
let niz = []
text_element.innerText=''

for (let i=0 ; i< text_array.length; i++) {
   if(text_array[i]== " "){
    text_array[i] = '&nbsp'
   }
        text_element.innerHTML +=`<span>${text_array[i]}</span>`
      
}
let i =0;
let spans = document.querySelectorAll('span')
let interval = setInterval(()=> {
   
    spans[i].className='fadeMove'
    i++;

    if (i === spans.length) {
        clearInterval(interval)
        text_element.innerText=copy
       
    }
},200)
}



window.addEventListener('scroll', ()=> {
    let indicator = document.querySelector('.border-line');
    let winScroll = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    indicator.style.height='3px'
    indicator.style.width=scrolled+'%'

})


window.addEventListener('scroll', ()=> {
    let left_img = document.querySelector('.slideFromLeft')
    let right_img = document.querySelector('.slideFromRight')
    let container = document.querySelector('.images')

    if(container.getBoundingClientRect().top) {
      
        left_img.classList.add('animated')
       
        right_img.classList.add('animated')
    }
})




