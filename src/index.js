import "./style.css";
import WebFont from "webfontloader";
import {createTodoForm, createProjectForm, createTodoDetailsSection} from "./createModalContent";
import {createOverlay, createModal, createProjectHeader, createProjectSidebar, createMainContentSection, createProjectFooter} from "./initialPageLoad";
import {Todo, Project} from "./classes";
import { isSevenDaysInFuture, isSameDate, formatDateToUS, sortTodosByDate } from "./utility";
WebFont.load({
	google: {
		families: ["Roboto", "Open Sans"]
	}
});

// Lists containing project instances; probably are going to act as our databases for the meantime
let projectsList = []; // contains all projects; but can also be used to get all todos

// Object that contains the todos for the main three tabs; different since these are tabs rather than project class instances
const mainTabTodos = {
	"Home": [],
	"Today": [],
	"Week": []
}

// Module that keeps important information that mainly helps with forms and keep tracking of information such as 'what tab is the user currently on' or 'what todo are they trying to access'.
const formInfoModule = {
	// Active tab id represents either one of two things; the index of the project that the user has selected in the sidebar
	// or the id of one of the main tabs that the user has selected; which means activeTabID would be a numeric index value
	// or a string such as "Home", "Today", "Week"
	"activeTabID": "Home",
	"activeTodoIndex": "",
	"isEdit": true, // boolean that keeps track of and differentiates whether the user is editing something or adding something new
}

// IFFE: Contains all dom elements for page
const DOMElementsModule = (() => {
	// Section that contains all all page elements
	const pageContentSection = document.getElementById("content")

	// Create elements that are going to be direct children of pageContentSection
	const overlayEl = createOverlay();
	overlayEl.classList.add("content-hidden");
	pageContentSection.appendChild(overlayEl);

	const modalEl = createModal();
	modalEl.classList.add("content-hidden");
	pageContentSection.appendChild(modalEl);

	const projectContainer = document.createElement("div");
	projectContainer.classList.add("project-container");
	pageContentSection.appendChild(projectContainer);

	// Get the main content of the modal and add the 3 content types to it
	const modalMainContentSection = modalEl.querySelector(".modal-main-content");

	// Create the content for the modal and hide it all in that modal
	const todoForm = createTodoForm();
	todoForm.classList.add("content-hidden");
	modalMainContentSection.appendChild(todoForm);

	const projectForm = createProjectForm();
	projectForm.classList.add("content-hidden");
	modalMainContentSection.appendChild(projectForm);

	const todoDetailsSection = createTodoDetailsSection();
	todoDetailsSection.classList.add("content-hidden");
	modalMainContentSection.appendChild(todoDetailsSection);

	// Create elements that are going to be placed inside the projectContainer 
	// NOTE: naming "project" here just means another way to think of the main container for the app/project/website,
	//  nothing really to do with the "project" class instance 
	const projectHeader = createProjectHeader();
	projectContainer.appendChild(projectHeader);
	const projectSidebar = createProjectSidebar();
	projectContainer.appendChild(projectSidebar);
	const projectMainContentSection = createMainContentSection();
	projectContainer.appendChild(projectMainContentSection);
	const projectFooter = createProjectFooter();
	projectContainer.appendChild(projectFooter);

	// Now even listener for opening project form and closing modal
	const createProjectBtn = document.getElementById("create-project-btn");
	createProjectBtn.addEventListener("click", e => {
		formInfoModule.isEdit = false;
		displayProjectForm(e);
	})

	// Close modal for closing the modal
	const closeModalBtn = document.getElementById("close-modal-btn");
	closeModalBtn.addEventListener("click", closeModal);

	// Add an event listener for the project form
	projectForm.addEventListener("submit", e => {
		// Prevent default form behavior and get all input values from your desired form
		e.preventDefault(); 
		const inputTitle = document.getElementById("project-title-field").value;
		// Then depending on boolean, add or edit the project
		if (formInfoModule.isEdit) {
			editProject(inputTitle);			
		} else {
			addProject(inputTitle);
		}
		// Update the sidebar and maincontent 
		renderPage();
		// Now close the modal once everything is done; allowing the user to access page again after everything is done;
		closeModal();
	})

	todoForm.addEventListener("submit", e => {
		// Prevent default form behavior and get the input values from the todo form
		e.preventDefault();
		const inputTitle = document.getElementById("todo-title-field").value;
		const inputDescription = document.getElementById("todo-description-field").value;
		const inputDueDate = document.getElementById("todo-due-date-field").value;
		const inputPriority = document.getElementById("todo-priority-drop-down").value;
		// Then create logic for editing or creating a todo for a certain project
		if (formInfoModule.isEdit) {
			editTodo(inputTitle, inputDescription, inputDueDate, inputPriority);
		} else {
			addTodo(inputTitle, inputDescription, inputDueDate, inputPriority);
		}
		renderPage();
		closeModal();
	})

	return {
		pageContentSection, 
		overlayEl, 
		modalEl,
		projectContainer, 
		todoForm,
		projectForm,
		todoDetailsSection,
		projectHeader, 
		projectSidebar, 
		projectMainContentSection, 
		projectFooter}
})();

