import "./Child.scss";

const WeatherState = (props) => {
  const weatherState = props.weatherState;
  const allWeatherState = {
    Clear: "c",
    "Heavy Cloud": "hc",
    "Light Cloud": "lc",
    Snow: "sn",
    Thunderstorm: "t",
  };

  const getWeatherIcon = () => {
    const fetchState = allWeatherState[weatherState];
    return `http://localhost:8080/static/img/weather/${fetchState}.svg`;
  };
  return (
    <div className="weather-state-container">
      <div className="icon-state">
        <img src={getWeatherIcon()} alt="" />
      </div>
      <div className="name-state">{weatherState}</div>
    </div>
  );
};
export default WeatherState;
