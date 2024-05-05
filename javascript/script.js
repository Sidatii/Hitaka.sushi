
function mobilemenu(){
    if(document.getElementById('navbaritems').style.display == 'block'){
        document.getElementById('navbaritems').style.display = 'none';
        
    }
    else{
        document.getElementById('navbaritems').style.display = 'block';
    }
}
document.getElementById('toggle').addEventListener('click', mobilemenu);

// function resetmenu(){
//     if (window.innerWidth >= 800){
//         document.getElementById('navbaritems').style.display = 'flex';
//     } else if(window.innerWidth < 800){
//         document.getElementById('navbaritems').style.display = 'none';
//     }
// }
// window.addEventListener('resize', resetmenu);

// var items=document.getElementsByClassName('item');
// items.forEach((item)=> {
//     item.addEventListener('click',()=>{
//         document.getElementById('navbaritems').style.display = 'none';
//     });
// });

// function hidemenu(){
//     console.log("clicked");
//     document.getElementById('navbaritems').style.display = 'none';
    
// }

// Adding card functionalities

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
} else{
    ready();
}

// making ready function

function ready(){
    //remove items from our card
    var removebuttons = document.getElementsByClassName('remove');
    for(var i = 0; i<removebuttons.length; i++){
        var button = removebuttons[i];
        button.addEventListener('click', removeitem);
    }
}



//making remove function

function removeitem(e){
    var buttonclicked = e.target;
    buttonclicked.parentElement.parentElement.remove();
    updateTotal();
}



// Add to card
var addtocard = document.getElementsByClassName('btn');
for(var i = 0; i< addtocard.length; i++){
    var addtocard1 = addtocard[i];
    addtocard1.addEventListener('click', AddToCardClicked);
}






function AddToCardClicked(e){
    var button = e.target;
    var orderProduct = button.parentElement.parentElement;
    var prdName = orderProduct.getElementsByClassName('card-name')[0].innerText;
    var prdPrice = orderProduct.getElementsByClassName('price')[0].innerText;
    var prdDisc = orderProduct.getElementsByClassName('disc')[0].innerText;
    var prdImg = orderProduct.getElementsByClassName('card-header')[0];
    var prdSrc = prdImg.getElementsByClassName('cardImg')[0].src;
    addProductToCard(prdSrc,prdName,prdDisc, prdPrice);
    updateTotal();



    // console.log(qtyminus);
}


function addProductToCard(prdSrc,prdName,prdDisc, prdPrice){

    var cardShopBox = document.createElement('div');
    cardShopBox.classList.add('cardx');
    cardShopBox.style.height = '130px';
    var cardItems = document.getElementsByClassName('cardcontent')[0];
    var cardItemsNames = cardItems.getElementsByClassName('cardx-name');
    for (var i = 0; i< cardItemsNames.length; i++){
        if (cardItemsNames[i].innerText == prdName){
            Swal.fire(
                'Oops!',
                'You have already added this product',
                'warning'
              )
        return;
    }
    } 
 
    var cardBoxContent = `<div class="cardx-header cardx-image"><img src="${prdSrc}" /></div><div class="cardx-name">${prdName}</div><div class="discx">${prdDisc}</div><div class="pricex">${prdPrice}</div><div class="cardx-footer"><i onclick="reduceQuantity(this)" class="fa-solid fa-minus"></i><text class="qty">3</text><i onclick="increaseQuantity(this)" class="fa-solid fa-plus"></i></div><div class="remove"><i class="fa-solid fa-xmark"></i></div>`;
    cardShopBox.innerHTML = cardBoxContent;
cardItems.append(cardShopBox);
cardShopBox.getElementsByClassName('remove')[0].addEventListener('click', removeitem);
}  



// update total function

function updateTotal(){
    var cardcontent = document.getElementsByClassName('cardcontent')[0];
    var cardboxes = cardcontent.getElementsByClassName('cardx');
    var total = 0;
    for(var i = 0; i< cardboxes.length; i++){
        var cardbox = cardboxes[i];
        var priceelement = cardbox.getElementsByClassName('pricex')[0];
        var qtyelement = cardbox.getElementsByClassName('qty')[0];
        var price = parseFloat(priceelement.innerText.replace('Dh', ''));
        var qty = parseInt(qtyelement.innerText);
        total = total + (price * qty);
        total = Math.round(total * 100)/100;
        
        document.getElementsByClassName('amount')[0].innerText = total + ' Dh';
    }
}

function ShowAllProducts() {
    var allcards = document.getElementsByClassName('card')
    // console.log(allcards);
    for (let i = 0; i < allcards.length; i++) {
        allcards[i].style.display = 'grid'
    }
}

function HideAllProducts() {
    var allcards = document.getElementsByClassName('card');
    for (let i = 0; i < allcards.length; i++) {
        allcards[i].style.display = 'none'
    }
}

function filterProduct(category){

    if (category === 'all') {
        ShowAllProducts()
    }else{
        HideAllProducts()
          let chosencategory = document.getElementsByClassName(category);
          for (let i = 0; i < chosencategory.length; i++) {
            chosencategory[i].style.display = 'grid'
        }
    }
}
// quantity changes

function reduceQuantity(e){
    qty = +e.nextElementSibling.innerText;
    if (qty >= 1) {
        console.log(qty);
        qty--; 
        e.nextElementSibling.innerText = qty;
    }
    else{
        e.nextElementSibling.innerText = qty;
        updateTotal();
        e.parentElement.parentElement.remove();  
    }
    
    updateTotal();
    if (qty === 0) e.parentElement.parentElement.remove(); 

}

function increaseQuantity(e){
    qty = +e.previousElementSibling.innerText;
        qty++;
    
    e.previousElementSibling.innerText = qty;
    updateTotal();
}

function submitConfirmation(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your message has been received',
        showConfirmButton: false,
        timer: 1500
      });
}

function openCart(){
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

        
