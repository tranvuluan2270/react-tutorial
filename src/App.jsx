import "./Home.scss";
import Home from "./components/Home";
import Product from "./components/Products/Product";
import "react-image-lightbox/style.css";
import Nav from "./components/Navigation/Nav";
import Weather from "./components/Weather/Weather";
import OTP from "./components/OTP/OTP";
import WeatherByLocation from "./components/Weather/WeatherByLocation";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/weather" exact>
          <Weather />
        </Route>
        <Route path="/otp">
          <OTP />
        </Route>
        <Route path="/weather/detail/:woeid">
          <WeatherByLocation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
