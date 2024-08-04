document.addEventListener('DOMContentLoaded', () => {
    const listingsContainer = document.getElementById('listings');

    // Fetch MLS listings and display them
    fetch('https://api.example.com/mls-listings') // Replace with your MLS API endpoint
        .then(response => response.json())
        .then(data => {
            data.listings.forEach(listing => {
                const propertyCard = document.createElement('div');
                propertyCard.classList.add('property-card');
                propertyCard.innerHTML = `
                    <img src="${listing.image}" alt="Property Image">
                    <h3>${listing.title}</h3>
                    <p>Location: ${listing.location}</p>
                    <p>Price: $${listing.price}</p>
                `;
                listingsContainer.appendChild(propertyCard);
            });
        })
        .catch(error => console.error('Error fetching MLS listings:', error));
});
