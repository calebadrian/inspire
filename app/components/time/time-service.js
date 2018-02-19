function TimeService(){

    var userList = []
    var baseUrl = 'https://inspire-server.herokuapp.com/api/cadrian-users'
    
    function User(formData){
        this.name = formData.name.value
    }

    function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

    this.getUsers = function getUsers(cb) {
		$.get(baseUrl)
            .then(res => { // <-- WHY IS THIS IMPORTANT????
				userList = res
                cb(res)
			})
			.fail(logError)
    }
    
    this.addUser = function addUser(form, cb) {
		// WHAT IS THIS FOR???
		var newUser = new User(form)
		$.ajax({
			url: baseUrl, 
			method: 'POST',
			data: JSON.stringify(newUser),
			contentType: 'application/json',
		})
			.then(res => { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				this.getUsers(cb)
			}) 
			.fail(logError)
    }
    
    this.changeName = function changeName(name, cb){
        var toChange = ''
        var user = userList[0]
        user.name = name
        var id = user.id
        toChange = user

        $.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + id,
			data: JSON.stringify(toChange)
		})
			.then(res => {
                this.getUsers(cb)
                //DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.fail(logError)


    }

}