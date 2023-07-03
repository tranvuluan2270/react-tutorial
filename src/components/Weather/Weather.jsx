import Search from "./Search";
import "./Weather.scss";
import WeatherByLocation from "./WeatherByLocation";

const Weather = () => {
  return (
    <div className="weather-app-container">
      <Search />
      <hr />
      <WeatherByLocation woeidFromParent={"1236594"} />
      <hr />
      <WeatherByLocation woeidFromParent={"1252431"} />
    </div>
  );
};

export default Weather;