/*
+ Rendering and visual side
*/

// Function that displays a project form when user presses create project button
// Will look at the data-form-action of the button that activates it to see if we're adding or editing a project
function displayProjectForm(e) {
	// Clear all input values for the form to make it a blank slate
	DOMElementsModule.projectForm.reset();

	// Show the blur overlay, modal, and the project form 
	DOMElementsModule.overlayEl.classList.remove("content-hidden");
	DOMElementsModule.modalEl.classList.remove("content-hidden");
	DOMElementsModule.projectForm.classList.remove("content-hidden");

	// Get text element for modal's header
	const modalHeaderTitle = document.getElementById("modal-header-title-el");
	// Select the input elements of the project form;
	const inputTitleEl = document.getElementById("project-title-field");

	// Depending on whether they're editing a project or adding a new one change the title and input elemenets
	if (formInfoModule.isEdit) {
		// Editing a project, so find the selected project the user wants by looking at the current tab they're on since they're on a project tab
		const currentProject = projectsList[formInfoModule.activeTabID];
		modalHeaderTitle.textContent = `Edit Project: '${currentProject.title.getTitle()}'`;
		inputTitleEl.value = `${currentProject.title.getTitle()}`;
	} else {
		modalHeaderTitle.textContent = "Add a new project!";
	}
}

// Function that displays the todo form for users to create/edit todos that were assigned to a project
function displayTodoForm(e) {
	// Reset the todo form
	DOMElementsModule.todoForm.reset();

	// Show the blur overlay, modal, and the todo form
	DOMElementsModule.overlayEl.classList.remove("content-hidden");
	DOMElementsModule.modalEl.classList.remove("content-hidden");
	DOMElementsModule.todoForm.classList.remove("content-hidden");
	
	// Get the title of the modal
	const modalHeaderTitle = document.getElementById("modal-header-title-el");

	// Get the input elements 
	const inputTitleEl = document.getElementById("todo-title-field");
	const inputDescriptionEl = document.getElementById("todo-description-field");
	const dueDateEl = document.getElementById("todo-due-date-field");
	const priorityDropDown = document.getElementById("todo-priority-drop-down");

	// Update the state of the todo form to indicate whether the user is creating a new todo or editing an existing one
	formInfoModule.activeTodoIndex = e.currentTarget.parentElement.parentElement.dataset.todoIndex;

	// Current project that the todo is from
	const currentProject = projectsList[formInfoModule.activeTabID]; 

	// Modify header and input fields depending on whether the user is adding or editing a todo
	if (formInfoModule.isEdit) {
		const currentTodo = currentProject.projectTodos[formInfoModule.activeTodoIndex];
		modalHeaderTitle.textContent = `Edit todo '${currentTodo.title.getTitle()}' for project'${currentProject.title.getTitle()}'`;
		// Fill the fields with information about the current todo being edited
		inputTitleEl.value = `${currentTodo.title.getTitle()}`;
		inputDescriptionEl.value = `${currentTodo.description.getDescription()}`;
		dueDateEl.value = `${currentTodo.dueDate.toISOString().slice(0, 10)}`; // formatting the date object like so in order for html date input to accept its value
		priorityDropDown.value = `${currentTodo.priority.getPriority()}`;
	} else {
		modalHeaderTitle.textContent = `Add a new todo for project '${currentProject.title.getTitle()}'`;
	}
}

