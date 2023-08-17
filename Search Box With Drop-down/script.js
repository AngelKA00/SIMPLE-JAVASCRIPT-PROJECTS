// declare variables

let select = document.getElementById("select");
let list = document.getElementById("list");
let selectText = document.getElementById("selectText");
let inptfield = document.getElementById("inptfield");
let options = document.getElementsByClassName("options");

// when user clicks select, it works as given in style sheet
select.onclick = function(){
    list.classList.toggle("open");// open is given in style sheet
}

// user selected text is displayed 
for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.innerHTML;//displayed on option
        // to display in search box
        inptfield.placeholder = "Search in " + selectText.innerHTML;
    }
}