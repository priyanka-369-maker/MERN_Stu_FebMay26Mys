const signupform  = document.getElementById("signupform");
const signupemail = document.getElementById("signupemail");
const signuppassword = document.getElementById("signuppassword");
const message = document.getElementById("message");
signupform.addEventListener("submit",function(event){
    function(event){
        event.preventDefault();
        if(!email){
            message.textContent="email is required";
            message.style.color="red";
            signupemail.focus();
            return;
        }
    }
});