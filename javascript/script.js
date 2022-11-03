function mobilemenu(){
    if(document.getElementById('navbaritems').style.display == 'block'){
        document.getElementById('navbaritems').style.display = 'none';
        
    }
    else{
        document.getElementById('navbaritems').style.display = 'block';
    }
}
document.getElementById('toggle').addEventListener('click', mobilemenu);

function resetmenu(){
    if (window.innerWidth >= 800){
        document.getElementById('navbaritems').style.display = 'flex';
    } else if(window.innerWidth < 800){
        document.getElementById('navbaritems').style.display = 'none';
    }
}
window.addEventListener('resize', resetmenu);

var items=document.querySelectorAll('.item');
items.forEach((item)=> {
    item.addEventListener('click',()=>{
        document.getElementById('navbaritems').style.display = 'none';
    });
});




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
    console.log(removebuttons);
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


//quantity changes
// var qtyminus = document.getElementsByClassName('fa-minus');
// for(var i = 0; i< qtyminus.length; i++){
//     var minus = qtyminus[i];
//     minus.addEventListener('click', reduce);
// }

// function reduce(){
//     var qtychanged = document.getElementsByClassName('qty')[0];
//     for(var i = 0; i< qtychanged.length; i++){
//         var minus = qtychanged[i];

//     }
//     console.log("total");
//     qty++;
// }

function AddToCardClicked(e){
    var button = e.target;
    var orderProduct = button.parentElement.parentElement;
    var prdName = orderProduct.getElementsByClassName('card-name')[0].innerText;
    var prdPrice = orderProduct.getElementsByClassName('price')[0].innerText;
    var prdDisc = orderProduct.getElementsByClassName('disc')[0].innerText;
    // var prdImage = orderProduct.getElementsByClassName('prd-img')[0].src;
    console.log(prdPrice, prdName, prdDisc);
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
        // console.log("total");
        total = Math.round(total * 100)/100;

        document.getElementsByClassName('amount')[0].innerText = total + ' Dh';
    }
}


