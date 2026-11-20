import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlobalMap from "./components/GlobalMap";
import ChanceToRain from "./components/ChanceToRain";
import OtherLargeCity from "./components/OtherLagesCity";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <div>
          {" "}
          <Hero />
          <GlobalMap />
        </div>
        <div>
          <ChanceToRain />
          <OtherLargeCity />
        </div>
      </div>
    </>
  );
}

export default App;
