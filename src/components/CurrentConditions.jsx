import { Sun, CloudRain, Wind, Droplets } from "lucide-react";

const CurrentConditions = ({ conditions }) => {
  if (!conditions) return null;

  return (
    <div className="relative bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/30 w-full max-w-lg text-gray-800">

      <h3 className="text-xl font-bold text-white mb-4">Current Conditions</h3>

      <div className="grid grid-cols-2 gap-6">
        {/* Feels Like */}
        <div className="flex items-center space-x-3 p-4 bg-white/20 backdrop-blur-md rounded-lg shadow-lg">
          <Sun className="w-8 h-8 text-yellow-300" />
          <div>
            <p className="text-sm font-semibold">Feels Like</p>
            <p className="text-lg font-bold">{conditions.feelsLike}°C</p>
          </div>
        </div>

        {/* Humidity */}
        <div className="flex items-center space-x-3 p-4 bg-white/20 backdrop-blur-md rounded-lg shadow-lg">
          <Droplets className="w-8 h-8 text-blue-300" />
          <div>
            <p className="text-sm font-semibold">Humidity</p>
            <p className="text-lg font-bold">{conditions.humidity}%</p>
          </div>
        </div>

        {/* Wind Speed */}
        <div className="flex items-center space-x-3 p-4 bg-white/20 backdrop-blur-md rounded-lg shadow-lg">
          <Wind className="w-8 h-8 text-gray-200" />
          <div>
            <p className="text-sm font-semibold">Wind Speed</p>
            <p className="text-lg font-bold">{conditions.windSpeed} m/s</p>
          </div>
        </div>

        {/* Precipitation */}
        <div className="flex items-center space-x-3 p-4 bg-white/20 backdrop-blur-md rounded-lg shadow-lg">
          <CloudRain className="w-8 h-8 text-gray-100" />
          <div>
            <p className="text-sm font-semibold">Precipitation</p>
            <p className="text-lg font-bold">{conditions.precipitation} mm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentConditions;
