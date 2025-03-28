const apikey = "6f34cc6f01de51cf54dcd2e79ff79076";
const url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function getWeatherData(city) {
    const response = await fetch(url +city+ `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    var data = await response.json();
    console.log(data);
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = data.main.temp + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
if(data.weather[0].main == "Clouds"){
    weathericon.src = "weather-app-img/clouds.png";
}
else if(data.weather[0].main == "Clear"){
    weathericon.src = "weather-app-img/clear.png";
}
else if(data.weather[0].main == "Rain"){
    weathericon.src = "weather-app-img/rain.png";
}
else if(data.weather[0].main == "Snow"){
    weathericon.src = "weather-app-img/snow.png";
}
else if(data.weather[0].main == "Drizzle"){
    weathericon.src = "weather-app-img/drizzle.png";
}
else if(data.weather[0].main == "mist"){
    weathericon.src = "weather-app-img/mist.png";
}
document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
}
}
btn.addEventListener("click", () => {
    getWeatherData(search.value);ṇ
});

document.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        getWeatherData(search.value);
    }
});
