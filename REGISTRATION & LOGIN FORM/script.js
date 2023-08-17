// declare variables
let signupBtn=document.getElementById("signupBtn");
let signinBtn=document.getElementById("signinBtn");
let nameField=document.getElementById("nameField");
let title=document.getElementById("title");

// when user clicks on SIGN IN BUTTON 
signinBtn.onclick = function() {
    nameField.style.maxHeight = "0";// to hide name field when user clicks on sign in button
    title.innerHTML = "Sign In"; // title gets changed
    signupBtn.classList.add("disable"); // signup gets disabled 
    signinBtn.classList.remove("disable"); // disabled sign in button is enabled 
}
// when user clicks on SIGN UP BUTTON 
signupBtn.onclick = function() {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up"; // title gets changed
    signinBtn.classList.add("disable"); // signup gets disabled 
    signupBtn.classList.remove("disable"); // disabled sign in button is enabled 
}