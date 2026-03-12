const signupForm = document.getElementById("signupForm");
const signupPassword = document.getElementById("signupPassword");
const signupConfirmPassword = document.getElementById("signupConfirmPassword");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function(event){

    event.preventDefault();

    const password = signupPassword.value;
    const confirm = signupConfirmPassword.value;

    //Password validation
    if(!password){
        message.textContent = "Password is required.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    //check length of the password
    if(password.length < 8){
        message.textContent = "Password must be at least 8 characters long.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    //check password has UPPERCASE characters
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must contain at least 1 uppercase letter.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    //check password has LOWERCASE characters
    if(!/[a-z]/.test(password)){
        message.textContent = "Password must contain at least 1 lowercase letter.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    //check number 
    if(!/\d/.test(password)){
        message.textContent = "Password must contain at least 1 digit.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    //check special characters
    if(!/[@#$%&*!]/.test(password)){
        message.textContent = "Password must contain at least 1 special character.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    if(password !== confirm){
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        signupConfirmPassword.focus();
        return;
    }
    message.textContent = "Password validated successfully.";
    message.style.color = "green";
    console.log("Success!", { password: "***Hidden***" });

});
signupPassword.addEventListener("input", () => message.textContent = "");
signupConfirmPassword.addEventListener("input", () => message.textContent = "");