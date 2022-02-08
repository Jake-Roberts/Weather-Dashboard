// add vars to get the element needed for the assignment
var searchBtnElement = document.querySelector('.btn')
var currentCityElement = document.getElementById('#current-city')
var currentWeatherElement = document.getElementById('#current-weather')
var searchCityElement = document.getElementById('#search-city')
var fiveDayElement = document.getElementById('#five-day')
// make a function for the api call 
var getWeather = function (city) {
    var weatherApi = 'http://api.openweathermap.org/data/2.5/forecast?${city}&units=imerial&id=524901&appid=a0eb49cbc1c09ab59383b707bd632b2a'
    fetch(weatherApi).then(function (response) {
        return response.json()
    }).then(function(data){
        console.log(data)
        fiveDayForecast(data)
    })
    console.log(response)
}
// make a function to call the data needed 
// add event listeners for the btns
// save cities searched 
// get the current day 
// display the weather of the city searched 
// show five day forecast 