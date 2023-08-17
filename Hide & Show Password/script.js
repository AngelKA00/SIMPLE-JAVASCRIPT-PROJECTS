// declare variables

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

// if eyeicon is clicked
eyeicon.onclick = function(){
    if(password.type == "password"){ // means encrypted
        password.type = "text"; // it shows text behind it
        eyeicon.src = "eye-open.png";
    }
    else{
        password.type = "password";
        eyeicon.src = "eye-close.png";
    }
}