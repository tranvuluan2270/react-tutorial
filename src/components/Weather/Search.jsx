import { useState } from "react";
import axios from "axios";
import _ from "lodash";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [locationArr, setLocationArr] = useState("");
  const [isLoadingData, setIsLoadingData] = useState(false);
  let history = useHistory();

  const handleSearch = async () => {
    setIsLoadingData(true);
    setLocationArr([]);
    let response = await axios({
      method: "post",
      url: "http://localhost:8080/get-data-by-url",
      data: {
        url: `https://www.metaweather.com/api/location/search/?query=${keyword}`,
      },
    });

    if (response && response.data) {
      let result = response.data;
      let _localtionArr = [];
      if (!_.isEmpty(result)) {
        for (let key in result) {
          _localtionArr.push(result[key]);
        }
        setLocationArr(_localtionArr);
      } else {
        setLocationArr([]);
      }
    }
    setIsLoadingData(false);
  };

  const handleViewDetail = (woeid) => {
    history.push(`/weather/detail/${woeid}`);
  };

  return (
    <div className="search-weather-container">
      <div className="search-inputs">
        <input
          type="text"
          placeholder="Search any city..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>

      {isLoadingData === true && <div>Loading data...</div>}

      <div className="result-container">
        {locationArr &&
          locationArr.length > 0 &&
          locationArr.map((item, index) => {
            return (
              <div className="result-child" key={`location-${index}`}>
                <div className="title">Title: {item.title}</div>
                <div className="type">Type: {item.location_type}</div>
                <div className="woeid">
                  <span
                    onClick={() => handleViewDetail(item.woeid)}
                    title="Click to view detail"
                  >
                    <strong>Woeid: --- {item.woeid} --- </strong>
                  </span>
                </div>
                <div className="lattlong">Lattlong: {item.latt_long}</div>
              </div>
            );
          })}
        {keyword && locationArr && locationArr.length === 0 && (
          <div>Not found data with keyword = {keyword}</div>
        )}
      </div>
    </div>
  );
};
export default Search;
