document.addEventListener('DOMContentLoaded', () => {
    const propertyForm = document.getElementById('property-form');
    const propertyList = document.getElementById('property-list');

    propertyForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const address = document.getElementById('address').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;
        const imageUrl = document.getElementById('imageUrl').value;

        const propertyHtml = `
            <div>
                <h3>${address}</h3>
                <p><strong>Price:</strong> $${price}</p>
                <p><strong>Description:</strong> ${description}</p>
                <img src="${imageUrl}" alt="${address}" style="max-width:100%;">
            </div>
        `;

        propertyList.innerHTML += propertyHtml;

        // Clear the form
        propertyForm.reset();
    });
});
