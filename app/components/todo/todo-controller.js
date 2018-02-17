function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()
	var todoElem = document.getElementById('todo-list')
	var taskElem = document.getElementById('task-form')

	// Use this getTodos function as your callback for all other edits
	function getTodos(){
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}

	function draw(todos) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var template = `<h5>${todos.length} To Do</h5>`
		for (let i = 0; i < todos.length; i++) {
			const todo = todos[i];
			template += `
			<div class="d-inline-flex justify-content-between">
			<div class="form-check">
				<input class="form-check-input" type="checkbox" ${todo.completed ? ('checked') : ''} onclick="app.controllers.todoCtrl.toggleTodoStatus('${todo.id}')">
			</div>
			<h6>${todo.name}</h6>
			<i class="far fa-trash-alt remove-icon" onclick="app.controllers.todoCtrl.removeTodo('${todo.id}')"></i>
			</div>`
		}
		template += `<button class="btn-info" onclick="app.controllers.todoCtrl.showTaskForm()">New Todo</button>`
		todoElem.innerHTML = template
		//DONT FORGET TO LOOP
	}

	this.addTodoFromForm = function addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(form, draw)
		form.reset()
		taskElem.classList.add('hidden')
		                         //^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, draw)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	this.showTaskForm = function showTaskForm(){
		taskElem.classList.remove('hidden')
	}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	getTodos()
}
