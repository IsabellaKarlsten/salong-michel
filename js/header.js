const headerScroll = () => {

const header = document.querySelector('.header')

const addClassToHeader = () => {

    if (window.scrollY > 200) {
        header.classList.add('header--scrolled')
    } else{
        header.classList.remove('header--scrolled')
    }
}


    window.addEventListener('scroll', addClassToHeader)

}


headerScroll()