const slider = document.querySelector("#slider")
const sliderMain = document.querySelector(".slider-main")
const sliderItems = document.querySelectorAll('.slider-item')
const nextBtn = document.querySelector(".slider-next")
const preBtn = document.querySelector(".slider-pre")
const dotsItem = document.querySelectorAll(".slider-dot-item")
const sliderItemsWidth = sliderItems[0].offsetWidth;
const slidesLength = sliderItems.length;
let positionX = 0;
let index = 0;

nextBtn.addEventListener("click", function () {
    handleChangeSlide(1)
})

Array.from(dotsItem).forEach(dot => dot.addEventListener("click", function (e) {
    Array.from(dotsItem).forEach(item => item.classList.remove('active'))
    e.target.classList.add('active')

    const slideIndex = parseInt(e.target.dataset.index)
    index = slideIndex;
    positionX = -1 * index * sliderItemsWidth
    sliderMain.style = `transform: translateX(${positionX}px)`
}))

preBtn.addEventListener("click", function () {
    handleChangeSlide(-1)
})


function handleChangeSlide(direction) {
    if (direction === 1) {
        if (index >= slidesLength - 1) {
            index = 0
            positionX = 0
        }
        else {
            positionX = positionX - sliderItemsWidth
            index++
        }
        sliderMain.style = `transform: translateX(${positionX}px)`
    }

    else if (direction === -1) {
        if (index <= 0) {
            index = slidesLength -1
            positionX = -1 * index * sliderItemsWidth
        }
        else {
            positionX = positionX + sliderItemsWidth
            index--
        }
        sliderMain.style = `transform: translateX(${positionX}px)`
    }
    Array.from(dotsItem).forEach(item => item.classList.remove('active'))
    dotsItem[index].classList.add("active");
}

setInterval(function() {
    nextBtn.click()
}, 5000)