let Sidebarclose = document.querySelector(".sidebar-close")
let Navmenu = document.querySelector(".nav-menu")
let Sidebar = document.querySelector(".sidebar-container")
let blurlayer = document.querySelector(".blur-layer")
let TopDeshiesopen = document.querySelector(".top-deshies-menu")
let FullMenuopen = document.querySelector(".Menu-deshies-menu")
let HeroCTA = document.querySelector(".hero-CTA")
let Sidebarauto = () => {
    Sidebar.classList.toggle('sidebar-container-open')
    blurlayer.classList.toggle('blur-layer-open')
    document.body.classList.toggle('overflow-hidden')
}
Navmenu.addEventListener("click", Sidebarauto)
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        Sidebar.classList.remove('sidebar-container-open')
        blurlayer.classList.remove('blur-layer-open')
        document.body.classList.remove('overflow-hidden')
    }
})
Sidebar.addEventListener("click", Sidebarauto)
Sidebar.addEventListener("click", Sidebarauto)
// Catch element by its classes '.Top-deshies' and '.Full-Menu'
let topdeshies = document.querySelector(".Top-deshies")
let fullmenu = document.querySelector(".Full-Menu")
// Catch elements my nav links
let NavMenuBtn = document.querySelectorAll(".navbar-links li a")
// togllefullmenu is a function that check if our full menu contains class invisible so {toggle invisible to our menu or topdeshies}
// else remove invisible in topdeshies or add invisible to full menu
function togllefullmenu() {
    if (fullmenu.classList.contains("invisible")) {
        topdeshies.classList.toggle("invisible")
        fullmenu.classList.toggle("invisible")
    }
    else {
        topdeshies.classList.remove("invisible")
        fullmenu.classList.add("invisible")
    }
}
TopDeshiesopen.addEventListener("click", togllefullmenu)
// Create arrow function for hero-CTA to add invisible to topdeshies and remove insivible to full menu
HeroCTA.addEventListener("click", () => {
    if (fullmenu.classList.contains("invisible")) {
        topdeshies.classList.add("invisible")
        fullmenu.classList.remove("invisible")
    }
})
FullMenuopen.addEventListener("click", togllefullmenu)
// Create arrow function for hero-CTA to add invisible to topdeshies and remove insivible to full menu
NavMenuBtn[1].addEventListener("click", () => {
    if (fullmenu.classList.contains("invisible")) {
        topdeshies.classList.add("invisible")
        fullmenu.classList.remove("invisible")
    }
})