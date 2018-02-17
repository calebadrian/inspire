function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	var weatherElem = document.getElementById('weather')

	function draw(weather, swap){
		var template = ''
		template += `
		<img class="mr-2" src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png">
		<h5 class="mr-2">${weather.name}</h5>
		<h5 id="weather">${weather.main.temp}${swap ? '&#8457' : '&#8451'}</h5>`
		weatherElem.innerHTML = template
	}

	this.showSettingsMenu = function showSettingsMenu(){
		document.getElementById('settings').classList.toggle('hidden')
	}

	this.changeTemp = function changeTemp(swap){
		var tempElem = document.getElementById('weather')
		weatherService.getWeather(draw, swap)
	}

	weatherService.getWeather(draw, true)

}
