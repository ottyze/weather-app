
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; // Store in .env
const BASE_URL = "https://api.openweathermap.org/data/2.5";



export const fetchCurrentConditions = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&units=imperial&appid=${API_KEY}`
    );
    const data = await response.json();

    if (response.ok) {
      return {
        city: data.name,
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,

        feelsLike: Math.round(data.main.feels_like),
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        precipitation: data.main.rain ? data.main.rain["1h"] : 0,
        pressure: data.main.pressure,
        windDirection: data.wind.deg,
      };
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw error;
  }
};


export const fetchForecast = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&units=imperial&appid=${API_KEY}`
    );
    const data = await response.json();

    if (response.ok) {
      return data.list.slice(0, 6).map((item) => ({
        time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        temp: Math.round(item.main.temp),
        icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
        condition: item.weather[0].description, // Weather condition (e.g., "clear sky", "rain")
        windSpeed: item.wind.speed, // Wind speed in the specified unit
      }));
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw error;
  }
};


export const fetchWeatherData = async (city) => {
  const apiKey = process.env.REACT_APP_VISUAL_CROSSING_WEATHER_API_KEY;
  const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

  const encodedCity = encodeURIComponent(city);
  const url = `${baseUrl}/${encodedCity}?unitGroup=us&key=${apiKey}&contentType=json`;
  
  try {
    const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    
  } catch (error) {
    throw error;
  }
};


