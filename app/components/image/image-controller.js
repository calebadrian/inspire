function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imgService = new ImageService()

	function draw(res){
		var url = res.url
		document.body.style.backgroundImage = "url(" + url + ")";
		document.body.style.backgroundRepeat = 'no-repeat'
		document.body.style.backgroundPosition = 'center center'
		document.body.style.backgroundSize = 'cover'
	}

	imgService.getImage(draw)
}


