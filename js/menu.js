const menu = () => {

const dropdown = document.querySelector('.dropdown')
const dropdownContent = document.querySelector('.dropdown--content')

const openMenu = () => {

    dropdown.classList.toggle('dropdown--close')



    dropdownContent.classList.toggle('dropdown--content--opened')
    

}

dropdown.addEventListener('click',openMenu)


}

menu();