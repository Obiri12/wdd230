const baseURL = 'YOUR_GITHUB_PAGES_URL';  // Change to your actual GitHub URL
const linksURL = 'data/links.json';

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  const container = document.getElementById('activity-links');
  weeks.forEach(week => {
    const weekElement = document.createElement('div');
    const weekTitle = document.createElement('h2');
    weekTitle.textContent = week.week;
    weekElement.appendChild(weekTitle);

    const linkList = document.createElement('ul');
    week.links.forEach(link => {
      const linkItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = baseURL + link.url;
      anchor.textContent = link.title;
      linkItem.appendChild(anchor);
      linkList.appendChild(linkItem);
    });

    weekElement.appendChild(linkList);
    container.appendChild(weekElement);
  });
}

// Call getLinks to start fetching and displaying the links
getLinks();
