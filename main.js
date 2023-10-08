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