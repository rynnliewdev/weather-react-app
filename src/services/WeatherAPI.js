export default {

    getWeather: async function (data) {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/weather?q=${data.city},${data.country}&appid=${process.env.REACT_APP_API_KEY}`
            )
            return response.json();
        } catch (error) {
            return error;
        }
    },

    getCoordinateWeather: async function (data) {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/weather?lat=${data.lat}&lon=${data.lon}&appid=${process.env.REACT_APP_API_KEY}`
            )
            return response.json();
        } catch (error) {
            return error;
        }
    }
}