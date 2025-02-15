import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const WeatherChart = ({ weather }) => {
  if (!weather || !weather.days) {
    return <p>No weather data available</p>;
  }

  // Extract first 7 days' temperature data and convert date to day names
  const firstSevenDaysTemp = weather.days.slice(0, 7).map(day => ({
    date: day.datetime,
    day: new Date(day.datetime).toLocaleDateString("en-US", { weekday: "short" }), // "Mon", "Tue", etc.
    tempMax: day.tempmax,
    tempMin: day.tempmin,
    avgTemp: day.temp
  }));

  console.log(firstSevenDaysTemp)

  return (
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-lg">
        <h2 className=" relative z-20 text-xl font-bold mb-4 text-center">7-Day Temperature Chart</h2>
        <ResponsiveContainer width={400} height={200}>
          <LineChart data={firstSevenDaysTemp} margin={{ left: 20, right: 20 }}>
            <XAxis dataKey="day" interval={0} /> {/* Ensure all days are shown */}
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="avgTemp" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="tempMax" stroke="#ff7300" strokeWidth={2} strokeDasharray="5 5" />
            <Line type="monotone" dataKey="tempMin" stroke="#00c49f" strokeWidth={2} strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeatherChart;
