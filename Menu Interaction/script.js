// declare variables

let menuBox = document.getElementById("menuBox");
let menuIcon = document.getElementById("menuIcon");

menuIcon.onclick = function(){
    menuBox.classList.toggle("open-menu");

    // to check whether menu is opened or not
    if(menuBox.classList.contains("open-menu")){
        menuIcon.src = "close.png";
    }
    else{
        menuIcon.src = "menu.png";
    }
}