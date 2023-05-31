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

},

{
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

},
]

// Pracovní, Herní, Ultrabook, 


product.forEach( (oneProduct) => {
    let cardContainer = document.querySelector(".container-card")
    let card = document.createElement("div")
        // card.classList.add("card")

    card.innerHTML = `
    <div class="card"> 
                <div class="card-img">
                    <img class="imgcard" src="${oneProduct.image}"} alt="">
                </div>
                
                <div class="card-info">
                    <h2 class="name">${oneProduct.image}</h2>
                    <div class="category">${oneProduct.category}</div>
                    <div class="mark">${oneProduct.mark}</div>
                    <div class="quantity">${oneProduct.quantity}</div>
                    <div class="price">${oneProduct.price}</div>
                    <div class="details">
                        <p class="procesor">${oneProduct.details.procesor}</p>
                        <p class="os">${oneProduct.details.os}</p>
                        <p class="memory">${oneProduct.details.memory}</p>
                        <div class="display">${oneProduct.details.dispaly}</div>
                    </div>
                </div>
            </div>
    
    `
// -------------------------- Pozor na čárku
    cardContainer.appendChild(card)
    console.log(card);

 
})






