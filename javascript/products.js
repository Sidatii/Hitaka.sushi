const menuItems = [
    {
        "name": "Sushi 1tho",
        "image": "images/img1.png",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti saepe, sunt numquam ab sit.",
        "price": 320,
        "quantity": 1
    },
    {
        "name": "Sushi 22",
        "image": "images/img2.png",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti saepe, sunt numquam ab sit.",
        "price": 150,
        "quantity": 1
    },
    {
        "name": "Sushi 33",
        "image": "images/img3.png",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti saepe, sunt numquam ab sit.",
        "price": 49,
        "quantity": 1
    },
    {
        "name": "Salade",
        "image": "images/img4.png",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti saepe, sunt numquam ab sit.",
        "price": 130,
        "quantity": 1

    },
    {
        "name": "Sushi 44",
        "image": "images/img5.png",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti saepe, sunt numquam ab sit.",
        "price": 240,
        "quantity": 1

    },
    {
        "name": "Sushi 55",
        "image": "images/img6.png",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti saepe, sunt numquam ab sit.",
        "price": 150,
        "quantity": 1

    },
    {
        "name": "Sushi 66",
        "image": "images/img7.png",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti saepe, sunt numquam ab sit.",
        "price": 122,
        "quantity": 1

    },
    {
        "name": "Salade 22",
        "image": "images/img8.png",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti saepe, sunt numquam ab sit.",
        "price": 69,
        "quantity": 1

    },
    {
        "name": "Sidatii",
        "image": "images/img9.png",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti saepe, sunt numquam ab sit.",
        "price": 82,
        "quantity": 1

    }
]


const menuList = document.getElementById("menu");

menuItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "card card-shadow sushi";

    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header card-image";
    const img = document.createElement("img");
    img.src = item.image;
    cardHeader.appendChild(img);

    const cardName = document.createElement("div");
    cardName.className = "card-name";
    cardName.innerText = item.name;

    const disc = document.createElement("div");
    disc.className = "disc";
    disc.textContent = item.description;

    const pricing = document.createElement("div");
    pricing.className = "pricing";
    const price = document.createElement("div");
    price.className = "price";
    price.textContent = item.price+" dh";
    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = "Order";
    btn.addEventListener("click", () => handleOrderClick(item)); // Add click event listener
    cardFooter.appendChild(btn);

    pricing.appendChild(price);

    card.appendChild(cardHeader);
    card.appendChild(cardName);
    card.appendChild(disc);
    card.appendChild(pricing);
    card.appendChild(cardFooter);

    menuList.appendChild(card);
});