// Displays modal that shows info about a todo
function displayTodoDetails(e) {
	// Show the blur, overlay, and section for showing todo information
	DOMElementsModule.overlayEl.classList.remove("content-hidden");
	DOMElementsModule.modalEl.classList.remove("content-hidden");
	DOMElementsModule.todoDetailsSection.classList.remove("content-hidden");

	// Get the title of the modal and the input elements 
	const modalHeaderTitle = document.getElementById("modal-header-title-el");
	const todoTitleEl = document.getElementById("todo-details-title-el");
	const todoDescriptionEl = document.getElementById("todo-details-description-el");
	const todoPriorityEl = document.getElementById("todo-details-priority-el");
	const todoDueDateEl = document.getElementById("todo-details-dueDate-el");

	// Now get the index of the todo, it could be in one of the main tabs or a project tab
	const todoIndex = e.currentTarget.parentElement.parentElement.dataset.todoIndex; 
	let currentTodo;
	
	// See if the activeTabID is a string representing "Home, Week, or Today" rather than the index of a project in projectsList
	if (typeof formInfoModule.activeTabID === "string") {
		currentTodo = mainTabTodos[formInfoModule.activeTabID][todoIndex];
	} else {
		// Else since it's not a maintab it must be a project tab, which means we can't access a project index
		currentTodo = projectsList[formInfoModule.activeTabID].projectTodos[todoIndex];
	}
	// Change title of modal header and display information of the todo
	modalHeaderTitle.textContent = `Details for todo '${currentTodo.title.getTitle()}'`;
	todoTitleEl.textContent = `Title: ${currentTodo.title.getTitle()}`;
	todoDescriptionEl.textContent = `Description: ${currentTodo.description.getDescription()}`;
	todoPriorityEl.textContent = `Priority: ${currentTodo.priority.getPriority()}`;
	todoDueDateEl.textContent = `Due Date: ${currentTodo.dueDate.toISOString().slice(0, 10)}`;
}

// Hides modal, overlay, and then all of the other content for the modal
function closeModal() {	
	DOMElementsModule.modalEl.classList.add("content-hidden"); // Now hide the modal and blur overlay
	DOMElementsModule.overlayEl.classList.add("content-hidden");
	DOMElementsModule.projectForm.classList.add("content-hidden");
	DOMElementsModule.todoForm.classList.add("content-hidden");
	DOMElementsModule.todoDetailsSection.classList.add("content-hidden");	
}

