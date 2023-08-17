// declare variable

var textBox = document.getElementById("textBox");
var imgBox = document.getElementById("imgBox");

// to display the text anywhere in the container which is typed inside textarea
textBox.onkeyup = textBox.onkeypress = function(){
    document.getElementById("prevText").innerHTML = this.value;
}

var loadFile = function(event){
    //this will create url of the image which uploaded through the uplaod icon
    //array is given at 0, initial since we don't know which image will user upload
    // that will be displayed in imgBox as background image
    imgBox.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0]) + ")";
}