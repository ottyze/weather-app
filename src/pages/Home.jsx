import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import CurrentConditions from "../components/CurrentConditions";
import backgroundVideo from "../assets/background.mp4";
import { fetchCurrentConditions, fetchForecast, fetchWeatherData } from "../services/weatherApi";
import MyChart from "../components/MyChart";

const Home = () => {
  const [currentConditions, setCurrentConditions] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    try {
      const conditions = await fetchCurrentConditions(city);
      const forecast = await fetchForecast(city);
      const weather = await fetchWeatherData(city);
      setCurrentConditions(conditions);
      setForecastData(forecast);
      setWeatherData(weather);

    } catch (err) {
      setError(err.message);
      setCurrentConditions(null);
      setForecastData(null);
    }
    setLoading(false);
  };

  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-start p-4">

      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
        src={backgroundVideo} 
        autoPlay 
        loop 
        muted 
      />
      
      {/* Overlay to make text more readable */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center">
        <SearchBar onSearch={handleSearch} />
        {loading && <Loader />}
        <ErrorMessage message={error} />
        {currentConditions && <WeatherCard weatherData={currentConditions} />}
        {forecastData && <Forecast forecastData={forecastData} />}
        {currentConditions && <CurrentConditions conditions={currentConditions} />}
        
        
      </div>
      <MyChart weather={weatherData} />
    </div>
  );
};

export default Home;