// Makes tabs on the sidebar interactable; called when the user creates a new project tab in the sidebar too.
function updateSidebarTabs() {
	// Get section in the sidebar that contains user projects tabs
	const projectsTabSection = document.querySelector(".projects-tab-section");
	
	// Update the html in the project section of the sidebar
	projectsTabSection.innerHTML = projectsList.map((project, index) => {
		// Get the title and amount of todo instance that are complete.
		const projectTitle = project.title.getTitle();
		
		// User may have submitted a todo or project form, which meant they were previously project-tab; ensure data-active stays on that sidebar
		// Essentially, if user was on a project tab, we make sure make sure data-active stays on that tab; helping us render that tab later on
		if (formInfoModule.activeTabID === index) {
			return `<li class="sidebar-tab-item" data-tabtype="projectTab" data-active='true' data-projectid=${index}><span class="sidebar-tab-title">${projectTitle}</span><span class="todo-count-el"></span></li>`;
		} else {
			return `<li class="sidebar-tab-item" data-tabtype="projectTab" data-projectid=${index}><span class="sidebar-tab-title">${projectTitle}</span><span class="todo-count-el"></span></li>`;
		}
	}).join("");

	// Since we are starting to work with the todos, we should first sort the todos by date
	for (let i = 0; i < projectsList.length; i++) {
		projectsList[i].projectTodos = sortTodosByDate(projectsList[i].projectTodos);
	}

	// first clear the todos already in the tabs
	for (let key in mainTabTodos) {
		mainTabTodos[key] = [];
	}

	// Update amount of todos associated with each of the main tabs
	const currentDate = new Date(); // create current date object to compare dates of todos
	for (let i = 0; i < projectsList.length; i++) {
		const projectTodos = projectsList[i].projectTodos;
		for (let j = 0; j < projectTodos.length; j++) {
			// Put that todo in the home tab; since that's the tab to show all todos
			mainTabTodos["Home"].push(projectTodos[j]);
			// If it's the same date, put that todo in the "Today" tab
			if (isSameDate(currentDate, projectTodos[j].dueDate)) {
				mainTabTodos["Today"].push(projectTodos[j]);
			} else if (isSevenDaysInFuture(currentDate, projectTodos[j].dueDate)) {
				mainTabTodos["Week"].push(projectTodos[j]);
			}			
		}
	}

	// Now lets update the main tabs, maybe duplicate event listener for this? 
	const mainTabs = document.querySelectorAll("li[data-tabtype='mainTab']");
	// Update the main tabs to correctly show the amount of todos available;
	mainTabs.forEach(tab => {
		// Check if the activeTabID matches one of the maintabs and add data-active if true
		if (tab.dataset.tabid == formInfoModule.activeTabID) {
			tab.setAttribute("data-active", "true");
		}

	})

	// Now that sidebar tabs are all updated, make sure when they're clicked it gives them data-active attribute, and removes
	// that attribute from all other non-clicked tabs.
	const sidebarTabs = DOMElementsModule.projectSidebar.querySelectorAll("li.sidebar-tab-item");
	sidebarTabs.forEach(tab => {

		// Get the todo count element and create array containing the completed todos for the tab
		const todoCountEl = tab.querySelector(".todo-count-el");
		let incompleteTodos = [];
		let todos = [];

		// Get the todos depending on whether the user is on a main or a project tab
		// Then call a function to get an array of the incomplete todos; then assign the count to the length of that array 
		if (tab.dataset.tabtype === "mainTab") {
			todos = mainTabTodos[tab.dataset.tabid];
		} else {
			todos = projectsList[tab.dataset.projectid].projectTodos;
		}
		incompleteTodos = getIncompleteTodos(todos);

		todoCountEl.textContent = incompleteTodos.length;
		tab.addEventListener("click", handleSidebarTabClick);
	});
};

