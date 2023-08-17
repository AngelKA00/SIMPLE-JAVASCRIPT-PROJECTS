// declare variables
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.querySelector(".progress-bar-front");
const steps = document.querySelectorAll(".step");

let currentChecked = 1;

// when user clicks on next button
next.addEventListener("click", ()=>{
    currentChecked++;
    if(currentChecked > steps.length){
        currentChecked = steps.length;
    }
    updateStepProgress();
});

// when user clicks on prev button
prev.addEventListener("click", ()=>{
    currentChecked--;
    if(currentChecked < 1){
        currentChecked = 1;
    }
    updateStepProgress();
});

// to update the bar progress
function updateStepProgress(){
    steps.forEach((step,idx) =>{
        if(idx < currentChecked){
            step.classList.add("checked");
            // to display text below checkbox
            step.innerHTML = `<i class="fa-solid fa-check"></i>
            <small>${idx === 0 ? "Start" : 
            idx === steps.length - 1 ? "Final" : 
            "Step" + idx}
            </small>`;
        }else{
            step.classList.remove("checked");
            step.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        }
    });

    // to display progress bar color when it moves
    const checkedNumber = document.querySelectorAll(".checked");
    progress.style.width = ((checkedNumber.length - 1) / (steps.length - 1)) * 100 + "%";

    // to make the buttons disable 
    if(currentChecked === 1){
        prev.disabled = true;
    }else if(currentChecked === steps.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}