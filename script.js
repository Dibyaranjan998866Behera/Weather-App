const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getWeather);

document.getElementById("cityInput")
.addEventListener("keypress", function(e){

if(e.key === "Enter"){
getWeather();
}

});


async function getWeather(){

const city = document.getElementById("cityInput").value;

const apiKey = "c85c5d9f6ce94a7da4e183039260603";

const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

const loading = document.getElementById("loading");
const card = document.getElementById("weatherCard");

loading.style.display = "block";
card.style.display = "none";

try{

const response = await fetch(url);
const data = await response.json();

loading.style.display = "none";
card.style.display = "block";

document.getElementById("location").innerText =
data.location.name + ", " + data.location.country;

document.getElementById("temp").innerText =
data.current.temp_c + "°C";

document.getElementById("condition").innerText =
data.current.condition.text;

document.getElementById("icon").src =
data.current.condition.icon;

document.getElementById("humidity").innerText =
data.current.humidity + "%";

document.getElementById("wind").innerText =
data.current.wind_kph + " km/h";

document.getElementById("feels").innerText =
data.current.feelslike_c + "°C";

}

catch(error){

loading.style.display = "none";
alert("City not found");

}

}