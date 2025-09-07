const botaoMenu = document.querySelector("button")
const barraMenu = document.querySelectorAll("span")
const listaMenu = document.querySelector('ul[class=menu-lista]')
const listaItem = document.querySelectorAll('.menu-lista li')

function toggleMenu(){
    barraMenu[0].classList.toggle("barra-1")
    barraMenu[1].classList.toggle("barra-2")
    barraMenu[2].classList.toggle("barra-3")
    listaMenu.classList.toggle("menu-show")
    botaoMenu.classList.toggle("sombra") 
}
botaoMenu.addEventListener("click", toggleMenu)

listaItem.forEach(item => {
    item.addEventListener("click", () => {
        if(listaMenu.classList.contains("menu-show"))
            toggleMenu()
    })
})



