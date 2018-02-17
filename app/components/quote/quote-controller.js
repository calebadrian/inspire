function QuoteController(){

	var qs = new QuoteService()
	var quoteElem = document.getElementById('quote')

	// qs.getQuote(function(quote){
	// 	console.log('What is the quote', quote)
	// })

	function draw(quote){
		var template = ''
		template += `
		<h5 class="quote bg-style text-center" onmouseover="app.controllers.quoteCtrl.revealAuthor()" onmouseout="app.controllers.quoteCtrl.revealAuthor()">${quote.quote}</h5>
		<h6 class="hidden bg-style text-center" id="author">${quote.author}</h6>`
		quoteElem.innerHTML = template
	}

	function updateClock() {
		var now = new Date()
		var time = ''
		now.getHours() < 10 ? time += '0' + now.getHours() + ':' : time += now.getHours() + ':'
		now.getMinutes() < 10 ? time += '0' + now.getMinutes() + ':' : time += now.getMinutes() + ':'
		now.getSeconds() < 10 ? time += '0' + now.getSeconds() : time += now.getSeconds()
		var template = `<h1 class="bg-style">${time}</h1>`
		if (now.getHours() < 12){
			template += `<h3 class="bg-style">Good Morning, Caleb</h3>`
		} else if (now.getHours() > 12 && now.getHours() < 18){
			template += `<h3 class="bg-style">Good Afternoon, Caleb</h3>`
		} else if (now.getHours() > 18){
			template += `<h3 class="bg-style">Good Evening, Caleb</h3>`
		}
		document.getElementById('time').innerHTML = template
	
		setTimeout(updateClock, 1000);
	}

	this.revealAuthor = function revealAuthor(){
		var authorElem = document.getElementById('author')
		authorElem.classList.toggle('hidden')
	}
	qs.getQuote(draw)
	updateClock()
}
