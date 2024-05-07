async function fetchData(file) {
    const response = await fetch(file);

    if (response.ok) {
        const textData = await response.text();
        return textData.split("\n").filter(Boolean);
    } else {
        console.error("Failed to load data from the text file.");
        return [];
    }
}

(async function () {
    const dataArray = await fetchData("pages.txt");

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * dataArray.length);
        const randomURL = dataArray[randomIndex];

        const searchQuery = document.querySelector("#default-search").value;

        if (!searchQuery) {
            window.location.replace(randomURL);
        }
    }, 1000 * 10);
})();

(async function () {
    document.addEventListener("DOMContentLoaded", async function () {
        const searchEngines = await fetchData("search.txt");
        const searchForm = document.querySelector("form");

        searchForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const searchQuery = document.querySelector("#default-search").value;

            const randomIndex = Math.floor(Math.random() * searchEngines.length);
            const randomSearchEngine = searchEngines[randomIndex];

            window.location.href =
                randomSearchEngine + encodeURIComponent(searchQuery);
        });
    });
})();
