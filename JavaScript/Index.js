
let Sidebarclose = document.querySelector(".sidebar-close")
let Navmenu = document.querySelector(".nav-menu")
let Sidebar = document.querySelector(".sidebar-container")
let blurlayer = document.querySelector(".blur-layer")
let TopDeshiesopen = document.querySelector(".top-deshies-menu")
let FullMenuopen = document.querySelector(".Menu-deshies-menu")
let HeroCTA = document.querySelector(".hero-CTA")
let reservationpopop = document.querySelector(".reservation-layer")
let reservation = document.querySelector(".photo-CTA")
let reservationcard = document.querySelector(".reservation-card")
let reservationcta = document.querySelector(".reservation-btn")
let ordercart = document.querySelector(".cart")
let layer = document.querySelector("#layer")

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
        tabbtns[0].click()
    }
    else {
        topdeshies.classList.remove("invisible")
        fullmenu.classList.add("invisible")
    }
}
// Poppop for reservation form
function openreservationmodal() {
    reservationpopop.style.display = "flex"
    reservationcard.style.display = 'unset'
    document.documentElement.classList.add('no-scroll');

}
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        reservationpopop.style.display = "none"
        reservationcard.style.display = 'none'
        document.documentElement.classList.remove('no-scroll');
    }
})
reservationpopop.addEventListener('click', () => {
    reservationpopop.style.display = "none"
    document.documentElement.classList.remove('no-scroll');
    reservationcard.style.display = 'none'
})
// Reservation to whatsapp
const today = new Date();

// Format as YYYY-MM-DD
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');

const minDate = `${yyyy}-${mm}-${dd}`;

