export default {
  convertUnixToDateTime(val) {
    return new Date(val * 1000).toLocaleString();
  },

  convertUnixToTime(val) {
    return new Date(val * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  },

  convertKelvinToCelcius(val) {
    return parseInt(val - 273.15);
  },

  convertKelvinToFahrenheit(val) {
    return parseInt(((val - 273.15) * 9) / 5 + 32);
  },

  convertMSToKMH(val) {
    return parseInt((val * 3.6));
  },
};
