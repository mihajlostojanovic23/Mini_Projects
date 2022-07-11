let cene = 0
let total_price = document.querySelector('#total')
function add(element) {
    let input_value = element.previousElementSibling.value
    let mainElement = element.closest('.product ')
    let price = mainElement.querySelector('.price').innerText
    let naziv = mainElement.querySelector('.name').innerText
    console.log(input_value, price)
    let ispis = document.querySelector('.korpa_desc')
   
    if (parseInt(input_value)>0) {

        price = parseInt(price.substring(0,price.length-1))
        let total = price * input_value
        
        ispis.innerHTML += `<div class="cart_inner">
        <h2>${naziv} </h2>
        <p> ${input_value} x ${price} = <p class='total_sum'>${total} </p> </p>
        <button onclick='remove(this)' class='remove_item'> Ukloni </button> 
        </div>`
        cene += total
        console.log(cene)
        element.innerText='Dodato'
        element.setAttribute('disabled', 'true')
        total_price.innerText = cene + 'rsd'
    }
    else {
        alert('Unesi kolicinu')
    }
}


function remove(element) {
    let remove_cart = element.closest('.cart_inner')
    let namee = remove_cart.querySelector('h2').innerText
    let vegetables = document.querySelectorAll('.product')
    
    let price = parseInt(remove_cart.querySelector('.total_sum').innerText)
    remove_cart.remove()
    
    console.log(cene)
    cene = cene - price
    total_price.innerText = cene + 'rsd'

    vegetables.forEach(vege => {
        let name = vege.querySelector('.img .desc .name').innerText
        if(namee === name) {
            vege.querySelector('.add input').value = 0
            vege.querySelector('.add button').removeAttribute('disabled', 'disabled')
            vege.querySelector('.add button').innerText="Add"
            console.log(vege)
        }
    })

} 