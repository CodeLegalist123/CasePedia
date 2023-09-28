// Fetch JSON data from your file
fetch('file.json')
    .then(response => response.json())
    .then(data => {
        const cardContainer = document.getElementById('card-container');

        // Iterate through the JSON data
        data.forEach(item => {
            // Create a new card div
            const card = document.createElement('div');
            card.className = 'max-w-md w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 my-4';

            // Limit the text content to a certain number of characters
            const maxLength = 200; // Adjust this value as needed
            const truncatedText = item.text.join('\n\n').substring(0, maxLength) + (item.text.join('\n\n').length > maxLength ? '...' : '');

            // Populate the card with data from the JSON
            card.innerHTML = `
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${item.title}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${truncatedText}</p>
                        <a href="${item.link}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                `;

            // Add the card to the container
            cardContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });