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