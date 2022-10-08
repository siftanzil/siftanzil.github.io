
let addToCartButtons = document.getElementsByClassName('addBtn')
for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    // console.log(shopItem);
    let title = shopItem.getElementsByClassName('item-name')[0].innerText
    let price = shopItem.getElementsByClassName('item-price')[0].innerText
    // console.log(price);
    let imageSrc = shopItem.getElementsByClassName('item-image')[0].src
    // console.log(imageSrc);
    addItemToCart(title, price, imageSrc)
}


function addItemToCart(title, price, imageSrc) {
    let cart = document.querySelector('#cart')
    let cartRow = document.createElement('div')
    let cartRowContents = `
    <div class="container-flex row text-center align-middle m-auto" id='cart-item'>
        <img class="col-3 img-fluid" src="${imageSrc}">
        <h4 class="col-4  m-auto cart-item-name">${title}</h4>
        <h4 class="col-3  m-auto cart-item-price">${price}</h4>
        <button class="col-2 m-auto btn-danger">X</button>
    </div>`
    cartRow.innerHTML = cartRowContents
    // console.log(cartRow);
    cart.append(cartRow)
    // console.log(cart);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    // console.log(cartRow);
    cart.getElementsByClassName('clear-cart')[0].addEventListener('click', clearCart)
}

function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}