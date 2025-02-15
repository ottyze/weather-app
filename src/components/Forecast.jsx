const Forecast = ({ forecastData }) => {
  if (!forecastData) return null;

  return (
    <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/30 mt-6 w-full max-w-2xl text-gray-800 mb-6">

      <h3 className="text-xl font-bold mb-4 text-center">Hourly Forecast</h3>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-2">
        {forecastData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/20 p-4 rounded-lg shadow-md backdrop-blur-md min-w-[100px] transition-transform transform hover:scale-105"
          >
            <p className="text-sm font-semibold">{item.time}</p>
            <img src={item.icon} alt="Weather Icon" className="w-14 h-14" />
            <p className="text-lg font-bold">{item.temp}°C</p>
            <p className="text-sm">💨 {item.windSpeed} m/s</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
