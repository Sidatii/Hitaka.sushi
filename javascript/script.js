
function mobilemenu(){
    if(document.getElementById('navbaritems').style.display == 'block'){
        document.getElementById('navbaritems').style.display = 'none';
        
    }
    else{
        document.getElementById('navbaritems').style.display = 'block';
    }
}
document.getElementById('toggle').addEventListener('click', mobilemenu);


if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
} else{
    ready();
}

function ShowAllProducts() {
    var allcards = document.getElementsByClassName('card')
    // console.log(allcards);
    for (let i = 0; i < allcards.length; i++) {
        allcards[i].style.display = 'grid'
    }
}


function openCart(){
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "150px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

        
