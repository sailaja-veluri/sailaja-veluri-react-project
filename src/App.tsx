import "./styles.css";
import WeatherCard from "../components/WeatherCard";

export default function App() {
  
  let cityName;
  const searchWeatherOfACity = (event) => {
    cityName = event.taget.value;
  };
  return (
    <div className="App">
      <input type="search" className="searchBox" />
      <button
        className="searchBtn"
        type="button"
        onClick={searchWeatherOfACity}
      >
        Search
      </button>
      <WeatherCard className={cityName} />
    </div>
  );
}
