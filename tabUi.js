const _$ = document.querySelector.bind(document)
const _$$ = document.querySelectorAll.bind(document)

const tabs = _$$('.tab-item')
const panes = _$$('.tab-pane')

const tabLine = _$('.tab-line')


tabLine.style.left = _$('.tab-item.active').offsetLeft + 'px'
tabLine.style.width = _$('.tab-item.active').offsetWidth + 'px'


tabs.forEach((tab, index) => {
    const pane = panes[index]
    tab.onclick = () => {
        _$('.tab-item.active').classList.remove('active')
        _$('.tab-pane.active').classList.remove('active')
        tab.classList.add('active')
        pane.classList.add('active')
        tabLine.style.left = tab.offsetLeft + 'px'
        tabLine.style.width = tab.offsetWidth + 'px'
    }
})