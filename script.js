// const apikey = "6cddf15a31e501754e66a774be08fae0";
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
const weatherVideo = document.getElementById("weatherVideo");

async function checkweather(city) {
//     const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data, data.weather[0].main);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    document.querySelector(".lat").innerHTML = "Latitude  :  " + data.coord.lat;
    document.querySelector(".long").innerHTML = "Longitude  :  " + data.coord.lon;
    document.querySelector(".desc").innerHTML = data.weather[0].main;

    let weatherCondition = data.weather[0].main;

    if (weatherCondition == "Clouds") {
        weathericon.src = ".clouds.png";
        weatherVideo.src = "./videos/cloudy.mp4";
    } else if (weatherCondition == "Clear") {
        weathericon.src = ".clear.png";
        weatherVideo.src = "./videos/clear.mp4";
    } else if (weatherCondition == "Rain") {
        weathericon.src = "./rain.png";
        weatherVideo.src = "./videos/rain.mp4";
    } else if (weatherCondition == "Drizzle") {
        weathericon.src = ".drizzle.png";
        weatherVideo.src = "./videos/drizzle.mp4";
    } else if (weatherCondition == "Mist") {
        weathericon.src = ".mist.png";
        weatherVideo.src = "./videos/mist.mp4";
    } else if (weatherCondition == "Haze") {
        weathericon.src = ".haze.png";
        weatherVideo.src = "./videos/haxe.mp4";
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkweather(searchBox.value);
    }
});
