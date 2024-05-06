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

function handleOrderClick(item) {
    let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    
    // Check if the item is already in the cart
    const isItemInCart = cartItems.some(cartItem => cartItem.name === item.name);
    if (isItemInCart) {
        Swal.fire(
            'In cart',
            'You have already added this plat , you can adjust quantity there',
            'warning'
          )        
        return;
    }

    // Add the current item to the cart
    cartItems.push(item);

    // Save the updated cart items back to session storage
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Display the added items
    displayAddedItems();
}

function displayAddedItems() {
    const addedItemsDiv = document.getElementById("addedItems");
    addedItemsDiv.innerHTML = "";
    let InitialQnt = 1
    // Retrieve the cart items from session storage
    let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

    if (cartItems.length) {
        document.getElementById("nb_items").innerText = cartItems.length
    }else{
        document.getElementById("nb_items").innerText = ""
    }

    if (cartItems.length === 0) {
        // Display message and image for empty cart
        addedItemsDiv.innerHTML = `
            <img src="images/empty-cart.png" alt="">
            <span>Oups No sushi found</span>
            <div class="toOrder">
                <a href="order.html">Discover our menu</a>
            </div>
        `;
    } else {
        // Loop through the cart items and create a div for each item
        cartItems.forEach((item, index) => {
            const addedItemDiv = document.createElement("div");
            addedItemDiv.className = "added-item";

            // Create image element
            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;
            img.className = "added-item-image";
            addedItemDiv.appendChild(img);

            // Create name and price elements
            const namePriceDiv = document.createElement("div");
            namePriceDiv.className = "added-item-name-price";
            namePriceDiv.innerHTML = `
                <span>${item.name}</span>
                <span>${item.price} dh</span>
            `;
            addedItemDiv.appendChild(namePriceDiv);

            // Create quantity control
            const quantityDiv = document.createElement("div");
            quantityDiv.className = "quantity-control";
            quantityDiv.innerHTML = `
                <button class="quantity-btn" onclick="decreaseQuantity(${index})">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="increaseQuantity(${index})">+</button>
            `;
            addedItemDiv.appendChild(quantityDiv);
            addedItemsDiv.appendChild(addedItemDiv);

        });
        calculateTotal()
    }
}

function increaseQuantity(index) {
    let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    cartItems[index].quantity++;
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    displayAddedItems();
    calculateTotal()
}

// Function to decrease quantity
function decreaseQuantity(index) {
    let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    cartItems[index].quantity--;
    if (cartItems[index].quantity <= 0) {
        cartItems.splice(index, 1);
    }
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    displayAddedItems();
    calculateTotal()
}

// Initial display of added items
displayAddedItems();


function calculateTotal() {
    let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    let totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
    if (totalPrice && totalPrice > 0.00) { 
        document.getElementById("total").innerHTML = `<span>Total : </span><span>${totalPrice.toFixed(2)} dh</span> `;
        document.getElementsByClassName('totalContainer')[0].style.display = "block"
    }
    else{
        document.getElementById("total").innerHTML = ``;
        document.getElementsByClassName('totalContainer')[0].style.display = "none"
    }
}

calculateTotal()