
// get location
const getLocation = () => {
    let location = document.getElementById("location");
    console.log(location);
};

const createUrl = () => {
    let urlString = "";
    let cityName = document.getElementById("location").value;

    urlString = `https://api.openweathermap.org/data/2.5/weather?q=${{cityName}}&APPID=fb9557cd0f5476c1bd1150aa91426972`;
    // console.log(urlString);

    return urlString;
          
};

// submit search
const submitSearch = (event) => {
    if (event.key === "Enter") {
        // Submit form
        createUrl();
    }
};
// fetch results from API
const getResults = () => {

};
fetch(createUrl(), {mode: 'cors'})
.then((response) => {
    return response.json();
})
.then((weatherJson) => {
    showResults(weatherJson);
});

//display results from API
const showResults = (jsonData) => {
    console.log(jsonData);
};


// fb9557cd0f5476c1bd1150aa91426972

// https://api.openweathermap.org/data/2.5/weather?q={city name}

// https://api.openweathermap.org/data/2.5/weather?q=dude