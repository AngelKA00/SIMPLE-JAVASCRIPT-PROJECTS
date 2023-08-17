// declare variables
const toggle = document.getElementById("toggle");

// add dark class to make the background to black colour when user clicks on it
toggle.addEventListener("change", (e)=>{
    document.body.classList.toggle("dark", e.target.checked);
});