import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlobalMap from "./components/GlobalMap";
import ChanceToRain from "./components/ChanceToRain";
import OtherLargeCity from "./components/OtherLagesCity";
import { getLocation } from "./services/weatherApi";
import { getForecast } from "./services/weatherApi";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="dashboard">
        <div className="dashboard__top">
          <Hero />
          <ChanceToRain />
        </div>
        <div className="dashboard__bottom">
          <GlobalMap />
          <OtherLargeCity />
        </div>
      </main>
    </div>
  );
}

export default App;
