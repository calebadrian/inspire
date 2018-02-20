function TimeService(){

	var userList = []
	var user = {
		name: "Caleb"
	}

	this.editUser = function editUser(name){
		user.name = name
	}

	this.getUser = function getUser(){
		return JSON.parse(JSON.stringify(user))
	}

}