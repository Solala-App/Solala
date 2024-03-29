import Constants from "expo-constants";
import * as Location from "expo-location";
import React from "react";
import { Alert } from "react-native";

import * as weatherIcons from "../../../assets/favicons_weather";

const openWeatherKey = Constants.manifest?.extra?.openWeatherKey;
const url = `https://api.openweathermap.org/data/2.5/onecall?&units=metric&exclude=minutely&appid=${openWeatherKey}`;

interface Weather {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
}

const getWeatherIcon = (name?: string): string => {
  switch (name) {
    case "Clear":
      return weatherIcons.Sun;
    case "Clouds":
      return weatherIcons.Cloudy;
    case "Rain":
    case "Drizzle":
      return weatherIcons.Rain;
    case "Thunderstorm":
      return weatherIcons.Thunderstorm;
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
      return weatherIcons.Mist;
    case "Snow":
      return weatherIcons.Snow;
    default:
      return weatherIcons.Loading;
  }
};

const getWeatherAdvice = (name?: string): string => {
  switch (name) {
    case "Clear":
      return "enjoy the sun!";
    case "Clouds":
      return "enjoy the shade today!";
    case "Fog":
    case "Mist":
    case "Drizzle":
      return "it might be a little damp!";
    case "Rain":
    case "Thunderstorm":
      return "bring your umbrella today!";
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Sand":
    case "Ash":
      return "stay inside, air hazards!";
    case "Snow":
      return "it's a snow day!";
    default:
      return "what a lovely day!";
  }
};

interface UseWeatherReturn {
  forecast?: Partial<Weather>;
  loadForecast: () => void;
  weatherIcon?: string;
  weatherTemp?: number;
  weatherAdvice?: string;
  refreshing: boolean;
}

export function useWeather(): UseWeatherReturn {
  const [forecast, setForecast] = React.useState<Partial<Weather>>();
  const [refreshing, setRefreshing] = React.useState(false);

  const loadForecast = async () => {
    setRefreshing(true);

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
    }

    const location = await Location.getCurrentPositionAsync();
    const response = await fetch(
      `${url}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
    );
    const data = await response.json();
    const current = data.daily[0];

    if (!response.ok) {
      Alert.alert(`Error retrieving weather data: ${data.message}`);
    } else {
      setForecast(current);
    }

    //console.log({ forecast });

    setRefreshing(false);
  };

  React.useEffect(() => {
    if (!forecast) {
      loadForecast();
    }
  });

  const weather = forecast?.weather ? forecast?.weather[0] : undefined;
  const weatherIcon = getWeatherIcon(weather?.main);
  const weatherTemp = forecast?.temp?.day ? forecast?.temp.day : undefined;
  const weatherAdvice = getWeatherAdvice(weather?.main);

  //console.log({ forecast, weather, weatherIcon });

  return {
    forecast,
    weatherIcon,
    weatherTemp,
    weatherAdvice,
    refreshing,
    loadForecast,
  };
}
