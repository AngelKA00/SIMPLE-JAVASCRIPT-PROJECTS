//declare variables
var pass = document.getElementById("password");
var msg = document.getElementById("message");
var strength = document.getElementById("strength");

// function to perform when user enters the input    
pass.addEventListener('input', () => {
    if(pass.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }
    if(pass.value.length < 4){
        strength.innerHTML = "weak";
        pass.style.borderColor = "red";
        msg.style.color = "red";
    }
    else if(pass.value.length >= 4 && pass.value.length < 8 ){
        strength.innerHTML = "average";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if(pass.value.length > 8){
        strength.innerHTML = "strong";
        pass.style.borderColor = "green";
        msg.style.color = "green";
    }
})