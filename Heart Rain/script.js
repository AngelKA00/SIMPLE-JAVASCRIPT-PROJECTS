// to create heart
function createHeart(){
    const heart = document.createElement("div"); // declare variable
    heart.classList.add("heart"); // add the heart
    // displays at random place according to viewport width
    heart.style.left = Math.random()*100 + "vw"; 
    heart.style.animationDuration = Math.random()* 2 + 3 + "s";//time interval of heart falling
    
    heart.innerText = "💜";
    // for each 5000ms heart gets removed during falling down
    document.body.appendChild(heart);
    setTimeout( ()=> {
        heart.remove();
    }, 5000 );
}
// create is created for each 100ms, if we want it to create more decrease the 100ms
setInterval(createHeart,100);