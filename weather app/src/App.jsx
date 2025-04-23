import Searching from "./components/Searching";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  const api_key = "d8603accd66c58cd8ba882ea4ce81efe";
  const [loading, setLoading] = useState(false);

  const [weatherData, setWeatherData] = useState({
    weather: "unknown",
    temperature: 0,
    icon: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
    country: "no where",
  });

  const onSearch = (search) => {
    if (!search || search.trim() === "") {
      alert("Please enter a city name");
      return;
    }
    fetchWeatherData(search);
  };
  async function fetchWeatherData(city) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.weatherstack.com/current?access_key=${api_key}&query=${city}`
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherData({
          weather: data.current.weather_descriptions[0],
          temperature: data.current.temperature,
          icon: data.current.weather_icons[0],
          country: data.location.country,
        });
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Please enter a city name");
    } finally {
      setLoading(false); // Done loading
    }
  }
  return (
    <>
      <h1>Wheather searcher by city</h1>
      <Searching onButtonClick={onSearch} />
      {loading && <p>Loading...</p>}
      <Display
        Weather={weatherData.weather}
        Temp={weatherData.temperature}
        Icon={weatherData.icon}
        Country={weatherData.country}
      />
    </>
  );
}

export default App;
