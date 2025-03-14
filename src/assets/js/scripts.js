// This file contains JavaScript code for interactive features of the portfolio website.

document.addEventListener('DOMContentLoaded', function() {
    // Example of an event listener for a button click
    const contactButton = document.getElementById('contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            alert('Thank you for reaching out! We will get back to you soon.');
        });
    }

    // Function to dynamically update the portfolio items
    function loadPortfolioItems() {
        const portfolioContainer = document.getElementById('portfolio-items');
        const items = [
            {
                title: 'Project One',
                description: 'Description of project one.',
                image: 'path/to/image1.jpg'
            },
            {
                title: 'Project Two',
                description: 'Description of project two.',
                image: 'path/to/image2.jpg'
            }
        ];

        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('portfolio-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            portfolioContainer.appendChild(itemElement);
        });
    }

    loadPortfolioItems();
});