// Renders main content section for a the tab that the user clicked on
// Maybe change this so that it gets the tab with the data-active="true" value 
function renderMainContent() {
	const activeTab = document.querySelector("li.sidebar-tab-item[data-active='true']");
	const tabType = activeTab.dataset.tabtype;
	let todos = []; // should be a list of todo class instances

	// Get the header, and then the list element for containing your todo list
	const mainContentHeader = document.getElementById("main-content-header");
	const todoListContainer = document.getElementById("todo-list-container");
	const emptyTabSection = document.getElementById("empty-tab-section");

	// This case means we are getting todos for one of the main tabs and changing the header
	if (tabType == "mainTab") {
		todos = mainTabTodos[activeTab.dataset.tabid];

		// Create and style header for main tab
		mainContentHeader.innerHTML = `<h1 id="tab-title-el">${activeTab.dataset.tabid}</h1>`;
		mainContentHeader.classList.add("main-content-header-main-tab");
		mainContentHeader.classList.remove("main-content-header-project-tab");

		// If it's one of the main tabs user is only able to view the details of the todo
		todoListContainer.innerHTML = todos.map((todo, index) => {
		return `<li class="todo-item" data-todo-complete="${todo.isComplete.getCompletion() ? "true" : "false"}" data-todo-index=${index}>
						<span class="todo-title-el">${todo.title.getTitle()}</span>
						<span class="todo-due-date-el">Due: ${formatDateToUS(todo.dueDate)}</span>
						<div class="todo-btns">
							<button class="todo-btn todo-details-btn gray-btn" class="gray-btn">Details</button>
						</div>
					</li>`;
		}).join("");
	} else {
		// Else we are generating todos for a project tab
		const currentProject = projectsList[formInfoModule.activeTabID];
		todos = currentProject.projectTodos;

		// Create and style header for project tab
		mainContentHeader.innerHTML = `<h1 id="tab-title-el">${currentProject.title.getTitle()}</h1>
					<div class="project-btns-container">
						<button id="add-todo-btn" class="green-btn">Add task</button>
						<button id="edit-project-btn" class="gray-btn">Edit Project</button>
						<button id="delete-project-btn" class="red-btn">Delete Project</button>
					</div>`;
		// Add unique header styling for the header when on a project tab
		mainContentHeader.classList.remove("main-content-header-main-tab");		
		mainContentHeader.classList.add("main-content-header-project-tab");		
		
		// Set up event listeners for buttons in the header.
		const addTodoBtn = document.getElementById("add-todo-btn");
		addTodoBtn.addEventListener("click", e => {
			formInfoModule.isEdit = false;
			displayTodoForm(e);
		});

		// Create button for editing projects; the projectid will be put on the button to keep track of the project being edited
		const editProjectBtn = document.getElementById("edit-project-btn");
		editProjectBtn.addEventListener("click", e => {
			formInfoModule.isEdit = true;
			displayProjectForm(e);
		});

		// Create button for deleting projects
		// NOTE: For adding and editing we have renderPage() at the end of the form objects they're associated with, while deleting projects/todos doesn't need a form, so we renderPage() after the respective delete functions are ran
		const deleteProjectBtn = document.getElementById("delete-project-btn");
		deleteProjectBtn.addEventListener("click", () => {
			deleteProject();
			renderPage();
		});

		// Since they are in a project tab, user will be able to edit the todos as well
		todoListContainer.innerHTML = todos.map((todo, index) => {
		return `<li class="todo-item" data-todo-complete="${todo.isComplete.getCompletion() ? "true" : "false"}" data-todo-index=${index}>
					<span class="todo-title-el">${todo.title.getTitle()}</span>
					<span class="todo-due-date-el">Due: ${formatDateToUS(todo.dueDate)}</span>
					<div class="todo-btns">
						<button class="todo-btn toggle-todo-btn green-btn">${todo.isComplete.getCompletion() ? "Mark as incomplete" : "Mark as complete"}</button>
						<button class="todo-btn todo-details-btn gray-btn">Details</button>
						<button class="todo-btn edit-todo-btn gray-btn">Edit</button>
						<button class="todo-btn delete-todo-btn red-btn">Delete</button>
					</div>
				</li>`;
		}).join("");
	}

	// Select all todo btns that were created, we don't know which ones were created note, and create event listeners depending on their classes
	const todoBtns = document.querySelectorAll("Button.todo-btn");
		todoBtns.forEach(btn => {
			if (btn.classList.contains("toggle-todo-btn")) {
				btn.addEventListener("click", e => {
					toggleTodoCompletion(e);
					renderPage();
				});
			} else if (btn.classList.contains("todo-details-btn")) {
				btn.addEventListener("click", displayTodoDetails);
			} else if (btn.classList.contains("edit-todo-btn")) {
				btn.addEventListener("click", e => {
					formInfoModule.isEdit = true;
					displayTodoForm(e);					
				});
			} else if (btn.classList.contains("delete-todo-btn")) {
				btn.addEventListener("click", e => {
					deleteTodo(e);
					renderPage();
				});
			}
		})

	// If there are no todos then, there isn't any content or elements in the todoListContainer
	// In that case we will hide that container to have space to show a message telling the users to create a todo/project to get started 
	if (todos.length == 0) {
		// Hide the todoListContainer so that there can be space for the empty tab section; and show the emptyTabSection
		todoListContainer.classList.add("content-hidden");
		emptyTabSection.classList.remove("content-hidden");
	} else {
		// Else there are todos so show the todoListContainer and hide the empty tab section;
		todoListContainer.classList.remove("content-hidden");
		emptyTabSection.classList.add("content-hidden");
	}
}

