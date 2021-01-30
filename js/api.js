
let apiResponse = [];
export async function getApi(clickedTerm) {
    apiResponse = await fetch(`https://api.themoviedb.org/3/movie/${clickedTerm}?api_key=e3a786db6fffbe7ed302db12e659aaac&language=en-US&page=1`);
    apiResponse = await apiResponse.json();
    apiResponse = apiResponse.results;
    console.log(apiResponse);
    display(apiResponse);
}

function display(arrayToDisplay) {
    let container = ``;
    for (let i = 0; i < arrayToDisplay.length; i++) {
        container += `<div class="col-md-4 mb-4">
            <div class="item position-relative">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500${arrayToDisplay[i].poster_path}" alt="">
                <div class="item-overlay position-absolute d-flex justify-content-center align-items-center">
                    <div class="overlay-content text-center">
                        <h2>${arrayToDisplay[i].original_title}</h2>
                        <p>${arrayToDisplay[i].overview}</p>
                        <p>Rate: ${arrayToDisplay[i].vote_average}</p>
                        <p>${arrayToDisplay[i].release_date}</p>
                    </div>
                </div>
            </div>
        </div>`
    }
    document.getElementById("container").innerHTML = container;
}

export function searchMovies(searchTerm) {
    let searchMatching = [];

    for (let i = 0; i < apiResponse.length; i++) {
        if (apiResponse[i].title.toLowerCase().includes(searchTerm.toLowerCase()) == true) searchMatching.push(apiResponse[i]);
    }
    if (searchMatching.length > 0) display(searchMatching);

    else display(apiResponse);
}
export function searchByWord(searchTerm) {
    let searchByWordMatching = [];

    for (let i = 0; i < apiResponse.length; i++) {
        if (apiResponse[i].title.toLowerCase() == searchTerm.toLowerCase())
            searchByWordMatching.push(apiResponse[i]);
    }
    if (searchByWordMatching.length > 0) display(searchByWordMatching);

    else display(apiResponse);
}