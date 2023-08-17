// declare variables

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// to show notes if any is stored after browser is closed
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// to store the data entered by user
function updateStorage(){
    //whatever is typed in notescontainer, it will be stored in local storage
    // with a name called "notes"
    localStorage.setItem("notes", notesContainer.innerHTML);
}

//when user clicked create button, it performs below operation
createBtn.addEventListener("click", ()=>{
    // p element will get created 
    let inputBox = document.createElement("p");
    // image will get created
    let img = document.createElement("img");
    // input box will have class
    inputBox.className = "input-box";
    // editable attribute is set
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";// image file name is this
    //input box content and image will be added to notescontainer
    notesContainer.appendChild(inputBox).appendChild(img);
})

// when user clicks on delete image, notes container will get deleted
notesContainer.addEventListener("click", function(e){
    // if image is clicked
    if(e.target.tagName === "IMG"){
        // image's parent element(i.e, notescontainer)will get removed 
        e.target.parentElement.remove();
        updateStorage();
    }
    // this will update the storage if user starts to type anything
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => { 
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }   
})

// when user press enter key on keyboard it will add line break
document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        // this will prevent the default feature of the enter key i.e, submits
        event.preventDefault();
    }
})