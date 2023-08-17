// declare variables

var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");

// when user clicks on each button
btn[0].onclick = function(){
    slide.style.transform = "translateX(0px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active");// active icon gets removed
    }
    // for selected button alone active icon will be added
    this.classList.add("active");
}
btn[1].onclick = function(){
    // width gets reduced, since we gave style as width is 3200px
    // it can vary according to no.of images
    slide.style.transform = "translateX(-800px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function(){
    slide.style.transform = "translateX(-1600px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[3].onclick = function(){
    slide.style.transform = "translateX(-2400px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}