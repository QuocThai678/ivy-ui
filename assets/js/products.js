const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")



smallImg.forEach((imgItem) => {
    imgItem.onmousedown = (e) => {
        const mouseDown = e.clientX
        imgItem.onmouseup = (e) => {
            if (e.clientX === mouseDown) {
                bigImg.src = imgItem.src
            }
        }
    }
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

// Choose color product

const colorsMainProduct = document.querySelectorAll(".product-content-right-product-color-list li")

colorsMainProduct.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".product-content-right-product-color-list li.active").classList.remove("active")
        item.classList.add("active")
    })
})

const colorsProduct = document.querySelectorAll(".product-item__select-color i")

colorsProduct.forEach(item => {
    item.addEventListener("click", () => {
        colorsProduct.forEach(item => { item.classList.remove("active") })
        item.classList.add("active")
    })
})



// Choose size

const sizeItems = document.querySelectorAll(".product-content-right-product-size span")

sizeItems.forEach(item => {
    item.addEventListener("click", () => {
        sizeItems.forEach(item => { item.classList.remove("active") })
        item.classList.add("active")
    })
})

// Small-img slick slier

$(document).ready(function () {
    $(".product-content-left-small-img-list").slick({
        slidesToShow: 4,
        slideToScroll: 1,
        infinite: false,
        arrows: true,
        draggable: true,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-angle-up"></i></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-angle-down"></i></button>`
    });
});

// Zoom product

const zoomBox = document.querySelector(".product-content-left-zoom")
const mainProduct = document.querySelector(".product-content-left-big-img-item img")


mainProduct.addEventListener("mousemove", function (e) {
    zoomBox.classList.add("active")
    zoomBox.style.top = `${e.clientY}px`
    zoomBox.style.left = `${e.clientX}px`
    zoomBox.style.backgroundPosition =  `${e.offsetX / this.offsetWidth * 100}% ${e.offsetY / this.offsetHeight * 100}%`
    const urlMainProduct = bigImg.getAttribute('src')
    zoomBox.style.backgroundImage = `url(${urlMainProduct})`
})

mainProduct.addEventListener("mouseleave", () => {
    zoomBox.classList.remove("active")
})

// Viewed Products

$(document).ready(function () {
    $(".product-related-list").slick({
        slidesToShow: 5,
        slideToScroll: 1,
        infinite: false,
        arrows: true,
        draggable: false,
        cssEase: 'cubic-bezier(0.1, 0, 0.1, 1)',
        prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-arrow-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-arrow-right"></i></button>`
    });
});


