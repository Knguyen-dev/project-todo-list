import "./style.css";
import WebFont from "webfontloader";
import {createTodoForm, createProjectForm, createTodoDetailsSection} from "./createModalContent";
import {createOverlay, createModal, createProjectHeader, createProjectSidebar, createMainContentSection, createProjectFooter} from "./initialPageLoad";
import {Todo, Project} from "./classes";
import { isSevenDaysInFuture, isSameDate } from "./utility";


WebFont.load({
	google: {
		families: ["Roboto", "Open Sans"]
	}
});

// Lists containing project instances; probably are going to act as our 
// databases for the meantime
let projectsList = []; // contains all projects; but can also be used to get all todos

// Object that contains the todos for the main three tabs; different since these are tabs rather than project class instances
const mainTabTodos = {
	"Home": [],
	"Today": [],
	"Week": []
}

// variables that keep track of whether the user is adding or creating a new instance of project or todo
// values will be "add-project" or "add-todo" or "edit-project" or "edit-todo";
const formInfoModule = {
	"projectFormState":  "",
	"todoFormState":  "",
	// Active tab id represents either one of two things; the index of the project that the user has selected in the sidebar
	// or the id of one of the main tabs that the user has selected; which means activeTabID would be a numeric index value
	// or a string such as "Home", "Today", "Week"
	"activeTabID": "Home",
	"activeTodoIndex": "",
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
	createProjectBtn.addEventListener("click", displayProjectForm);
	const closeModalBtn = document.getElementById("close-modal-btn");
	closeModalBtn.addEventListener("click", closeModal);

	// Add an event listener for the project form
	projectForm.addEventListener("submit", e => {
		// Prevent default form behavior and get all input values from your desired form
		e.preventDefault(); 
		const inputTitle = document.getElementById("project-title-field").value;

		// Then depending on the state of the form either the function to add or edit a project
		if (formInfoModule.projectFormState == "add-project") {
			addProject(inputTitle);
		} else {
			// formInfoModule.projectFormState == "edit-project" in this case
			editProject(inputTitle);
		}
		// Update the sidebar since a project is being added/edited, and then render main content since the header may change
		updateSidebarTabs();
		// If the user was on a project tab while opening up the form, then we make sure to continue rendering the main content of that tab.
		// Essentially the user changed a project, which change the information on main content, so render the new main content
		renderMainContent();
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
		if (formInfoModule.todoFormState == "add-todo") {
			addTodo(inputTitle, inputDescription, inputDueDate, inputPriority);
		} else {
			editTodo(inputTitle, inputDescription, inputDueDate, inputPriority);
		}
		updateSidebarTabs();
		renderMainContent();
		
		/*
		+ BOOK MARK: Check whether todo form works with adding, and editing stuff; looks like its having trouble with the 
		date objects, so I'm guessing we aren't getting proper date objects in your form part
		 */
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
	
	// See if we're editing or adding a project, and update the value in the formInfoModule to keep track of whether 
	// the user is trying to add or edit in the project form.
	formInfoModule.projectFormState = e.currentTarget.dataset.formAction;

	// Depending on whether they're editing a project or adding a new one change the title and input elemenets
	if (formInfoModule.projectFormState == "add-project") {
		modalHeaderTitle.textContent = "Add a new project!";
	} else {
		// Editing a project, so find the selected project the user wants by looking at the current tab they're on since they're on a project tab
		const currentProject = projectsList[formInfoModule.activeTabID];
		modalHeaderTitle.textContent = `Edit Project: '${currentProject.title.getTitle()}'`;
		inputTitleEl.value = `${currentProject.title.getTitle()}`;
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
	formInfoModule.todoFormState = e.currentTarget.dataset.formAction;
	formInfoModule.activeTodoIndex = e.currentTarget.parentElement.parentElement.dataset.todoIndex;

	// Current project that the todo is from
	const currentProject = projectsList[formInfoModule.activeTabID];
	// Modify header and input fields depending on whether the user is adding or editing a todo
	if (formInfoModule.todoFormState == "add-todo") {
		modalHeaderTitle.textContent = `Add a new todo for project '${currentProject.title.getTitle()}'`;
	} else {
		const currentTodo = currentProject.getProjectTodos()[formInfoModule.activeTodoIndex];
		modalHeaderTitle.textContent = `Edit todo '${currentTodo.title.getTitle()}' for project'${currentProject.title.getTitle()}'`;
		// Fill the fields with information about the current todo being edited
		inputTitleEl.value = `${currentTodo.title.getTitle()}`;
		inputDescriptionEl.value = `${currentTodo.description.getDescription()}`;
		dueDateEl.value = `${currentTodo.dueDate.toISOString().slice(0, 10)}`; // format the date object like so in order for html date input to accept its value
		priorityDropDown.value = `${currentTodo.priority.getPriority()}`;
	}
}

// BOOK MARK: Test and finish the implementation of editing a todo, then d


// Displays modal that shows info about a todo
function displayTodoDetails(e) {
	// Show the blur, overlay, and section for showing todo information
	DOMElementsModule.overlayEl.classList.remove("content-hidden");
	DOMElementsModule.modalEl.classList.remove("content-hidden");
	DOMElementsModule.todoDetailsSection.classList.remove("content-hidden");

	// Get the title of the modal and chnage the title
	const modalHeaderTitle = document.getElementById("modal-header-title-el");

	const todoTitleEl = document.getElementById("todo-details-title-el");
	const todoDescriptionEl = document.getElementById("todo-details-description-el");
	const todoPriorityEl = document.getElementById("todo-details-priority-el");
	const todoDueDateEl = document.getElementById("todo-details-dueDate-el");

	// Now get the index of the todo, it could be in one of the main tabs or a project tab
	const todoIndex = e.currentTarget.parentElement.parentElement.dataset.todoIndex; 
	let currentTodo;
	// Let's handle it if user is on a main tab
	
	// See if the activeTabID is a string representing "Home, Week, or Today" rather than the index of a project in projectsList
	if (typeof formInfoModule.activeTabID === "string") {
		currentTodo = mainTabTodos[formInfoModule.activeTabID][todoIndex];
	} else {
		// Else since it's not a maintab it must be a project tab, which means we can't access a project index
		currentTodo = projectsList[formInfoModule.activeTabID].projectTodos[todoIndex];
	}

	console.log(currentTodo);

	
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
		const projectTitle = project.title.getTitle();
		const projectTodoCount = project.getProjectTodos().length;
		// User may have submitted a todo or project form, which meant they were previously project-tab; ensure 
		// data-active stays on that sidebar  
		if (formInfoModule.activeTabID === index) {
			return `<li class="sidebar-tab-item" data-tabtype="projectTab" data-active='true' data-projectid=${index}><span class="sidebar-tab-title">${projectTitle}</span><span class="todo-count-el">${projectTodoCount}</span></li>`;
		} else {
			return `<li class="sidebar-tab-item" data-tabtype="projectTab" data-projectid=${index}><span class="sidebar-tab-title">${projectTitle}</span><span class="todo-count-el">${projectTodoCount}</span></li>`;
		}
	}).join("");


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
		// Check if the activeTabID matches one of the maintabs, if ; right now this only happens when the user deletes a project
		if (tab.dataset.tabid == formInfoModule.activeTabID) {
			tab.setAttribute("data-active", "true");
		}
		const todoCountEl = tab.querySelector(".todo-count-el")
		todoCountEl.textContent = mainTabTodos[tab.dataset.tabid].length;
	})

	// Now that sidebar tabs are all updated, make sure when they're clicked it gives them data-active attribute, and removes
	// that attribute from all other non-clicked tabs.
	const sidebarTabs = DOMElementsModule.projectSidebar.querySelectorAll("li.sidebar-tab-item");
	sidebarTabs.forEach(tab => {
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

	// This case means we are getting todos for one of the main tabs and changing the header
	if (tabType == "mainTab") {
		todos = mainTabTodos[activeTab.dataset.tabid];

		// Create and style header for main tab
		mainContentHeader.innerHTML = `<h1 id="tab-title-el">${activeTab.dataset.tabid}</h1>`;
		mainContentHeader.classList.add("main-content-header-main-tab");
		mainContentHeader.classList.remove("main-content-header-project-tab");

		// If it's one of the main tabs user is only able to view the details of the todo
		todoListContainer.innerHTML = todos.map((todo, index) => {
		return `<li class="todo-item" data-todo-complete="false" data-todo-index=${index}>
						<span class="todo-title-el">${todo.title.getTitle()}</span>
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
						<button data-form-action="add-todo" id="add-todo-btn" class="green-btn">Add task</button>
						<button data-form-action="edit-project" id="edit-project-btn" class="gray-btn">Edit Project</button>
						<button id="delete-project-btn" class="red-btn">Delete Project</button>
					</div>`;
		// Add unique header styling for the header when on a project tab
		mainContentHeader.classList.remove("main-content-header-main-tab");		
		mainContentHeader.classList.add("main-content-header-project-tab");		
		
		// Set up event listeners for buttons in the header.
		const addTodoBtn = document.getElementById("add-todo-btn");
		addTodoBtn.addEventListener("click", displayTodoForm);

		// Create button for editing projects; the projectid will be put on the button to keep track of the project being edited
		const editProjectBtn = document.getElementById("edit-project-btn");
		editProjectBtn.addEventListener("click", displayProjectForm);

		const deleteProjectBtn = document.getElementById("delete-project-btn");
		deleteProjectBtn.addEventListener("click", deleteProject);

		// Since they are in a project tab, user will be able to edit the todos as well
		todoListContainer.innerHTML = todos.map((todo, index) => {
		return `<li class="todo-item" data-todo-complete="${todo.isComplete.getCompletion() ? "true" : "false"}" data-todo-index=${index}>
					<span class="todo-title-el">${todo.title.getTitle()}</span>
					<div class="todo-btns">
						<button class="todo-btn toggle-todo-btn green-btn">Mark as Complete</button>
						<button class="todo-btn todo-details-btn gray-btn">Details</button>
						<button data-form-action="edit-todo" class="todo-btn edit-todo-btn gray-btn">Edit</button>
						<button class="todo-btn delete-todo-btn red-btn">Delete</button>
					</div>
				</li>`;
		}).join("");
	}

	// Select all todo btns that were created, we don't know which ones were created note, and create event listeners depending on their classes
	const todoBtns = document.querySelectorAll("Button.todo-btn");
		todoBtns.forEach(btn => {
			if (btn.classList.contains("toggle-todo-btn")) {
				btn.addEventListener("click", toggleTodoCompletion);
			} else if (btn.classList.contains("todo-details-btn")) {
				btn.addEventListener("click", displayTodoDetails);
			} else if (btn.classList.contains("edit-todo-btn")) {
				btn.addEventListener("click", displayTodoForm);
			} else if (btn.classList.contains("delete-todo-btn")) {
				btn.addEventListener("click", deleteTodo);
			}
		})
	
	// We create an event listener for todo details on the outside because it's always going to be created
	// const todoDetailsBtn = document.querySelectorAll(".todo-details-btn")
	// NOTE: Should probably sort todos by date, but worry about that later

	// Now load the main content, there are todos, then load them, else load a message that tells the user
	// to make some todos or projects
	// Then set up event listeners for those todo buttons
}

// Marks and unmarks a todo's completion 
function toggleTodoCompletion(e) {
	// Get the todoElement, which contains our todo's index in its specific project
	const todoElement = e.currentTarget.parentElement.parentElement;
	const currentTodo = projectsList[formInfoModule.activeTabID].projectTodos[todoElement.dataset.todoIndex];

	// Get the current completion value
	const currentCompletionValue = currentTodo.isComplete.getCompletion();

	// If it's currently true, then that's means the user wanted to set the value to false
	if (currentCompletionValue == true) {
		// Access the todo in that project and change it's completion value to the opposite value
		projectsList[formInfoModule.activeTabID].projectTodos[todoElement.dataset.todoIndex].isComplete.setCompletion(false);
		// Change the text of the button to "Mark as complete", since they're dealing with an incomplete todo
		e.currentTarget.textContent = "Mark as Complete";
		// Give the todoElement the data attribute of true for the line-through style to work immediately; when user refreshes it will stay permanently
		todoElement.setAttribute("data-todo-complete", "false");
	} else {
		projectsList[formInfoModule.activeTabID].projectTodos[todoElement.dataset.todoIndex].isComplete.setCompletion(true);
		e.currentTarget.textContent = "Mark as Incomplete";
		todoElement.setAttribute("data-todo-complete", "true");
	}

	// NOTE: With all of these application types, you would likely save to local storage after
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

// Finds the project index and todo index linked to a certain todo
function findTodoPosition(todo) {
	for (let projectIndex = 0; i < projectsList.length; i++) {
		const projectTodos = projectsList[projectIndex].projectTodos;
		for (let todoIndex = 0; i < projectTodos.length; i++) {
			if (todo == projectTodos[todoIndex]) {
				return (projectIndex, todoIndex); // return the index of the project that the todo is linked to the todo
			}
		}
	}
	return (-1, -1); // return negative index to indicate it doesn't exist 
}


// Creates a new project and adds it to the projectsList array
function addProject(projectTitle) {
	const newProject = new Project(projectTitle);
	projectsList.push(newProject);

}

// Finds existing project and edits its details within projectsList;
function editProject(newProjectTitle) {
	// Find the position of the project and modify it	
	projectsList[formInfoModule.activeTabID].title.setTitle(newProjectTitle);
}

// Deletes a project and all of its information (including the todos that it contains)
function deleteProject() {
	// Removes the project that's active on the sidebar
	projectsList.splice(formInfoModule.activeTabID, 1);
	// When user deletes a project, we want to take them back to the home screen; so set activeTabID to "Home"
	// since that's the data-tabid for the home tab
	formInfoModule.activeTabID = "Home";
	// Now that a user has deleted a project, what do we render since the data-active for a tab is now gone?
	updateSidebarTabs();
	renderMainContent();
}

// Creating a todo and adding it to a project class instance's array of todos
function addTodo(todoTitle, todoDescription, todoDueDate, todoPriority) {
	const newTodo = new Todo(todoTitle, todoDescription, todoDueDate, todoPriority);
	// First add this todo to the corresponding project
	projectsList[formInfoModule.activeTabID].projectTodos.push(newTodo);
}

function editTodo(todoTitle, todoDescription, todoDueDate, todoPriority) {
	// Create your newly edited todo
	const newTodo = new Todo(todoTitle, todoDescription, todoDueDate, todoPriority);
	// Access the position of the todo the user wants to edit and replace that position
	projectsList[formInfoModule.activeTabID].projectTodos[formInfoModule.activeTodoIndex] = newTodo;
}


// Deletes a todo class instance
function deleteTodo(e) {
	// Since user is deleting, they must be on a project tab
	const todoElement = e.currentTarget.parentElement.parentElement;
	// Access the current or active project class instance. Then access its array of todos
	projectsList[formInfoModule.activeTabID].projectTodos.splice(todoElement.dataset.todoIndex, 1);
	
	updateSidebarTabs();
	renderMainContent();

}


window.addEventListener("DOMContentLoaded", () => {
	updateSidebarTabs(); // Since we now have the home, today, and week tabs on the sidebar
	renderMainContent();
})


/*
Todo changes:
1. Make one boolean/variable for editing, is true then they're editing. So that we can get rid of formAction data-attribute and 
the two variables in the formInfoModule
2. Find way to reduce repetition with updateSidebarTabs() and renderMainContent(); make stuff more organized that way

*/