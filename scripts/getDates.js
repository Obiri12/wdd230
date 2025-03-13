// Update current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Update last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Hamburger Menu Toggle
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuButton.textContent = menu.classList.contains("show") ? "✖" : "☰";
});