// Calls the function to update sidebar and main content since those are always used in tandem, and also any other functions that involve visually changing the appearance of the application; really just "updates" the page
function renderPage() {
	updateSidebarTabs();
	renderMainContent();
}


// Application logic side


// Adds event listener to a tab so user and application know which tab the user is currently on
function handleSidebarTabClick(e) {
	const clickedTab = e.currentTarget;
	const sidebarTabs = document.querySelectorAll("li.sidebar-tab-item");
	// Give data active to the clicked tab and remove it from other tabs
	for (let i = 0; i < sidebarTabs.length; i++) {
		if (sidebarTabs[i] == clickedTab) {
			sidebarTabs[i].setAttribute("data-active", "true");
		} else {
			sidebarTabs[i].removeAttribute("data-active");
		}
	}
	// If it's a main tab being clicked set the active tab id to the be the id of the maintab
	if (clickedTab.dataset.tabtype == "mainTab") {
		formInfoModule.activeTabID = clickedTab.dataset.tabid;
	} else {
		// Else If the clicked tab is a project tab then update the activeTabID to be the projectid (index) of that project in projectsList
		formInfoModule.activeTabID = parseInt(clickedTab.dataset.projectid); // return as an integer, so that it's easier to work with indices
	}
	// Make it so that clicking on the tab would call the function to render the content
	renderMainContent();
}

// NOTE: Since all of these functions involve modifying the info for projects or todos, we want to save changes to local storage to save and persist the changes

// Marks and unmarks a todo's completion 
function toggleTodoCompletion(e) {
	// Get the todoElement, which contains our todo's index in its specific project
	const todoElement = e.currentTarget.parentElement.parentElement;
	const currentTodo = projectsList[formInfoModule.activeTabID].projectTodos[todoElement.dataset.todoIndex];
	// If it's currently true, then that's means the user wanted to set the value to false
	if (currentTodo.isComplete.getCompletion()) {
		// Access the todo in that project and change it's completion value to the opposite value
		projectsList[formInfoModule.activeTabID].projectTodos[todoElement.dataset.todoIndex].isComplete.setCompletion(false);
	} else {		
		projectsList[formInfoModule.activeTabID].projectTodos[todoElement.dataset.todoIndex].isComplete.setCompletion(true);
	}
	localStorage.setItem("projects", JSON.stringify(projectsList));
}

// Creates a new project and adds it to the projectsList array
function addProject(projectTitle) {
	const newProject = new Project(projectTitle);
	projectsList.push(newProject);
	localStorage.setItem("projects", JSON.stringify(projectsList));
}

// Finds existing project and edits its details within projectsList;
function editProject(newProjectTitle) {
	// Find the position of the project and modify it	
	projectsList[formInfoModule.activeTabID].title.setTitle(newProjectTitle);
	localStorage.setItem("projects", JSON.stringify(projectsList));
}

