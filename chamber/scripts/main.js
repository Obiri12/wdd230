document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Toggle
    const menuButton = document.querySelector("#menuButton");
    const navMenu = document.querySelector("nav ul");
    
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Display Last Modified Date in Footer
    const lastModified = document.querySelector("#lastModified");
    lastModified.textContent = `Last Updated: ${document.lastModified}`;
});
