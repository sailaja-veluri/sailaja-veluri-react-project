import CurrentWeather from "./CurrentWeather";
import "./index.css";
export default function WeatherCard = props =>  {
    const {cityName} = props;
    let weatherApi ="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
    let forecastApi ="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
    
    return (
        <CurrentWeather/>
        <div className="forecast-container">
        <h1 className="forecast-heading">5-days Forecast</h1>
        <ul classname="forecast-ul">
        {forecastApi.map(everyday => (
            <ForeCast className={everyday}/>
         
        ))}
        </ul>
       
    )
}
