import { WeatherService } from './weather-service.js';
import $ from 'jquery';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");


    let weatherService = new WeatherService();  // create instance of WeatherService class
    let promise = weatherService.getWeatherByCity(city);  // call the instance method and pass in user input

    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      const tempF = (body.main.temp - 273.15) * 9/5 + 32;
      $('.showTemp').text(`The temperature in Fahrenheit is ${tempF} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
