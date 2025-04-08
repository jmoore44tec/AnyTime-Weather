import { Permissions, webMethod } from "wix-web-module";
import { fetch } from 'wix-fetch';

const apiKey = "13ef465a4c92120010527475f24e52ae";

export const getWeatherByCity = webMethod(
  Permissions.Anyone, 
  async (cityName) => {
    const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}`;
    
    try {
      const response = await fetch(API_ENDPOINT);
      if (!response.ok) throw new Error(`Weather API failed: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("Weather API error:", error);
      throw error;
    }
  }
);

export const getForecastByCity = webMethod(
  Permissions.Anyone,
  async (cityName) => {
    const FORECAST_ENDPOINT = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(cityName)}&appid=${apiKey}&cnt=40`;
    
    try {
      const response = await fetch(FORECAST_ENDPOINT);
      if (!response.ok) throw new Error(`Forecast API failed: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("Forecast API error:", error);
      throw error;
    }
  }
);