
// Open/ Close cart

const cartIcon = document.querySelector('.header__cart')
const cart = document.querySelector('.header__cart-action')
const closeCart = document.querySelector('.header__cart-heading i')

cartIcon.addEventListener("click", () => {
    cart.classList.add('open')
})

cart.addEventListener("click", (e) => {
    e.stopPropagation()
})

closeCart.addEventListener("click", () => {
    cart.classList.remove('open')
})


// Open product size list

const productSize = document.querySelectorAll('.product-item-cart')
const productSizeList = document.querySelectorAll('.product-size-list')
productSize.forEach(item => {
    item.addEventListener("click", (e) => {
        item.classList.toggle("active")
    })
})

productSizeList.forEach(item => {
    item.addEventListener("click", (e) => {
        e.stopPropagation()
    })
}) 