// Apply min attribute to the input
let reservationform = document.querySelector(".reservation-form")
let reservationname = document.querySelector("#res-name")
let reservationphonenumber = document.querySelector("#res-phone")
let reservationguest = document.querySelector("#res-guests")
let reservationdate = document.querySelector("#res-date")
reservationdate.setAttribute('min', minDate);
let reservationorders = JSON.parse(localStorage.getItem("reservations")) || []
let reservaiontost = document.querySelector(".toast")
let reservaionerror = document.querySelectorAll(".error")
reservationform.addEventListener('submit', (e) => {
    e.preventDefault()
    const alreadyreseve = reservationorders.some(item => item.Name == reservationname.value || item.PhoneNumber == reservationphonenumber.value)
    // if(reservationname.text.includes('ismayeel')){
    const reservationformvalidation = ["-", "-", "]", "+", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const reservationformvalidationnumbers = [
        // small letters
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',

        // capital letters
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',

        // symbols
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
        '[', ']', '{', '}', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?', '\\', '|', '`', '~'
    ];
    console.log(reservationformvalidation.some(chr => reservationname.value.includes(chr)), reservationname.value.length <= 3)
    if (reservationformvalidation.some(chr => reservationname.value.includes(chr)) || reservationname.value.length <= 3) {
        reservaionerror[0].style.display = "unset"
    }
    else if (reservationphonenumber.value.includes(reservationformvalidationnumbers) || reservationphonenumber.value.length < 10) {
        reservaionerror[1].style.display = "unset"
    }
    else if (reservationguest.value > 20 || reservationguest.value == '' || reservationguest.value <= 0) {
        reservaionerror[2].style.display = "unset"
    }
    else if (reservationdate.value == '') {
        reservaionerror[3].style.display = "unset"
    }
    else {
        if (alreadyreseve) {
            toast.classList.add('show')
            setTimeout(() => {
                toast.classList.remove('show')
            }, 3000);
        }
        else {
            reservationorders.push({
                Name: reservationname.value,
                PhoneNumber: reservationphonenumber.value,
                Guests: reservationguest.value,
                Date: reservationdate.value
            })
            const RESTAURANT_WHATSAPP_NUMBER = '923480412436'
            const message =
                '--------------------*New Table Reservation*--------------------\n' +

                'Name: ' + reservationname.value + '\n' +
                'Phone: ' + reservationphonenumber.value + '\n' +
                'Date: ' + reservationdate.value + '\n' +
                'Guests: ' + reservationguest.value + '\n\n' +


                '*NOTE: If no table is free, reply quickly with another time or date. Do not leave the customer waiting.*';

            const url = 'https://wa.me/' + RESTAURANT_WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
            window.open(url, '_blank');
            localStorage.setItem("reservations", JSON.stringify(reservationorders))
            console.log("reservation working", reservationorders)
            reservationpopop.style.display = "none"
            reservationcard.style.display = 'none'
            document.documentElement.classList.remove('no-scroll');
        }
    }
    // }
})
// reservation tost

// 
TopDeshiesopen.addEventListener("click", togllefullmenu)
// Create arrow function for hero-CTA to add invisible to topdeshies and remove insivible to full menu
HeroCTA.addEventListener("click", () => {
    if (fullmenu.classList.contains("invisible")) {
        topdeshies.classList.add("invisible")
        fullmenu.classList.remove("invisible")
        tabbtns[0].click()
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
// Order
let order = JSON.parse(localStorage.getItem('order')) || []
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
    {
        img: "assets/Top-deshies/Gemini_Generated_Image_d2r092d2r092d2r0.webp",
        name: "Zinger Shawarma",
        prize: "200"
    },
    {
        img: "assets/Top-deshies/Gemini_Generated_Image_d2r092d2r092d2r0.webp",
        name: "Anda Burger",
        prize: "180"
    },
    {
        img: "assets/Top-deshies/Gemini_Generated_Image_d2r092d2r092d2r0.webp",
        name: "Chicken burger",
        prize: "220"
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
    const topalreadyorder = order.some(item => item.name == dishes.name)
    if (topalreadyorder) {
        addBtn.textContent = 'Added';
        addBtn.classList.remove('deshies-CTA');
        addBtn.classList.add('Added-topdishies-btn')
        addBtn.disabled = 'true'
    }
    else {
        addBtn.textContent = 'Add';
        addBtn.classList.add('deshies-CTA');
        addBtn.addEventListener("click", (e) => {
            Id = 'topdishies'
            Order(e.currentTarget, Id)
            addBtn.textContent = 'Added';
            addBtn.classList.remove('deshies-CTA');
            addBtn.classList.add('Added-topdishies-btn')
            addBtn.disabled = 'true'
        })
    }

    priceRow.appendChild(price);
    priceRow.appendChild(addBtn);

    content.appendChild(title);
    content.appendChild(priceRow);

    // Assemble
    card.appendChild(imageWrapper);
    card.appendChild(content);

    topdisheswapper.append(card);
}
// slideer for top dishies
let forwordarrow = document.querySelector(".forword-arrow")
let reversearrow = document.querySelector(".reverce-arrow")
let topdesieswappe = document.querySelector('.top-deshies-card-main')
let topdesieswapper = document.querySelector('.top-deshies-card-wapper')
forwordarrow.addEventListener('click', (e) => {
    slideforwordtopdishies()
})
reversearrow.addEventListener('click', (e) => {
    slidereversetopdishies()
})

let val = 0
const maxscrollablewith = topdesieswappe.scrollWidth - topdesieswappe.clientWidth
function slideforwordtopdishies() {
    val += 300
    reversearrow.style.display = "flex"
    topdesieswappe.scrollLeft = val
    if (maxscrollablewith === topdesieswappe.scrollLeft) {
        forwordarrow.style.display = "none"
    }
}
function slidereversetopdishies() {
    val -= 300
    forwordarrow.style.display = "flex"
    topdesieswappe.scrollLeft = val
    if (val === 0) {
        reversearrow.style.display = 'none'
    }
}
// Array for full menu
let Webfullmenu = [
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Cheese Burger",
        prize: "250",
        discription: "It has a cooked beef patty inside a sliced bun. A slice of melted.",
        Id: "Burgers",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Spiced Burger",
        prize: "280",
        discription: "It has a cooked beef patty inside a sliced bun. A slice of melted.",
        Id: "Burgers",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Duble Anda Burger",
        prize: "300",
        discription: "It has a cooked beef patty inside a sliced bun. A slice of melted.",
        Id: "Burgers",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Zinger Burger",
        prize: "350",
        discription: "It has a cooked beef patty inside a sliced bun. A slice of melted.",
        Id: "Burgers",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Chicken burger",
        prize: "310",
        discription: "It has a cooked beef patty inside a sliced bun. A slice of melted.",
        Id: "Burgers",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Tikka pizza",
        prize: "1000",
        discription: "It has a cooked beef patty inside a sliced bun. A slice of melted.",
        Id: "Pizza",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "malai boti pizza",
        prize: "980",
        discription: "It has a cooked beef patty inside a sliced bun. A slice of melted.",
        Id: "Pizza",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "kababish pizza",
        prize: "950",
        discription: "It has a cooked beef patty inside a sliced bun. A slice of melted.",
        Id: "Pizza",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Spiced pizza",
        prize: "1100",
        discription: "It has a cooked beef patty inside a sliced bun. A slice of melted.",
        Id: "Pizza",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Beef pizza",
        prize: "1000",
        discription: "It has a cooked beef patty inside a sliced bun. A slice of melted.",
        Id: "Pizza",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Chicken Biryani",
        prize: "350",
        discription: "Fragrant basmati rice layered with tender spiced chicken, saffron, and slow-cooked traditional aromatics.",
        Id: "Rice & Mains",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Beef Karahi",
        prize: "450",
        discription: "Tender beef chunks simmered in a rich tomato-based curry with ginger and chili.",
        Id: "Rice & Mains",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Vegetable Pulao",
        prize: "220",
        discription: "Fluffy basmati rice cooked with seasonal vegetables, whole spices, and fragrant ghee aroma.",
        Id: "Rice & Mains",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Chicken Karahi",
        prize: "400",
        discription: "Juicy chicken cooked in a spiced tomato gravy with garlic, ginger, and coriander.",
        Id: "Rice & Mains",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Mutton Pulao",
        prize: "480",
        discription: "Slow-cooked mutton and rice infused with whole spices, caramelized onions, and warm cardamom.",
        Id: "Rice & Mains",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Chicken Ramen",
        prize: "380",
        discription: "Rich miso broth with tender chicken, soft noodles, a soft-boiled egg, and scallions.",
        Id: "Noodles & Ramen",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Beef Noodles",
        prize: "400",
        discription: "Stir-fried noodles tossed with tender beef strips, crisp vegetables, and a soy glaze.",
        Id: "Noodles & Ramen",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Vegetable Ramen",
        prize: "320",
        discription: "A light vegetable broth with soft noodles, tofu, mushrooms, and crisp seasonal greens.",
        Id: "Noodles & Ramen",
        topsell: true
    },
    {
        img: "assets/Menu-Items/Gemini_Generated_Image_62pd0062pd0062pd.webp",
        name: "Spicy Seafood Noodles",
        prize: "450",
        discription: "Spicy broth loaded with shrimp, squid, noodles, and a kick of chili oil.",
        Id: "Noodles & Ramen",
        topsell: true
    },
]
let tabbtns = document.querySelectorAll(".tab")
let btnfilter

let fullmenucardwarppertital = document.querySelector(".menu-deshies-heading")
let fullmenucardwarpper = document.querySelector(".deshies-main")
let checkoutpage = document.querySelector(".Checkout")

function menubtnfilter(btnfilter) {
    tabbtns.forEach(btn => {
        btn.addEventListener('click', (btn) => {
            btnfilter = btn.target.textContent
            tabbtns.forEach((tab) => {
                tab.classList.remove('tab-active')
                btn.target.classList.add('tab-active')
            })
            fullmenucardwarpper.innerHTML = ''
            Webfullmenu.forEach((menuitems) => {
                if (menuitems.Id == `${btnfilter}`) {
                    createMenuCard(menuitems, btnfilter)
                }
            })
        })
    });
}
menubtnfilter(btnfilter)

let checkoutmain = document.querySelector(".checkout-main")
order.forEach((order) => {
    createCheckoutCard(order)
})
function addtocheckout() {
    checkoutmain.innerHTML = ''
    order.forEach((order) => {
        createCheckoutCard(order)
    })
}
function createIcon(className, pathData) {
    const SVG_NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('class', className);
    svg.setAttribute('viewBox', '0 -960 960 960');

    const path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d', pathData);

    svg.appendChild(path);
    return svg;
}
let orderqty = 1
function createCheckoutCard(orders) {
    const card = document.createElement('div');
    card.className = 'checkout-cards';
    card.dataset.id = orders.id;
    console.log(orders)
    // Image
    const imageWrap = document.createElement('div');
    imageWrap.className = 'checkout-images';

    const img = document.createElement('img');
    img.className = 'checkout-card-image';
    img.src = orders.Image;
    img.alt = orders.name;
    imageWrap.appendChild(img);

    // Content
    const content = document.createElement('div');
    content.className = 'checkout-card-content';

    const title = document.createElement('h4');
    title.textContent = orders.name;

    const price = document.createElement('h5');
    price.textContent = 'Rs: ' + orders.prize;

    // Button: + quantity -
    const button = document.createElement('button');
    button.className = 'checkout-cards-CTA';
    const addIcon = createIcon(
        'checkout-cards-add',
        'M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z'
    )
    // const addIcon = `<svg class="checkout-cards-add" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"> <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /> </svg>`
    // const removeIcon = `<svg class="checkout-cards-remove" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"> <path d="M200-440v-80h560v80H200Z" /> </svg>`
    const qty = document.createElement('span');
    qty.textContent = orders.orderquantity;
    addIcon.addEventListener('click', () => {
        orders.orderquantity++
        localStorage.setItem('order', JSON.stringify(order));
        qty.textContent = orders.orderquantity;
    })
    qty.className = 'checkout-cards-qty';
    const removeIcon = createIcon(
        'checkout-cards-remove',
        'M200-440v-80h560v80H200Z'
    );
    removeIcon.addEventListener('click', () => {
        orders.orderquantity--
        localStorage.setItem('order', JSON.stringify(order));
        if (orders.orderquantity > 0) {
            qty.textContent = orders.orderquantity;
        }
        else {
            console.log(orders.orderquantity)
            alert("item remove")
        }
    })

    button.append(addIcon, qty, removeIcon);
    content.append(title, price, button);
    card.append(imageWrap, content);
    checkoutmain.append(card);
}
let ordercartclose = document.querySelector(".checkout-close")
if (order.length > 0) {
    ordercart.style.display = 'flex'
}
ordercart.addEventListener('click', () => {
    checkoutpage.style.display = 'flex'
    document.body.scroll = false
    layer.classList.add('layer')
    document.documentElement.classList.add('no-scroll');
})
ordercartclose.addEventListener('click', () => {
    checkoutpage.style.display = 'none'
    layer.classList.remove('layer')
    document.documentElement.classList.remove('no-scroll');
})
function createMenuCard(menuitems, tital) {
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
    const alreadyorder = order.some(item => item.name == menuitems.name)
    console.log(order)
    if (alreadyorder) {
        button.classList.add('Added-fullmenu-btn')
        button.style.backgroundColor = "#221300"
        button.innerText = 'Added to Cart';
        button.disabled = true;
    }
    else {
        button.classList.add('menu-card-CTA');
        button.innerText = 'Add to Cart';
        button.insertAdjacentHTML('beforeend', svg);
        button.addEventListener('click', (clickbtn) => {
            Id = "FullMenu"
            Order(clickbtn, Id)
        })
    }
    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(price);
    content.appendChild(button);

    card.appendChild(imageWrapper);
    card.appendChild(content);
    fullmenucardwarpper.append(card);
    fullmenucardwarppertital.innerHTML = `${tital}`;
}
let clickedbtn
console.log(order)
function Order(clickbtn) {
    if (Id == "topdishies") {
        console.log(Id)
        const topdishiestital = clickbtn.parentElement.parentElement.children[0].innerText
        const topdishiesprize = clickbtn.parentElement.children[0].innerText.split("Rs:")[1]
        const topdishiesimg = clickbtn.parentElement.parentElement.parentElement.children[0].children[0].getAttribute('src')
        // const topalreadyorder = order.some(item =>item.name === topdishiestital)
        // console.log(topalreadyorder)
        // if(topalreadyorder){
        //     console.log("ok")
        //     clickbtn.textContent = 'Added';
        //     clickbtn.classList.remove('deshies-CTA');
        //     clickbtn.classList.add('Added-topdishies-btn')
        //     return
        // }
        // else{
        order.push({
            Image: topdishiesimg,
            name: topdishiestital,
            prize: topdishiesprize,
            orderquantity: 1,
            disabled: true
        })
        if (order.length > 0) {
            ordercart.style.display = 'flex'
        }
        addtocheckout()
        // clickbtn.textContent = 'Added';
        // clickbtn.classList.remove('deshies-CTA');
        // clickbtn.classList.add('Added-topdishies-btn')
        localStorage.setItem('order', JSON.stringify(order))
        // console.log(order)
        // }
    }
    else if (Id == 'FullMenu') {
        const clickedbtn = clickbtn.currentTarget
        clickedbtn.classList.add('Added-fullmenu-btn')
        clickedbtn.style.backgroundColor = "#221300"
        ordertital = clickedbtn.parentElement.children[0].innerText
        orderprize = clickedbtn.parentElement.children[2].innerText
        orderimg = clickedbtn.parentElement.parentElement.children[0].children[0].getAttribute('src')
        order.push({
            Image: orderimg,
            name: ordertital,
            prize: orderprize,
            orderquantity: 1,
            disabled: true
        })
        if (order.length > 0) {
            ordercart.style.display = 'flex'
        }
        addtocheckout()
        localStorage.setItem('order', JSON.stringify(order))
        clickedbtn.classList.remove('menu-card-CTA')
        clickedbtn.innerText = 'Added to Cart';
        clickedbtn.disabled = true;
    }
}


