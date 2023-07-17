import React from "react";
import styled from "styled-components";
import sun from "../images/sun.png";
import cloudy from "../images/cloudy.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";

const weatherItems = [
  { weather: "맑음!", image: sun },
  { weather: "흐림!", image: cloudy },
  { weather: "비옴!", image: rain },
  { weather: "눈옴!", image: snow },
];

const WeatherMenu = ({ onWeatherSelect }) => {
  const handleWeatherSelect = (weather) => {
    onWeatherSelect(weather);
  };

  return (
    <WeatherItemsContainer>
      {weatherItems.map((item, index) => (
        <WeatherItem
          key={index}
          onClick={() =>
            handleWeatherSelect(
              <>
                <img
                  src={item.image}
                  width="40px"
                  height="40px"
                  alt={item.weather}
                />
                <p>{item.weather}</p>
              </>
            )
          }
        >
          <img
            src={item.image}
            width="40px"
            height="40px"
            alt={item.weather}
          ></img>
          {item.weather}
        </WeatherItem>
      ))}
    </WeatherItemsContainer>
  );
};

const WeatherItemsContainer = styled.div`
  border: 2px solid black;
  cursor: pointer;
  border-radius: 8px;
  width: 100px;
  height: 163px;
  margin-left: 10px;
  background-color: white;
`;

const WeatherItem = styled.div`
  cursor: pointer;
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: lightgray;
    border-radius: 4px;
  }
`;

export default WeatherMenu;
