let Sidebarclose = document.querySelector(".sidebar-close")
let Navmenu = document.querySelector(".nav-menu")
let Sidebar = document.querySelector(".sidebar-container")
let blurlayer = document.querySelector(".blur-layer")
let Sidebarauto = ()=>{
    Sidebar.classList.toggle('sidebar-container-open')
    blurlayer.classList.toggle('blur-layer-open')
    document.body.classList.toggle('overflow-hidden')
}
Navmenu.addEventListener("click", Sidebarauto)
document.addEventListener("keydown", (event)=>{
    if(event.key === "Escape"){
        Sidebar.classList.remove('sidebar-container-open')
        blurlayer.classList.remove('blur-layer-open')
        document.body.classList.remove('overflow-hidden')
    }
})
Sidebar.addEventListener("click", Sidebarauto)
Sidebar.addEventListener("click", Sidebarauto)
