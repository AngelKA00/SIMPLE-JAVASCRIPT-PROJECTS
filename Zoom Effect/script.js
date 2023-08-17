// declare variables
const container = document.getElementById("container");
const img = document.querySelector("img");

// to perfrom when user moves the mouse cursor to the image
container.addEventListener("mousemove",(e)=>{
    const x = e.clientX - e.target.offsetLeft; 
    const y = e.clientY - e.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
});

// to perfrom when user leaves the cursor out of image
container.addEventListener("mouseleave", ()=>{
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
});