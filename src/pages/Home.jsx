import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import CurrentConditions from "../components/CurrentConditions";
import { fetchCurrentConditions, fetchForecast } from "../services/weatherApi";

const Home = () => {
  
  const [currentConditions, setCurrentConditions] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    try {
      
      const conditions = await fetchCurrentConditions(city);
      
      const forecast = await fetchForecast(city);
      console.log(conditions)

      setCurrentConditions(conditions);
      setForecastData(forecast);
    } catch (err) {
      setError(err.message);
      setCurrentConditions(null);
      setForecastData(null);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 p-4">
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      <ErrorMessage message={error} />

      {currentConditions && <WeatherCard weatherData={currentConditions} />}
      {forecastData && <Forecast forecastData={forecastData} />}
      
      {currentConditions && <CurrentConditions conditions={currentConditions} />}
    </div>
  );
};

export default Home;
