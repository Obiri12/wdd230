// spotlight.js

// Example member data (you would fetch this from your server or JSON file)
const members = [
    { name: 'Business 1', membership: 'gold', description: 'Gold member business' },
    { name: 'Business 2', membership: 'silver', description: 'Silver member business' },
    { name: 'Business 3', membership: 'gold', description: 'Gold member business' },
    { name: 'Business 4', membership: 'bronze', description: 'Bronze member business' }
];

// Function to get silver or gold members randomly
function loadSpotlights() {
    const qualifiedMembers = members.filter(member => member.membership === 'gold' || member.membership === 'silver');

    // Get 2-3 random members
    const randomSpotlights = getRandomMembers(qualifiedMembers, 3);

    // Display spotlight members
    const spotlightsContainer = document.getElementById('spotlights-container');
    spotlightsContainer.innerHTML = randomSpotlights.map(member => `
        <div class="spotlight">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
        </div>
    `).join('');
}

// Function to get random members
function getRandomMembers(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// Load spotlights when the page loads
window.addEventListener('DOMContentLoaded', loadSpotlights);
