const membersURL = "data/members.json";
const displayContainer = document.getElementById("members-container");
const gridButton = document.getElementById("grid-view");
const listButton = document.getElementById("list-view");
let membersData = [];

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        membersData = await response.json();
        displayMembers("grid");
    } catch (error) {
        console.error("Failed to load members:", error);
    }
}

function displayMembers(viewType) {
    displayContainer.innerHTML = "";
    displayContainer.className = viewType === "grid" ? "grid-view" : "list-view";

    membersData.forEach(member => {
        const memberElement = document.createElement("div");
        memberElement.classList.add(viewType === "grid" ? "member-card" : "member-list");

        memberElement.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p><strong>Membership Level:</strong> ${member.membership}</p>
            </div>
        `;
        displayContainer.appendChild(memberElement);
    });
}

gridButton.addEventListener("click", () => displayMembers("grid"));
listButton.addEventListener("click", () => displayMembers("list"));

getMembers();
