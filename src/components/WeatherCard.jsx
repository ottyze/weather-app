const WeatherCard = ({ weatherData }) => {
    if (!weatherData) return null;
  
    return (
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-xl shadow-lg text-center text-white mt-6 w-full max-w-md">
        <h2 className="text-3xl font-bold">{weatherData.city}</h2>
        <img
          src={weatherData.icon}
          alt="Weather Icon"
          className="mx-auto w-20 h-20 my-2"
        />
        <p className="text-5xl font-semibold">{weatherData.temperature}°C</p>
        <p className="text-lg capitalize mt-2">{weatherData.description}</p>
      </div>
    );
  };
  
  export default WeatherCard;
  