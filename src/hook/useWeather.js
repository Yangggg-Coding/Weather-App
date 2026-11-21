import { useState, useEffect } from "react";
import { getLocation, getForecast } from "../services/weatherApi";

export default function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    let ignore = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const place = await getLocation(city);
        const forecast = await getForecast(place.latitude, place.longitude);
        if (ignore) return;
        setLocation(place);
        setWeather(forecast);
      } catch (err) {
        if (ignore) return;
        setError(err.message);
        setWeather(null);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    
    return () => {
      ignore = true;
    };
  }, [city]);

  return { weather, location, loading, error };
}