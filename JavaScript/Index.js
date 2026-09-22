
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
    }
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
// Array for full menu
let Webfullmenu = [
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Cheese Burger",
        prize: "250",
        discription: "It has a cooked beef patty inside a sliced bun. A slice of melted.",
        Id: "burger",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Spiced Burger",
        prize: "280",
        discription: "It has a cooked beef patty inside a sliced bun. A slice of melted.",
        Id: "burger",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Duble Anda Burger",
        prize: "300",
        discription: "It has a cooked beef patty inside a sliced bun. A slice of melted.",
        Id: "burger",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Zinger Burger",
        prize: "350",
        discription: "It has a cooked beef patty inside a sliced bun. A slice of melted.",
        Id: "burger",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Chicken Burger",
        prize: "310",
        discription: "It has a cooked beef patty inside a sliced bun. A slice of melted.",
        Id: "burger",
        topsell: true
    },
]
if(Webfullmenu.length > 0){
    Webfullmenu.forEach((menuitems)=>{
        createMenuCard(menuitems)
    })
}
function createMenuCard(menuitems) {
    let fullmenucardwarpper = document.querySelector(".deshies-main")
  // Outer card
  const card = document.createElement('div');
  card.classList.add('dishies-card');

  // Image wrapper
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('menu-deshies-images');

  const img = document.createElement('img');
  img.classList.add('menu-deshies-image');
  img.src = menuitems.img;
  img.alt = menuitems.alt || menuitems.name;
  img.setAttribute('srcset', '');

  imageWrapper.appendChild(img);

  // Content wrapper
  const content = document.createElement('div');
  content.classList.add('menu-dishies-card-contant');

  const title = document.createElement('h4');
  title.classList.add('menu-card-title');
  title.textContent = menuitems.name;

  const desc = document.createElement('p');
  desc.classList.add('menu-card-para');
  desc.textContent = menuitems.discription;

  const price = document.createElement('h5');
  price.classList.add('menu-card-prize');
  price.textContent = `Rs: ${menuitems.prize}`;

  // Button + SVG icon (SVG needs createElementNS, not createElement)
  let btnsvg
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" class="menu-card-CTA-icon" height="24px" viewBox="0 -960 960 960" width="24px" fill="221300"><path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>';
  const button = document.createElement('button');
  button.classList.add('menu-card-CTA');
  button.innerText = 'Add to Cart';
  button.insertAdjacentHTML('beforeend', svg);
  button.addEventListener('click',(e)=>{
      e.target.classList.remove('menu-card-CTA')
      btnsvg = e.target.children[0]
      button.innerText = 'Added to Cart';
    btnsvg.style.display = "none";
    e.target.classList.add('Added-fullmenu-btn')
})
  content.appendChild(title);
  content.appendChild(desc);
  content.appendChild(price);
  content.appendChild(button);

  card.appendChild(imageWrapper);
  card.appendChild(content);
  fullmenucardwarpper.append(card);
}