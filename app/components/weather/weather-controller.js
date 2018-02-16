function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	var weatherElem = document.getElementById('weather')
	
	// weatherService.getWeather(function(weather){
	// 	console.log(weather);
	// 	//What can you do with this weather object?
	// })

	function draw(weather){
		var template = ''
		template += `
		<img class="mr-2" src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png">
		<h5 class="mr-2">${weather.name}</h5>
		<h5>${weather.main.temp}&#8457</h5>`
		weatherElem.innerHTML = template
	}

	weatherService.getWeather(draw)

}
