const apiKey = "0720d4712f70a776f7e730c2791ecd1c";
const city = "sydney";
const city1 = "brisbane";
const city2 = "melbourne";
const city3 = "hobart";
const city4 = "darwin";
const city5 = "perth";
const city6 = "canberra";
const city7 = "adelaide";

const url1 =
  "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
//"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";

const url2 =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  apiKey;

//const url3 = "https://pokeapi.co/api/v2/pokemon/ditto";

fetch(url2)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);

    document.getElementById("currentTemp").textContent = data.main.temp;
    document.getElementById("cityName").textContent = data.name;
  });
