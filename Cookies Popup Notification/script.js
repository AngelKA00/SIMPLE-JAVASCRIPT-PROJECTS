// declare variables

let modalBox = document.getElementById("modalbox");

// when page loads it will get displayed
function showModal(){
    setTimeout(() => {
        // it displays, since we have set the display to none in stylesheet
        modalBox.style.display = "block";
    },2000)// after 2 sec it will display
}

// to close when user clicks on close button or submit button
function closeModal(){
    modalBox.style.display = "none";
}