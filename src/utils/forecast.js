const request = require('request');
const key = '965149496efabede27ffe9a5e28d8349';

const forecast = (lat, lon, callback) => {
  const url =
    'http://api.openweathermap.org/data/2.5/weather?lat=' +
    lat +
    '&lon=' +
    lon +
    '&units=imperial' +
    '&appid=' +
    key;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, {
        temp: body.main.temp,
        description: body.weather[0].description,
      });
    }
  });
};

module.exports = forecast;
