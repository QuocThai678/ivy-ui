const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const tabLine = $('.tab-line')

tabLine.style.left = $('.tab-item.active').offsetLeft + 'px'
tabLine.style.width = $('.tab-item.active').offsetWidth + 'px'


tabs.forEach((tab, index) => {
    const pane = panes[index]
    tab.onclick = () => {
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        tab.classList.add('active')
        pane.classList.add('active')
        tabLine.style.left = tab.offsetLeft + 'px'
        tabLine.style.width = tab.offsetWidth + 'px'
    }
})