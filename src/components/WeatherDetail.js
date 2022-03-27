import React, { Fragment } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import HELPER from "../helper";

const WeatherDetail = (props) => {

  const data  = props.currentWeather;

  return (
    <Fragment>
      <Typography sx={{ fontSize: { xs: 26, md: 28 }, whiteSpace: "nowrap" }}>
        {data.name}, {data.sys.country}
      </Typography>

      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {HELPER.convertUnixToDateTime(data.dt)}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={3} sx={{ display: "flex", justifyContent: "space-between", pr: 8 }}>
          <Box>
            <Typography variant="h1" sx={{ fontWeight: 400, mb: -1 }}>
              {HELPER.convertKelvinToCelcius(data.main.temp)}°
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {data.weather[0].main}
            </Typography>
          </Box>

          <Divider orientation="vertical" variant="middle" flexItem sx={{ display: { xs: "none", md: "block" } }}/>
    
        </Grid>

        <Grid item xs={12} md={8} lg={9} sx={{ display: "flex", alignItems: "center" }}>
          <Grid container spacing={2} sx={{ maxWidth: "400px" }}>
            <Grid item xs={4}>
              <Box>
                <Typography variant="h5">
                  {HELPER.convertKelvinToCelcius(data.main.temp_max)}°
                </Typography>
                <Typography variant="subtitle1">High</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Typography variant="h5">
                  {data.main.humidity}%
                </Typography>
                <Typography variant="subtitle1">Humidity</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sx={{ display: { xs: "flex" }, justifyContent: { xs: "end" } }}>
              <Box>
                <Typography variant="h5">
                  {HELPER.convertUnixToTime(data.sys.sunrise)}
                </Typography>
                <Typography variant="subtitle1">Sunrise</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Typography variant="h5">
                  {HELPER.convertKelvinToCelcius(data.main.temp_min)}°
                </Typography>
                <Typography variant="subtitle1">Low</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Typography variant="h5" sx={{ display: "flex", whiteSpace: "nowrap" }}>
                  {HELPER.convertMSToKMH(data.wind.speed)} km/h
                </Typography>
                <Typography variant="subtitle1">Wind</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sx={{ display: { xs: "flex" }, justifyContent: { xs: "end" } }}>
              <Box>
                <Typography variant="h5">
                  {HELPER.convertUnixToTime(data.sys.sunset)}
                </Typography>
                <Typography variant="subtitle1">Sunset</Typography>
              </Box>
            </Grid> 
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default WeatherDetail;
