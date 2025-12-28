const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "ef3da80186156fbdefb839e83018fa5e";

const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");

const getCurrentWeatherByName = async (city) => {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const responses = await fetch(url);
  const json = await responses.json();
  return json;
};

const searchHandler = async () => {
  const cityName = searchInput.value;
  if (!cityName) {
    alert("please enter city name");
  }
  const currentData = await getCurrentWeatherByName(cityName);
  console.log(currentData);
};

searchButton.addEventListener("click", searchHandler);
