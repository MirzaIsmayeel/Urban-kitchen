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
// Arry for Top deshies cards
let dishiestop = [
    {
        img: "assets/Top-deshies/Gemini_Generated_Image_d2r092d2r092d2r0.webp",
        name: "Sindhi Biryani",
        prize: "200"
    },
    {
        img: "assets/Top-deshies/Gemini_Generated_Image_d2r092d2r092d2r0.webp",
        name: "Cheese Burger",
        prize: "280"
    },
    {
        img: "assets/Top-deshies/Gemini_Generated_Image_d2r092d2r092d2r0.webp",
        name: "Pepperoni Pizza",
        prize: "500"
    },
]
// make sure the dishiestop is is not empty
if (dishiestop.length >= 0) {
    dishiestop.forEach(dishes => {
        createDeshiCard(dishes)
    });
}
else {
    alert("Your Top Dishies is Empty.")
}
// A function that create a card layout buy those arry which i passed them
function createDeshiCard(dishes) {
    // Catching top dishies wapper
    let topdisheswapper = document.querySelector(".top-deshies-card-main")
    // Outer container
    const card = document.createElement('div');
    card.classList.add('deshies-cards');

    // Image wrapper
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('deshies-images');

    const img = document.createElement('img');
    img.classList.add('deshies-image');
    img.src = dishes.img;
    img.alt = "Top-dishes-images";

    imageWrapper.appendChild(img);

    // Content wrapper
    const content = document.createElement('div');
    content.classList.add('deshies-content');

    const title = document.createElement('h3');
    title.classList.add('top-deshies-title');
    title.textContent = dishes.name;

    const priceRow = document.createElement('div');
    priceRow.classList.add('deshies-price');

    const price = document.createElement('h4');
    price.classList.add('top-deshies-prie');
    price.textContent = `Rs: ${dishes.prize}`;

    const addBtn = document.createElement('button');
    addBtn.classList.add('deshies-CTA');
    addBtn.textContent = 'Add';
    addBtn.addEventListener("click", (e) => {
        addBtn.textContent = 'Added';
        e.target.classList.remove('deshies-CTA');
        e.target.classList.add('Added-topdishies-btn')
    })

    priceRow.appendChild(price);
    priceRow.appendChild(addBtn);

    content.appendChild(title);
    content.appendChild(priceRow);

    // Assemble
    card.appendChild(imageWrapper);
    card.appendChild(content);

    topdisheswapper.append(card);
}
