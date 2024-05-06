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
        document.getElementsByClassName("nb_items")[0].innerText = cartItems.length
        document.getElementsByClassName("nb_items")[1].innerText = cartItems.length
    }else{
        document.getElementsByClassName("nb_items")[0].innerText = ""
        document.getElementsByClassName("nb_items")[1].innerText = ""
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
        document.getElementsByClassName('totalContainer')[0].style.display = "flex"
    }
    else{
        document.getElementById("total").innerHTML = ``;
        document.getElementsByClassName('totalContainer')[0].style.display = "none"
    }
}

calculateTotal()


function submitOrder() {
    submitConfirmation()
    sessionStorage.removeItem("cartItems");
    displayAddedItems(); // Refresh the displayed items
    calculateTotal()
}

function submitConfirmation(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your order is taking care of',
        showConfirmButton: false,
        timer: 2000
      });
}