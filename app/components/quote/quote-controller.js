function QuoteController(){

	var qs = new QuoteService()
	var quoteElem = document.getElementById('quote')

	// qs.getQuote(function(quote){
	// 	console.log('What is the quote', quote)
	// })

	function draw(quote){
		var template = ''
		template += `
		<h5 class="quote bg-style text-center" onmouseenter="app.controllers.quoteCtrl.revealAuthor()" onmouseleave="app.controllers.quoteCtrl.revealAuthor()">${quote.quote}</h5>
		<h6 class="hidden bg-style text-center" id="author">${quote.author}</h6>`
		quoteElem.innerHTML = template
	}

	this.revealAuthor = function revealAuthor(){
		var authorElem = document.getElementById('author')
		authorElem.classList.toggle('hidden')
	}
	qs.getQuote(draw)
}
