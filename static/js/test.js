document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    const query = document.getElementById('searchInput').value;
    if (query) {
        alert('Search for: ' + query);
        // You can replace the alert with the actual search logic, e.g., redirect to a search results page
        // window.location.href = 'search_results_page.html?query=' + encodeURIComponent(query);
    } else {
        alert('Please enter a search term.');
    }
});
    
