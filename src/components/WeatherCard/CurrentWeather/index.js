import "./index.css";
export default function CurrentWeather = props =>  {
    const {cityName} = props;
    const weatherApi ="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
    const {imglink,temp,humidity,windspeed} =weatherApi;
    return (
        <div className="weatherCard-container">
            <div className="temp-img-container">
               <img src={imglink} className="weather-img"/>
               <p className="temp">temp</p>
            </div>
            <p classsName="humidity">humidity</p>
            <p className="windSpeed">windspeed</p>
        </div>
    )

}