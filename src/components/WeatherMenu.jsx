import React from "react";
import styled from "styled-components";
import sun from "../images/sun.png";
import cloudy from "../images/cloudy.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";

const WeatherMenu = () => {
  return (
    <WeatherItemsContainer>
      <WeatherItem>
        <img src={sun} width="40px" height="40px" alt="sun"></img>맑음!
      </WeatherItem>
      <WeatherItem>
        <img src={cloudy} width="40px" height="40px" alt="cloudy"></img>흐림!
      </WeatherItem>
      <WeatherItem>
        <img src={rain} width="40px" height="40px" alt="rain"></img>비옴!
      </WeatherItem>
      <WeatherItem>
        <img src={snow} width="40px" height="40px" alt="snow"></img>눈옴!
      </WeatherItem>
    </WeatherItemsContainer>
  );
};

const WeatherItemsContainer = styled.div`
  border: 2px solid black;
  border-radius: 8px;
  width: 100px;
  height: 170px;
  margin-left: 10px;
`;

const WeatherItem = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
`;
export default WeatherMenu;
