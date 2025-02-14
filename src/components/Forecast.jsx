const Forecast = ({ forecastData }) => {
    if (!forecastData) return null;
  
    return (
      <div className="bg-white p-4 rounded-xl shadow-md mt-6 w-full max-w-md">
        <h3 className="text-lg font-bold text-gray-700 mb-3">Hourly Forecast</h3>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {forecastData.map((item, index) => (
            <div key={index} className="text-center p-2 bg-gray-100 rounded-lg shadow">
              <p className="text-sm font-semibold">{item.time}</p>
              <img src={item.icon} alt="Weather Icon" className="w-12 h-12 mx-auto" />
              <p className="text-lg font-bold">{item.temp}°C</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Forecast;
  