// scripts/form-validation.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const errorSpan = document.getElementById("password-error");
    const ratingInput = document.getElementById("rating");
    const ratingValue = document.getElementById("rating-value");
  
    // Update range display
    ratingInput.addEventListener("input", () => {
      ratingValue.textContent = ratingInput.value;
    });
  
    // Password match validation
    form.addEventListener("submit", (e) => {
      if (password.value !== confirmPassword.value) {
        e.preventDefault();
        errorSpan.textContent = "Passwords do not match.";
      } else {
        errorSpan.textContent = "";
      }
    });
  });
  
