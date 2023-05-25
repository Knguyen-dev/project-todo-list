// Creates form for making or editing todos
function createTodoForm() {
	const formEl = document.createElement("form");
	formEl.action = "POST";

	// form onsubmit=function for submitting and processing form data
	// Have something in the html to differentiate the form
	formEl.classList.add("modal-form")
	formEl.id = "todo-form";
	formEl.innerHTML = `<fieldset class="input-section">

						<input placeholder="Title: Pay bills" type="text" id="todo-title-field" name="title" maxlength="30" required>						
						<input placeholder="Description: Gas and Electricity" type="text" id="todo-description-field" name="description" maxlength="100" required>	
					
						<fieldset id="todo-due-date-field-section>
							<label for="todo-due-date-field">Due date:</label>
							<input type="date" class="date-input" id="todo-due-date-field" required>	
						</fieldset>

						<fieldset id="todo-priority-field-section>
							<label for="todo-priority-drop-down">Priority:</label>
							<select class="light-blue-select" id="todo-priority-drop-down" name="priority-drop-down" required>
								<option value="">Select Priority</option>
								<option value="Low">Low</option>
								<option value="Medium">Medium</option>
								<option value="High">High</option>
							</select>
						</fieldset>

						<button class="light-blue-btn" type="submit" value="submit" id="form-submit-btn">Submit</button>
					</fieldset>`;
	return formEl;
}

// Creates form for making or editing projects
function createProjectForm() {
	const formEl = document.createElement("form");
	formEl.action = "POST";
	formEl.classList.add("modal-form")
	formEl.id = "project-form";
	formEl.innerHTML = `<fieldset class="input-section">
							<input placeholder="Title: Pay bills" type="text" id="project-title-field" name="title" required>
							<button class="light-blue-btn" type="submit" id="form-submit-btn">Submit</button>
						</fieldset>`;
	return formEl;
}

// Creates form for seeing the details on a todo
function createTodoDetailsSection() {
	const todoDetailsSection = document.createElement("section");
	todoDetailsSection.id = "todo-details-section";
	todoDetailsSection.innerHTML = `<h3 id="todo-details-title-el">Title: Title of said todo</h3>
					<p id="todo-details-description-el">Details: of the todo</p>
					<p id="todo-details-priority-el">Priority: High</p>
					<p id="todo-details-dueDate-el">Due Date: Sample Date</p>`;
	return todoDetailsSection;
}

export {createTodoForm, createProjectForm, createTodoDetailsSection};