// Deletes a project and all of its information (including the todos that it contains)
function deleteProject() {
	// Removes the project that's active on the sidebar
	projectsList.splice(formInfoModule.activeTabID, 1);
	// When user deletes a project, we want to take them back to the home screen; so set activeTabID to "Home"
	// since that's the data-tabid for the home tab; then when we render page, the Home tab will get data-active='true'
	formInfoModule.activeTabID = "Home";
	localStorage.setItem("projects", JSON.stringify(projectsList));
}

// Creating a todo and adding it to a project class instance's array of todos
function addTodo(todoTitle, todoDescription, todoDueDate, todoPriority) {
	const newTodo = new Todo(todoTitle, todoDescription, todoDueDate, todoPriority);
	// First add this todo to the corresponding project
	projectsList[formInfoModule.activeTabID].projectTodos.push(newTodo);
	localStorage.setItem("projects", JSON.stringify(projectsList));
}

// Edit a todo
function editTodo(todoTitle, todoDescription, todoDueDate, todoPriority) {
	// Create your newly edited todo
	const newTodo = new Todo(todoTitle, todoDescription, todoDueDate, todoPriority);
	// Access the position of the todo the user wants to edit and replace that position
	projectsList[formInfoModule.activeTabID].projectTodos[formInfoModule.activeTodoIndex] = newTodo;
	localStorage.setItem("projects", JSON.stringify(projectsList));
}

// Deletes a todo
function deleteTodo(e) {
	// Since user is deleting, they must be on a project tab
	const todoElement = e.currentTarget.parentElement.parentElement;
	// Access the current or active project class instance. Then access its array of todos
	projectsList[formInfoModule.activeTabID].projectTodos.splice(todoElement.dataset.todoIndex, 1);
	localStorage.setItem("projects", JSON.stringify(projectsList));
}

// Returns an array of incomplete todos
function getIncompleteTodos(todos) {
	const incompleteTodos = todos.filter(todo => {
		// If it's incomplete then return it
		if (todo.isComplete.getCompletion() == false) {
			return todo;
		}		
	});
	return incompleteTodos;
}

// Function will recreate project instances from local storage; local storage doesn't keep the original class instances of an object
function getProjectsFromLocalStorage() {
	let localStorageProjects = JSON.parse(localStorage.getItem("projects"));
	localStorageProjects = localStorageProjects.map(projectObj => {
		// Get the string value title of the project object literal
		const projectTitle = projectObj.title.title; 
		
		// Getthe array of object literals representing the todos of that project;
		const projectTodos = projectObj.projectTodos; 
		
		// Reconstruct a project class instance with that same project title
		const project = new Project(projectTitle); 
		
		// Iterate through the todo objects
		for (let j = 0; j < projectTodos.length; j++) {
			// Get the values of the todo;
			// NOTE: todoTitle, todoDescription, todoDueDate, and todoPriority are all string values rather than their object values remember
			// todoIsComplete is a boolean
			const todoTitle = projectTodos[j].title.title; 
			const todoDescription = projectTodos[j].description.description; 
			const todoDueDate = projectTodos[j].dueDate; 
			const todoPriority = projectTodos[j].priority.priority; 
			const todoIsComplete = projectTodos[j].isComplete.isComplete; 

			// Reconstruct the same todo with those values
			const todo = new Todo(todoTitle, todoDescription, todoDueDate, todoPriority);
			todo.isComplete.setCompletion(todoIsComplete);

			// Push the now fully reconstructed todo into the project class instance 
			project.projectTodos.push(todo);
		}
		// Return the completed project so it's filled by the map function
		return project;
	})
	// Return the list of project class instances
	return localStorageProjects;
}

window.addEventListener("DOMContentLoaded", () => {
	// Get projects from local storage if some were already created
	projectsList = getProjectsFromLocalStorage();
	renderPage();
})