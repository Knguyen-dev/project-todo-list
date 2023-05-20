// Creates form for making or editing todos
function createTodoForm() {
	const formEl = document.createElement("form");
	formEl.action = "POST";
	formEl.id = "item-form";
	formEl.innerHTML = `<fieldset class="input-section">
						<input placeholder="Title: Pay bills" type="text" id="title-field-form" name="title" required>
						<input placeholder="Description: Gas and Electricity" type="text" id="description-field-form" name="description" required>
						<label for="due-date">Due date: <input type="date" class="date-input" id="item-date-el" required></label>
						<div class="priority-btns-section">
							<h2>Priority: </h2>
							<div class="priority-btns-container">
								<button class="light-blue-btn todo-priority-btn" data-active="true" data-priority-value="Low">Low</button>
								<button class="light-blue-btn todo-priority-btn" data-priority-value="Medium">Medium</button>
								<button class="light-blue-btn todo-priority-btn" data-priority-value="High">High</button>
							</div>
						</div>
						<button class="light-blue-btn" type="submit" id="form-submit-btn">Submit</button>
					</fieldset>`;
	return formEl;
}

// Creates form for making or editing projects
function createProjectForm() {
	const formEl = document.createElement("form");
	formEl.action = "POST";
	formEl.id = "item-form";
	formEl.innerHTML = `<fieldset class="input-section">
							<input placeholder="Title: Pay bills" type="text" id="title-field-form" name="title" required>
							<button class="light-blue-btn" type="submit" id="form-submit-btn">Submit</button>W
						</fieldset>`;
	return formEl;
}

// Creates form for seeing the details on a todo
function createTodoDetailsSection() {
	const todoDetailsSection = document.createElement("section");
	todoDetailsSection.innerHTML = `<h3 id="todo-details-title-el">Title: Title of said todo</h3>
					<p id="todo-detail-project-title-el">Project: Some project</p>
					<p id="todo-details-el">Details: of the todo</p>
					<p id="todo-detail-priority-el">Priority: High</p>
					<p id="todo-detail-dueDate-el">Due Date: Sample Date</p>`;
	return todoDetailsSection;
}

export {createTodoForm, createProjectForm, createTodoDetailsSection};