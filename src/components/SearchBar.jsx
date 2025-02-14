import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");
  
    const handleSearch = () => {
      if (city.trim() !== "") {
        onSearch(city);
      }
    };
  
    return (
      <div className="flex items-center space-x-3 bg-white p-2 rounded-full shadow-md w-full max-w-md">
        <input
          type="text"
          className="w-full p-2 outline-none text-gray-700 rounded-l-full"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 px-4 rounded-full hover:bg-blue-600 transition"
        >
          🔍
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  