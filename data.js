const product = [{
    id: 1,
    quantity: 20,
    name: "MacBook Air 13",
    category: "Pracovní",
    price: 25000,
    image: "1.JPG",
    mark:"Macbook",
    details: {
        procesor: "Apple M1",
        os: "mac os",
        memory: "8GB",
        dispaly:"lesklý",
    },

},{
    id: 2,
    quantity: 25,
    name: "HP ProBook 450 G9",
    category: "Herní",
    price: 23900,
    image: "images/2.JPG",
    mark:"HP",
    details: {
        procesor: "Intel Core i5 1235U Alder Lake",
        os: "Windows 11 Home",
        memory: "16GB",
        dispaly:"matný",
    },

},{
    id: 3,
    quantity: 5,
    name: "Acer Aspire 3 Lava Red",
    category: "Pracovní",
    price: 11990,
    image: "images/3.JPG",
    mark:"acer",
    details: {
        procesor: "Intel Core i3 1115G4 Tiger Lake",
        os: "Windows 10 Home",
        memory: "8GB",
        dispaly:"matný",
    },

},{
    id: 4,
    quantity: 205,
    name: "ASUS Vivobook 16 W1605ZA-MB023W",
    category: "Herní",
    price: 11990,
    image: "images/4.JPG",
    mark:"ASUS",
    details: {
        procesor: "Intel Core i5 1235U Alder Lake",
        os: "Windows 11 Pro",
        memory: "16GB",
        dispaly:"matný",
    },
},{
    id: 5,
    quantity: 3,
    name: "Realme Book Prime GreyW",
    category: "Pracovní",
    price: 12900,
    image: "images/5.JPG",
    mark:"Relame",
    details: {
        procesor: "Intel Core i5 11320H Tiger Lake",
        os: "Windows 11 Home",
        memory: "16GB",
        dispaly:"lesk",
    },
},{
    id: 6,
    quantity: 30,
    name: "Lenovo ThinkPad E15 Gen 3 Black",
    category: "Pracovní",
    price: 14690,
    image: "images/6.JPG",
    mark:"Lenovo",
    details: {
        procesor: "AMD Ryzen 5 5500U",
        os: "Windows 11 Home",
        memory: "8GB",
        dispaly:"lesk",
    },
},{
    id: 7,
    quantity: 10,
    name: "Lenovo Yoga Slim 7 ProX ",
    category: "herní",
    price: 31990,
    image: "images/7.JPG",
    mark:"Lenovo",
    details: {
        procesor: "Intel Core i5 12500H Alder Lake",
        os: "Windows 10 Home",
        memory: "16GB",
        dispaly:"lesk",
    },
},{
    id: 8,
    quantity: 37,
    name: "Acer Nitro 5 Obsidian Black",
    category: "herní",
    price: 34990,
    image: "images/8.JPG",
    mark:"Acer",
    details: {
        procesor: "Intel Core i7 12700H Alder Lake",
        os: "Windows 11 Home",
        memory: "32GB",
        dispaly:"matný",
    },
},{
    id: 9,
    quantity: 307,
    name: "MSI Katana 15 B12VGK-1015CZ",
    category: "herní",
    price: 39990,
    image: "images/9.JPG",
    mark:"MSI",
    details: {
        procesor: "Intel Core i7 12650H Alder Lake",
        os: "Windows 11 Home",
        memory: "16GB",
        dispaly:"matný",
    },
},{
    id: 10,
    quantity: 3,
    name: "Dell Vostro 7620",
    category: "herní",
    price: 39990,
    image: "images/10.JPG",
    mark:"Dell",
    details: {
        procesor: "Intel Core i7 12650H Alder Lake",
        os: "Windows 10 Home",
        memory: "32GB",
        dispaly:"matný",
    },
},
]

// JS
let fitler = document.querySelector(".filter")
let cardContainer = document.querySelector(".container-card")


// Vyhledávací políčko
fitler.addEventListener("input", (e) => {
    dataFilter(e.target.value)
})


// Pole do kterého se uloží všechny výsledky pro výpis
let allProduct = []

// Výpis data
product.map( (oneProduct) => { 
    let card = document.createElement("div")
        card.innerHTML = `
        <div class="card"> 
                    <div class="card-img">
                        <img class="imgcard" src="${oneProduct.image}"} alt="">
                    </div>
                    
                    <div class="card-info">
                        <h2 class="name">${oneProduct.name}</h2>
                        <div class="category"> Typ notebooku: ${oneProduct.category}</div>
                        <div class="mark">Značka: ${oneProduct.mark}</div>
                        <div class="quantity"> Množství: ${oneProduct.quantity}</div>
                        <div class="price"> Cena: ${oneProduct.price} Kč</div>

                        <div class="details">
                            <span class="procesor">${oneProduct.details.procesor},</span>
                            <span class="os">${oneProduct.details.os},</span>
                            <span class="memory">${oneProduct.details.memory},</span>
                            <span class="display",>${oneProduct.details.dispaly}</span>
                        </div>
                    </div>
                </div>
    
    `
    // Přidání do stránky i do pole na které je filtry který příděluje cass
    cardContainer.appendChild(card)
    allProduct.push(card)
})




// Filter
dataFilter = (text) => {
    allProduct.forEach( (oneProduct) => {

        if(oneProduct.innerHTML.toLowerCase().includes(text.toLowerCase())){
            oneProduct.classList.remove("hiden-product")
        }else{
                oneProduct.classList.add("hiden-product")
            }
    })
}




