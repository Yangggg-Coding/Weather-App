import { useState } from "react";
import useWeather from "./hook/useWeather";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import ChanceToRain from "./components/ChanceToRain";
import OtherLargeCities from "./components/OtherLargeCities";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  const [city, setCity] = useState("Phnom Penh");
  const { weather, location, loading, error } = useWeather(city);

  return (
    <div className="app-shell">
      <Navbar onSearch={setCity} />

      <main className="dashboard">
        {loading && <p className="status">Loading weather…</p>}
        {error && <ErrorMessage message={error} />}
        {weather && !error && (
          <>
            <div className="dashboard__top">
              <Hero
                location={location}
                current={weather.current}
                daily={weather.daily}
              />
              <ChanceToRain daily={weather.daily} />
            </div>
            <div className="dashboard__bottom">
              <OtherLargeCities onSelect={setCity} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
