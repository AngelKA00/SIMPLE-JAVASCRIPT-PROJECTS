// declare variable

let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fa-solid fa-square-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-square-xmark"></i> Please fix the error !';
let invalidMsg = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid input, check again';


function showToast(msg){
    // declare variable and create div element
    let toast = document.createElement('div');
    // add class called toast to place that div element
    toast.classList.add('toast');
    // msg to display
    toast.innerHTML = msg;
    // place to display
    toastBox.appendChild(toast);

    // if the msg has below given word in it
    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    // after given secs, toast notification will be removed
    setTimeout(()=>{
        toast.remove();
    },3000)
}