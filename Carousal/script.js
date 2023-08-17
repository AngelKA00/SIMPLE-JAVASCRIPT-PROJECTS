// decare variables
const imgs = document.getElementById("imgs");
const img = document.querySelectorAll('#imgs img');
let idx = 0; // index

// to make the images move
function run(){
    idx ++;
    // if current index is greater than whole image length
    if(idx > img.length - 1){ 
        idx = 0; // index moves to 0th place
    }
    // when image moves it should maintain same size
    imgs.style.transform = `translateX(${-idx * 500}px)`;   
    
}

// speed 
setInterval(run, 2000);
