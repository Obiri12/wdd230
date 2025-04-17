// banner.js

// Check if today is Monday, Tuesday, or Wednesday
function shouldShowBanner() {
    const today = new Date().getDay();
    return today === 1 || today === 2 || today === 3;  // Monday = 1, Tuesday = 2, Wednesday = 3
}

// Function to toggle the meet & greet banner
function toggleMeetBanner() {
    const banner = document.getElementById('meetBanner');
    const closeButton = document.getElementById('closeBanner');

    // Show banner if today is Monday, Tuesday, or Wednesday
    if (shouldShowBanner()) {
        banner.classList.remove('hidden');
    }

    // Close the banner when the user clicks the ❌ button
    closeButton.addEventListener('click', () => {
        banner.classList.add('hidden');
    });
}

// Run when the DOM content is loaded
window.addEventListener('DOMContentLoaded', toggleMeetBanner);
