import {
  Alert,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Box } from "@mui/system";

import WeatherDetail from "./components/WeatherDetail";
import SearchHistory from "./components/SearchHistory";
import useLocalStorage from "./hooks/useLocalStorage";
import useArray from "./hooks/useArray";
import WEATHER from "./services/WeatherAPI";
import "./App.css";

function App() {
  const [location, setLocation] = useState({ city: "", country: "" });
  const [currentWeather, setCurrentWeather] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [historiesData, setHistoriesData] = useLocalStorage("weatherhistoriesData", []);
  const histories = useArray(historiesData);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      WEATHER.getCoordinateWeather({ lat: lat, lon: lon }).then((res) => {
        setCurrentWeather(res);
        setLocation({ city: res.name, country: res.sys.country });
      }).catch(err => {
        setErrorMessage("Something went wrong.")
      });
    });
  }, []);

  useEffect(() => {
    setHistoriesData(histories.value);
  }, [histories.value]);

  const searchWeather = (e, locationData) => {
    e.preventDefault()
    WEATHER.getWeather(locationData)
    .then((res) => {
      console.log(res)
      const data = res;
      if (res.cod == 200) {
        setCurrentWeather(data)
        setErrorMessage("")
        updateHistoriesData(data)
      } else {
        setCurrentWeather("")
        setErrorMessage("Weather not found.")
      }
    })
    .catch((err) => {
      setCurrentWeather("");
      setErrorMessage("Something went wrong.")
    });
  };

  const updateHistoriesData = (data) => {
    const historyLimit = 15;
    histories.removeById(data.id);
    histories.add(data);
    if(histories.value.length > historyLimit) histories.removeByIndex(0);
  }

  const handleLocationChange = (e) => {
    setLocation((prevLocation) => ({
      ...prevLocation,
      [e.target.name]: e.target.value,
    }));
  };

  const clearLocation = () => {
    setLocation({ city: "", country: "" });
  };

  const searchLocationElement = (
    <Fragment>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>Today's Weather</Typography>

      <Grid container sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <form onSubmit={(e) => searchWeather(e, location)}>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <TextField
              name="city"
              label="City"
              size="small"
              sx={{ mb: 2, mr: 2 }}
              onChange={handleLocationChange}
              value={location.city}
            ></TextField>

            <TextField
              name="country"
              label="Country"
              size="small"
              sx={{ mb: 2, mr: 3 }}
              onChange={handleLocationChange}
              value={location.country}
            ></TextField>
            <Box>
              <Button type="submit" variant="contained" sx={{ mb: 2, mr: 1 }}>
                Search
              </Button>
              <Button
                variant="contained"
                sx={{ mb: 2,backgroundColor: "#F0F7FF", color: "#0072E5",
                  "&:hover": {
                    backgroundColor: "#E0ECFA",
                    color: "#0072E5",
                  },
                }}
                onClick={clearLocation}
              >
                Clear
              </Button>
            </Box>
          </Box>
        </form>
      </Grid>
    </Fragment>
  )

  return (
    <div className="app">

      {searchLocationElement}

      {currentWeather && (
        <WeatherDetail currentWeather={currentWeather}></WeatherDetail>
      )}

      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

      <SearchHistory
        location={location}
        histories={historiesData}
        searchWeather={searchWeather}
        deleteWeather={(e, index) => histories.removeByIndex(index)}
      ></SearchHistory>

    </div>
  );
}

export default App;
