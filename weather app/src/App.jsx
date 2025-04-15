import Searching from "./components/Searching";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  const api_key = "d8603accd66c58cd8ba882ea4ce81efe";
  const [weather, setWeather] = useState("unknown");
  const [temperature, setTemperature] = useState(0);
  const [icon, setIcon] = useState(
    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
  );
  const [country, setCountry] = useState("no where");
  const onSearch = (search) => {
    if (!search || search.trim() === "") {
      alert("Please enter a city name");
      return;
    }
    fetchWeatherData(search);
  };
  async function fetchWeatherData(city) {
    try {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`
      );
      if (response.ok) {
        const data = await response.json();
        setWeather(data.current.weather_descriptions[0]);
        setTemperature(data.current.temperature);
        setIcon(data.current.weather_icons[0]);
        setCountry(data.location.country);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Please enter a city name");
    }
  }
  return (
    <>
      <h1>hi</h1>
      <Searching onButtonClick={onSearch} />
      <Display
        Weather={weather}
        Temp={temperature}
        Icon={icon}
        Country={country}
      />
    </>
  );
}

export default App;
