// Update current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Update last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

    // Store dark mode preference
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Preserve Dark Mode Preference
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";
}

// Hamburger Menu Toggle
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuButton.textContent = menu.classList.contains("show") ? "✖" : "☰";
});

// Page Visit Counter using localStorage
const visitCounter = document.getElementById("visit-counter");
if (!localStorage.getItem("visitCount")) {
    localStorage.setItem("visitCount", 0);
}

let count = parseInt(localStorage.getItem("visitCount")) + 1;
localStorage.setItem("visitCount", count);
visitCounter.innerText = count;

// Lazy Load Images and Iframe
document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll("img[loading='lazy'], iframe[loading='lazy']");
    lazyImages.forEach(img => {
        img.src = img.dataset.src || img.src; // Ensure src is properly set
    });
});
