import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlobalMap from "./components/GlobalMap";
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
      </div>
    </>
  );
}

export default App;
