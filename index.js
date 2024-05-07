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

function randomPick(dataArray){
  return dataArray[Math.floor(Math.random() * dataArray.length)];
}

(async function () {
    const dataArray = await fetchData("pages.txt");

    setTimeout(() => {
        const randomURL = randomPick(dataArray)
         window.location.replace(randomURL);
    }, 1000 * 10);
})();

(async function () {
    document.addEventListener("DOMContentLoaded", async function () {
        const searchEngines = await fetchData("search.txt");
        const searchForm = document.querySelector("form");

        searchForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const searchQuery = document.querySelector("#default-search").value;
            const randomSearchEngine = randomPick(searchEngines);

            window.location.href =
                randomSearchEngine + encodeURIComponent(searchQuery);
        });
    });
})();
