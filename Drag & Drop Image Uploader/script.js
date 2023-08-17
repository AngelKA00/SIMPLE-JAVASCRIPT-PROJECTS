// declare variables
const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

// if any change has happened in input file, it will change to upload
inputFile.addEventListener("change", uploadImage);

// to perfom uploading image
function uploadImage(){
    //uploaded image will be at default as object so we need to convert it
    //into URL of image
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    // to display image
    imageView.style.backgroundImage = `url(${imgLink})`;
    // to hide the text after image gets displayed
    imageView.textContent = "";
    // to hide the border
    imageView.style.border = 0;
}

// to perform drag function
dropArea.addEventListener("dragover",function(e){
    e.preventDefault();
});

// to drop an image
dropArea.addEventListener("drop",function(e){
    e.preventDefault();
    //when user drops an image that data will be transferred to inputfile
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});