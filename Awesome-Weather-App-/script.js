var searchEngine = document.getElementById("searchBtn");

var searchInput = document.getElementById("searchh");

var searchBtns = document.getElementById("cities.string.value");

const apiKey = "0720d4712f70a776f7e730c2791ecd1c";

function fiveDay(lat, lon) {
  var fiveForecast =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    apiKey;
  fetch(fiveForecast)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

  //document.getElementById("temp1").textContent = data.list[1].main.temp;
}

/*array (cityo) = [
  sydney,
  brisbane,
  melbourne,
  hobart,
  darwin,
  perth,
  canberra,
  adelaide,
];*/

const city = "sydney";
const city1 = "brisbane";
const city2 = "melbourne";
const city3 = "hobart";
const city4 = "darwin";
const city5 = "perth";
const city6 = "canberra";
const city7 = "adelaide";

/*const url1 =
  "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
//"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";*/
function getWeather() {
  const url3 =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchInput.value +
    "&appid=" +
    apiKey +
    "&units=metric";

  fetch(url3)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.coord.lat);
      console.log(data.coord.lon);

      document.getElementById("currentTemp").textContent = data.main.temp;
      document.getElementById("cityName").textContent =
        data.name + "(" + data.timezone + ")";
      document.getElementById("currentHumidity").textContent =
        data.main.humidity;
      document.getElementById("currentWind").textContent = data.wind.speed;

      fiveDay(data.coord.lat, data.coord.lon);
    });
}

function searchCity() {
  getWeather();
}

searchEngine.addEventListener("click", searchCity);

/*const url2 =
  "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";*/

function sideBtns() {}

searchBtns.addEventListener("click", searchCity);
