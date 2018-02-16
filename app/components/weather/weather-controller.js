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
		${weather.weather[0].icon}
		${weather.main.temp}
		${weather.name}`
		weatherElem.innerHTML = template
	}

	weatherService.getWeather(draw)

}
