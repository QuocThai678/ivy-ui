// Choose color product

const colorsProduct = document.querySelectorAll(".product-item__select-color i")

colorsProduct.forEach(item => {
    item.addEventListener("click", () => {
        colorsProduct.forEach(item => { item.classList.remove("active") })
        item.classList.add("active")
    })
})


// Collection Tabs Product

const tabs = document.querySelectorAll(".collections-tab-item")
const tabsPane = document.querySelectorAll(".collection__tab-pane")
tabs.forEach((item, index) => {
    const pane = tabsPane[index]
    item.addEventListener("click", () => {
        if (index < 3) {
            document.querySelector(".collection.new .collections-tab-item.active").classList.remove("active")
            document.querySelector(".collection.new .collection__tab-pane.active").classList.remove("active")
        }
        else {
            document.querySelector(".collection.sale-up .collections-tab-item.active").classList.remove("active")
            document.querySelector(".collection.sale-up .collection__tab-pane.active").classList.remove("active")
        }
        item.classList.add("active")
        pane.classList.add("active")
        $(".collection__product-list").slick('setPosition');
    })
})

// // Collection slick slider

$(document).ready(function () {
    $(".collection__product-list").slick({
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

// Gallery slick slider

$(document).ready(function () {
    $(".gallery__list").slick({
        slidesToShow: 5,
        slideToScroll: 1,
        infinite: true,
        arrows: false,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: false,
        swipeToSlide: true,
    });
});