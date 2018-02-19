function TimeController(){

    var timeService = new TimeService()
    var userName = document.getElementById('user-name')

    function twelveClock() {
        var now = new Date()
        var hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours()
        var amPm = now.getHours() >= 12 ? 'PM' : 'AM'
        var minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
        var seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
        var time = hours + ':' + minutes + ':' + seconds + ' ' + amPm
		var template = `<h1 class="bg-style">${time}</h1>`
		if (now.getHours() < 12){
			template += `<h3 class="bg-style">Good Morning</h3>`
		} else if (now.getHours()>= 12 && now.getHours() < 18){
			template += `<h3 class="bg-style">Good Afternoon</h3>`
		} else if (now.getHours() >= 18){
			template += `<h3 class="bg-style">Good Evening</h3>`
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
		var template = `<h1 class="bg-style">${time}</h1>`
		if (hours < 12){
			template += `<h3 class="bg-style">Good Morning</h3>`
		} else if (hours >= 12 && hours < 18){
			template += `<h3 class="bg-style">Good Afternoon</h3>`
		} else if (hours >= 18){
			template += `<h3 class="bg-style">Good Evening</h3>`
		}
		document.getElementById('twentyfour-time').innerHTML = template
        
		setTimeout(twentyfourClock, 1000);
    }

    function drawUserName(res){
        if (res.length < 1){
            userName.innerText = 'Add a user to see your name here'
            return
        }
        userName.innerText = `${res[0].name}`
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

    this.showAddUserForm = function showAddUserForm(){
        var userElem = document.getElementById('user-form')
        userElem.classList.remove('hidden')
    }

    this.addUser = function addUser(event){
        event.preventDefault()
        var form = event.target
        timeService.addUser(form, drawUserName)
        document.getElementById('user-form').classList.add('hidden')
        form.reset()
    }

    this.editUser = function editUser(event){
        event.preventDefault()
        var form = event.target
        timeService.changeName(form.name.value, drawUserName)
        document.getElementById('user-form').classList.add('hidden')
        form.reset()
    }

    twelveClock()
    twentyfourClock()
    timeService.getUsers(drawUserName)


}