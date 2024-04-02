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

function redirectRandomURL(dataArray) {
    const randomIndex = Math.floor(Math.random() * dataArray.length);
    const randomURL = dataArray[randomIndex];
    window.location.replace(randomURL);
}


(async function () {

    const dataArray = await fetchData();

    redirectRandomURL(dataArray);

})();
