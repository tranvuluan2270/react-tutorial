import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [title, setTitle] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let response = await axios({
      method: "post",
      url: "http://localhost:8080/get-data-by-url",
      data: { url: "https://www.metaweather.com/api/location/1236594/" },
    });
    setTimeout(() => {
      setTitle(response.data.title);
    }, 0);
  }, []);
  return <div>title= {title}</div>;
};

// class Weather extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//     };
//   }

//   async componentDidMount() {
//     // let data= await axios.get("https://www.metaweather.com/api/location/1236594/")

//     let response = await axios({
//       method: "post",
//       url: "http://localhost:8080/get-data-by-url",
//       data: { url: "https://www.metaweather.com/api/location/1236594/" },
//     });
//     this.setState({
//       title: response.data.title,
//     });
//     console.log("check data", response.data);
//   }
//   render() {
//     return <div>title= {this.state.title}</div>;
//   }
// }
export default Weather;
