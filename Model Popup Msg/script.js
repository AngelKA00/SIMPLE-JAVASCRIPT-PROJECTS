// declare variables

let modelBox = document.getElementById("modelBox");

// if mouse leaves the web page
document.onmouseleave = function(){
    modelBox.style.display = "block";// displays the pop up
}

// if user clicks on close button
function closeModel(){
    modelBox.style.display = "none";// pop up will not be displayed
}