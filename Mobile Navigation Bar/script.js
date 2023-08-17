// declare variables
let links = document.getElementsByClassName("link");

// to remove active class from all the links
function removeactive(){
    for(link of links){
        link.classList.remove("active");
    }
}

// to make the user selected element highlighted
for(link of links){
    link.onclick=function(){
        removeactive();
        this.classList.add("active");// it will be highlighted when user clicks on specific element
    }
}