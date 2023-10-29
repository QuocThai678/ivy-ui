const header = document.querySelector("header")


// Scroll header
window.addEventListener("scroll", () => {
    const x = window.scrollY
    if (x > 0) {
        header.classList.add("sticky")
    }
    else {
        header.classList.remove("sticky")
    }
})

// Menu slidebar category
const itemsSliderbar = document.querySelectorAll(".category-left-item")

itemsSliderbar.forEach((menu, index) => {
    menu.addEventListener("click", () => {
        menu.classList.toggle("block")
    })
})
// Products

const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")

smallImg.forEach((imgItem, index) => {
    imgItem.addEventListener("click", () => {
        bigImg.src = imgItem.src
    })
    
})

// Mo rong thong tin san pham

const productDetailsBtn = document.querySelector('.product-content-right-bottom-top')
const productDetail = document.querySelector(".tabs-product-details")
const iconDetails = document.querySelectorAll(".product-content-right-bottom-top i")

productDetailsBtn.addEventListener("click", () => {
    productDetail.classList.toggle('active')

    Array.from(iconDetails).forEach(icon => {
        icon.classList.toggle('active')
    })
    
})