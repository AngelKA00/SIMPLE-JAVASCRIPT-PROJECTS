// declare variable
let popup = document.getElementById("popup");
// to display pop up msg
function openPopup(){
    // add new class and give style to them to make the popup visible
    popup.classList.add("open-popup");
}

// to close pop up msg
function closePopup(){
    // it will remove that class and make it not visible to users
    popup.classList.remove("open-popup");
}