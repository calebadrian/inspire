function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/cadrian'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	function ToDo(formData){
		this.name = formData.name.value
		this.completed = false
	}

	this.getTodos = function getTodos(cb) {
		$.get(baseUrl)
			.then(res => { // <-- WHY IS THIS IMPORTANT????
				todoList = res
				cb(res)
			})
			.fail(logError)
	}

	this.addTodo = function addTodo(form, cb) {
		// WHAT IS THIS FOR???
		var toDo = new ToDo(form)
		$.ajax({
			url: baseUrl, 
			method: 'POST',
			data: JSON.stringify(toDo),
			contentType: 'application/json',
		})
			.then(res => { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				this.getTodos(cb)
			}) 
			.fail(logError)
	}

	this.toggleTodoStatus = function toggleTodoStatus(todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		var toChange = ''
		for (let i = 0; i < todoList.length; i++) {
			var todo = todoList[i];
			if (todo.id == todoId){
				todo.completed = !todo.completed
				toChange = todo
				break
			}
		}
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(toChange)
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.fail(logError)
	}

	this.removeTodo = function removeTodo(id, cb) {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
		$.ajax({
			url: baseUrl + '/' + id,
			method: 'DELETE'
		})
			.then(res => {
				this.getTodos(cb)
			})
	}

}
