var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=8d2be3101f18e27ab3b2af49bdc649ca'
module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var reqUrl =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; //O acento grave para strings pertence a ES6 e permite construir strins com variáveis

    return axios.get(reqUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(err.data.message);
      }
      else {
        return res.data.main.temp;
      }
    },
    function (err) {
      throw new Error("Unable to fetch weather for that location: " +err.toString());
    });
  }
}
