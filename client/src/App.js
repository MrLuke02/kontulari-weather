import "./App.css";
import background from "./static/background.png";
import styled from "styled-components";
import SearchBox from "./components/searchBox.jsx";
import React, { useEffect, useState } from "react";
import api from "./services/api";
import WeatherCard from "./components/weatherCard";
import LoadingBar from "./components/loadingBar";

function App() {
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(forecast).length === 0) {
      api.get("/?location=Salvador")
        .then((forecast) => {
          setForecast(forecast.data)
        })
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }
  )

  const Weather = loading || Object.keys(forecast).length === 0 ? (<LoadingBar />) : (<WeatherCard forecast={forecast} />);

  return (
    <Container>
      <h1>Kontulari Weather</h1>
      <SearchBox setForecast={setForecast} setLoading={setLoading} />
      {Weather}
    </Container>
  );
}

const Container = styled.div`
    display: flex;
	  flex-direction: column;
    align-items: center;
    background: #1de9b6;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    min-height: 100vh;
    text-align: center;
    h1{
    color: white;
    font-size: 64px;
    font-weight: 600;
    line-height: 52px;
    padding-bottom: 48px;
    padding-top: 128px;
    text-align: center;
}
    `
export default App;
