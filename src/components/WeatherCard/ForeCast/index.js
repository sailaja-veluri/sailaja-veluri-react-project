import "./index.css";
export default function CurrentWeather = props =>  {
    const {everyday}= props;
    const {imglink,temp,humidity,windspeed} =everyday;
    return (
        <li className="forecast-item">
                    <p className="date"></p>
                    <div className="temp-img-container">
                        <img src={imglink} className="weather-img"/>
                        <p className="temp">temp</p>

                    </div>
                    <p className="weather-condition">weather-condition</p>
        </li>
                
            
           
    )

}