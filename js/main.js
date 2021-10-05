const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");
const menuClick = document.getElementById("menuClick");
btnMenu.addEventListener("click", () =>{
    menu.classList.toggle("show")
})

menuClick.addEventListener("click", ()=>{
    menu.classList.toggle("menuOut")
    menu.classList.toggle("show")
} )