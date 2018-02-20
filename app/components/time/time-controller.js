function TimeController(){

    var timeService = new TimeService()
    var userName = document.getElementById('user-name')
    var bodyElem = document.getElementById('body')

    function twelveClock() {
        var now = new Date()
        var hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours()
        var amPm = now.getHours() >= 12 ? 'PM' : 'AM'
        var minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
        var seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
        var time = hours + ':' + minutes + ':' + seconds + ' ' + amPm
		var template = `<h1 class="">${time}</h1>`
		if (now.getHours() < 12){
			template += `<h3 class="">Good Morning</h3>`
		} else if (now.getHours()>= 12 && now.getHours() < 18){
			template += `<h3 class="">Good Afternoon</h3>`
		} else if (now.getHours() >= 18){
			template += `<h3 class="">Good Evening</h3>`
		}
		document.getElementById('twelve-time').innerHTML = template
        
		setTimeout(twelveClock, 1000);
    }

    function twentyfourClock(){
        var now = new Date()
        var hours = now.getHours()
        var minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
        var seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
        var time = hours + ':' + minutes + ':' + seconds
		var template = `<h1 class="">${time}</h1>`
		if (hours < 12){
			template += `<h3 class="">Good Morning</h3>`
		} else if (hours >= 12 && hours < 18){
			template += `<h3 class="">Good Afternoon</h3>`
		} else if (hours >= 18){
			template += `<h3 class="">Good Evening</h3>`
		}
		document.getElementById('twentyfour-time').innerHTML = template
        
		setTimeout(twentyfourClock, 1000);
    }

    function drawUserName(){
        var user = timeService.getUser()
        userName.innerText = `${user.name}`
    }

    this.toggleClock = function toggleClock(){
        var twelve = document.getElementById('twelve-time')
        var twentyfour = document.getElementById('twentyfour-time')
        if (twelve.classList.contains('hidden')){
            twelve.classList.remove('hidden')
            twentyfour.classList.add('hidden')
        } else {
            twelve.classList.add('hidden')
            twentyfour.classList.remove('hidden')
        }
    }

    this.editUser = function editUser(event){
        event.preventDefault()
        var form = event.target
        timeService.editUser(form.name.value)
        form.reset()
        drawUserName()
    }

    this.toggleText = function toggleText(){
        if (!bodyElem.classList.contains('color-black')){
            bodyElem.classList.add('color-black')
        } else {
            bodyElem.classList.remove('color-black')
        }
    }

    twelveClock()
    twentyfourClock()
    drawUserName()


}