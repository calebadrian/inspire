function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imgService = new ImageService()

	function draw(res){
		var bodyElem = document.getElementById('body')
	}

	imgService.getImage(draw)
}


