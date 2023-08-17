// declare variables
let link = document.getElementsByClassName("link");

// to move the cursor from each page
let currentValue = 1;

// to remove active link from all links
function activeLink(){
    for (l of link){
        l.classList.remove("active");
    }
    // it will make only the selected link active others is removed
    event.target.classList.add("active");
    // that is added to the current value
    currentValue = event.target.value;
}

// to perform back arrow operation
function backBtn(){
    if(currentValue > 1){
        for (l of link){
            l.classList.remove("active");// removes all links
        }
        currentValue--;// if the codndition is correct, it reduces by 1
        // then that reduced value alone becomes active
        link[currentValue-1].classList.add("active");
    }
}

// to perform next arrow operation
function nextBtn(){
    if(currentValue < 6){
        for (l of link){
            l.classList.remove("active");// removes all links
        }
        currentValue++;// if the codndition is correct, it adds by 1
        // then that added value alone becomes active
        link[currentValue-1].classList.add("active");
    }
}