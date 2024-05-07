async function fetchData() {
    const response = await fetch('pages.txt');
    if (response.ok) {
        const textData = await response.text();
        return textData.split('\n').filter(Boolean);
    } else {
        console.error('Failed to load data from the text file.');
        return [];
    }
}


(async function () {

    const dataArray = await fetchData();

    setTimeout(() => {

    const randomIndex = Math.floor(Math.random() * dataArray.length);
    const randomURL = dataArray[randomIndex];
    window.location.replace(randomURL);

    }, 1000*10);

})();



 document.addEventListener('DOMContentLoaded', function () {
    // Array of random search engine URLs
    const searchEngines = [
      'https://www.google.com/search?q=',
      'https://www.bing.com/search?q=',
      'https://duckduckgo.com/?q=',
    ];

    // Get the search form
    const searchForm = document.querySelector('form');

    // Add submit event listener to the form
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission

      // Get the search input value
      const searchQuery = document.querySelector('#default-search').value;

      // Select a random search engine URL
      const randomIndex = Math.floor(Math.random() * searchEngines.length);
      const randomSearchEngine = searchEngines[randomIndex];

      // Redirect the user to the selected search engine URL with the search query
      window.location.href = randomSearchEngine + encodeURIComponent(searchQuery);
    });
  });
