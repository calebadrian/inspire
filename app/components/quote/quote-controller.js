function QuoteController(){

	var qs = new QuoteService()
	var quoteElem = document.getElementById('quote')

	// qs.getQuote(function(quote){
	// 	console.log('What is the quote', quote)
	// })

	function draw(quote){
		var template = ''
		template += `
		${quote.quote}
		${quote.author}`
		quoteElem.innerHTML = template
	}

	qs.getQuote(draw)
}
