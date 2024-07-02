// Functions

function stopPro (element) {
    element.addEventListener("click", (e) => {
        e.stopPropagation()
    })
}

function toggleActive (ele) {
    if (NodeList.prototype.isPrototypeOf(ele)) {
        Array.from(ele)
    }
    ele.forEach(item => {
        item.addEventListener("click", (e) => {
            item.classList.toggle('active')
            e.stopPropagation()
        })
    })
}

// Menu slidebar category
const itemsSliderbar = document.querySelectorAll(".category-left-item")

toggleActive(itemsSliderbar)

// Choose Size

const sizeItems = document.querySelectorAll(".category-left-item-size li")

toggleActive(sizeItems)

stopPro(document.querySelector(".category-left-item-size"))



// Choose Color

const colorList = document.querySelector(".category-left-item-color")
const colorItems = document.querySelectorAll(".category-left-item-color-select")

stopPro(colorList)

toggleActive(colorItems)


// Input Price

const inputPrice = document.getElementById('price')
const valuePrice = document.querySelector('.price-value-product')
const showCurrentPrice = document.querySelector('.show__price-current')

const getPriceSeeking = (price) => {
    const millions = Math.floor(price / 1000000)
    const hundreds = Math.floor((price - millions * 1000000) / 1000)
    const thousands = Math.floor((price - millions * 1000000 - hundreds * 1000))

    if (millions === 0 && hundreds === 0 && thousands === 0) {
        return `${thousands} đ`
    }
    
    else if (millions === 0) {
        return `${hundreds}.${thousands} đ`
    }
    

    else if (hundreds === 0 && thousands === 0) {
        return `${millions}.000.000 đ`
    }

    return `${millions}.${hundreds}.${thousands} đ`
}

inputPrice.oninput = (e) => {
    valuePrice.style.width = e.target.value + '%'
    showCurrentPrice.textContent = getPriceSeeking(e.target.value * 10000000 / 100)
}


stopPro(document.querySelector('.price-wrap'))


// Choose discount

const discountItems = document.querySelectorAll(".category-left-discount-item")

var preIndex
Array.from(discountItems).forEach((item, index) => {
    item.addEventListener("click", () => {
        if (preIndex != index) {
            Array.from(discountItems).forEach(item => {
                item.classList.remove("active")
            })
        }
        item.classList.toggle("active")
        preIndex = index
    })
})

stopPro(document.querySelector(".category-left-discount"))


// Choose Advanced

const optionsAdvanced = document.querySelectorAll('.category-left-advanced-item')

stopPro(document.querySelector('.category-left-advanced'))

toggleActive (optionsAdvanced)

// Choose subadvanced

const optionsSubAdvanced = document.querySelectorAll(".category-left-subadvanced-item")
stopPro(document.querySelector(".category-left-subadvanced"))
toggleActive(optionsSubAdvanced)

// Arrange

const arrangeList = document.querySelector(".category-right-top-item")


arrangeList.addEventListener("click", () => {
    arrangeList.classList.toggle("active")
})

stopPro(document.querySelector(".category-right-top-item-list"))

// Choose color product

const colorsProduct = document.querySelectorAll(".product-item__select-color i")

colorsProduct.forEach(item => {
    item.addEventListener("click", () => {
        colorsProduct.forEach(item => { item.classList.remove("active") })
        item.classList.add("active")
    })
})

