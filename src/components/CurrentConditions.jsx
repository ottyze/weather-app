const CurrentConditions = ({ conditions }) => {
  if (!conditions) return null;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-6 w-full max-w-md">
      <h3 className="text-lg font-bold text-gray-700 mb-3">Current Conditions</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-2 bg-gray-100 rounded-lg shadow">
          <p className="text-sm font-semibold">Feels Like</p>
          <p className="text-lg font-bold">{conditions.feelsLike}°C</p>
        </div>
        <div className="text-center p-2 bg-gray-100 rounded-lg shadow">
          <p className="text-sm font-semibold">Humidity</p>
          <p className="text-lg font-bold">{conditions.humidity}%</p>
        </div>
        <div className="text-center p-2 bg-gray-100 rounded-lg shadow">
          <p className="text-sm font-semibold">Wind Speed</p>
          <p className="text-lg font-bold">{conditions.windSpeed} m/s</p>
        </div>
        <div className="text-center p-2 bg-gray-100 rounded-lg shadow">
          <p className="text-sm font-semibold">Precipitation</p>
          <p className="text-lg font-bold">{conditions.precipitation} mm</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentConditions;
