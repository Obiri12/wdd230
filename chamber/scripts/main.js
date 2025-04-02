document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Toggle
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    if (menuButton && menu) {
        menuButton.addEventListener("click", () => {
            menu.classList.toggle("show");
            menuButton.textContent = menu.classList.contains("show") ? "✖" : "☰";
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

    // Membership Form Handling
    const membershipForm = document.getElementById("membershipForm");
    if (membershipForm) {
        // Set the timestamp when form loads
        const timestampField = document.getElementById("timestamp");
        if (timestampField) {
            timestampField.value = new Date().toISOString();
        }

        // Form validation before submission
        membershipForm.addEventListener("submit", (event) => {
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const orgName = document.getElementById("organization").value.trim();
            const membershipLevel = document.getElementById("membershipLevel").value;
            const position = document.getElementById("position").value.trim();

            // Validate position with regex
            const positionRegex = /^[A-Za-z\s-]{7,}$/;
            if (!positionRegex.test(position)) {
                alert("Position must contain only letters, spaces, and hyphens, with at least 7 characters.");
                event.preventDefault();
                return;
            }

            if (!firstName || !lastName || !email || !phone || !orgName || !membershipLevel) {
                alert("Please fill in all required fields.");
                event.preventDefault();
                return;
            }
        });
    }
});
