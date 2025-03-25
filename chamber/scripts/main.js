document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Toggle
    const menuButton = document.querySelector("#menuButton");
    const navMenu = document.querySelector("nav ul");
    
    if (menuButton) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    // Display Last Modified Date in Footer
    const lastModified = document.querySelector("#lastModified");
    if (lastModified) {
        const modifiedDate = new Date(document.lastModified);
        const options = { year: "numeric", month: "long", day: "numeric" };
        lastModified.textContent = `Last Updated: ${modifiedDate.toLocaleDateString("en-US", options)}`;
    }

    // Sidebar Visit Message Logic
    const visitMessage = document.querySelector("#visitMessage"); // Ensure you have <p id="visitMessage"></p> in your HTML
    if (visitMessage) {
        const lastVisit = localStorage.getItem("lastVisit");
        const currentDate = Date.now();

        if (!lastVisit) {
            visitMessage.textContent = "Welcome! Let us know if you have any questions.";
        } else {
            const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
            
            if (daysSinceLastVisit < 1) {
                visitMessage.textContent = "Back so soon! Awesome!";
            } else {
                visitMessage.textContent = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit > 1 ? "s" : ""} ago.`;
            }
        }

        // Store the current visit
        localStorage.setItem("lastVisit", currentDate);
    }
});
