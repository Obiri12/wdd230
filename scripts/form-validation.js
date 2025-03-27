document.querySelector("form").addEventListener("submit", function(event) {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let passwordError = document.getElementById("password-error");
    
    if (password !== confirmPassword) {
        event.preventDefault();
        passwordError.textContent = "Passwords do not match. Please try again.";
        document.getElementById("password").value = "";
        document.getElementById("confirm-password").value = "";
        document.getElementById("password").focus();
    } else {
        passwordError.textContent = "";
    }
});
