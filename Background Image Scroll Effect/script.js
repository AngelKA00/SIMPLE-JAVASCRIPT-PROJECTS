// declare variables
const bgImage = document.getElementById("bg-image");

// on scrolling the page it performs this
window.addEventListener("scroll", ()=>{
    updateImage();
});

function updateImage(){
    // to make opacity work until user scrolls
    bgImage.style.opacity = 1 - window.pageYOffset / 800; 
}