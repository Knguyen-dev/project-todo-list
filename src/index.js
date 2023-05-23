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

// variables that keep track of whether the user is adding or creating a new instance of project or todo
// values will be "add-project" or "add-todo" or "edit-project" or "edit-todo";
const formInfoModule = {
	"projectFormState":  "",
	"todoFormState":  "",
	"activeProjectIndex": "",
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
		// Prevent default form behavior and close modal
		e.preventDefault(); 
		closeModal();

		// Get the input value for the title of the project
		const inputTitle = document.getElementById("project-title-field").value;
		// Then depending on the state of the form either the function to add or edit a project
		if (formInfoModule.projectFormState == "add-project") {
			addProject(inputTitle);
		} else {
			// formInfoModule.projectFormState == "edit-project" in this case
			editProject(inputTitle);
		}

		// Update the sidebar since a project is being added/edited, and then render main content since the header may change
		// NOTE: After we edit and submit, it creates new html, and doesn't know where to put the data-active element
		updateSidebarTabs();

		// If the user was on a project tab, then we should display the main-content for that tab after they submit the form (only happens when the user is editing a project)
		if (formInfoModule.activeProjectIndex !== "") {
			const activeProjectTab = document.querySelector(`li.sidebar-tab-item[data-projectid='${formInfoModule.activeProjectIndex}']`);
			renderMainContent(activeProjectTab);
		}

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
	// Show the blur overlay, modal, and the project form 
	DOMElementsModule.overlayEl.classList.remove("content-hidden");
	DOMElementsModule.modalEl.classList.remove("content-hidden");
	DOMElementsModule.projectForm.classList.remove("content-hidden");
	// Put a data-active attribute on the form since it's active
	DOMElementsModule.projectForm.setAttribute("data-active", "true");
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
		inputTitleEl.value = "";
	} else {
		// Editing a project, so find the selected project the user wants by looking at the current tab they're on
		const currentProject = projectsList[formInfoModule.activeProjectIndex];
		modalHeaderTitle.textContent = `Edit Project: '${currentProject.title.getTitle()}'`;
		inputTitleEl.value = `${currentProject.title.getTitle()}`;
	}
}

// Hides modal, overlay, and then all of the other content for the modal
function closeModal() {	
	DOMElementsModule.modalEl.classList.add("content-hidden"); // Now hide the modal and blur overlay
	DOMElementsModule.overlayEl.classList.add("content-hidden");
	DOMElementsModule.projectForm.removeAttribute("data-active"); // Hide all of the modal content and remove data-active from them
	DOMElementsModule.projectForm.classList.add("content-hidden");
	DOMElementsModule.todoForm.removeAttribute("data-active");
	DOMElementsModule.todoForm.classList.add("content-hidden");
	DOMElementsModule.todoDetailsSection.removeAttribute("data-active");
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
		// User could have submitted a todo or project form, which meant they were previously project-tab; If the tab index of a project is the same as the tab of the project the user was previously on, then give it 
		// an active data attribute to show the user they're still on that tab
		

		if (formInfoModule.activeProjectIndex === index) {
			return `<li class="sidebar-tab-item" data-tabtype="projectTab" data-active='true' data-projectid=${index}><span class="sidebar-tab-title">${projectTitle}</span><span class="todo-count-el">${projectTodoCount}</span></li>`;
		} else {
			return `<li class="sidebar-tab-item" data-tabtype="projectTab" data-projectid=${index}><span class="sidebar-tab-title">${projectTitle}</span><span class="todo-count-el">${projectTodoCount}</span></li>`;
		}
	}).join("");

	// Now lets update the html for the main tabs
	const mainTabs = document.querySelectorAll("li[data-tabtype='mainTab']");

	// Update the main tabs to correctly sho the amount of todos available
	mainTabs.forEach(tab => {
		const tabTodos = getMainTabTodos(tab).length;
		const todoCountEl = tab.querySelector(".todo-count-el")
		todoCountEl.textContent = tabTodos;
	})

	// Get all sidebar tab and make sure when they're clicked it gives them data-active attribute, and removes
	// that attribute from all other non-clicked tabs.
	const sidebarTabs = DOMElementsModule.projectSidebar.querySelectorAll("li.sidebar-tab-item");
	sidebarTabs.forEach(tab => {
		tab.addEventListener("click", handleSidebarTabClick);
	});
};

// Renders main content section for a the tab that the user clicked on 
function renderMainContent(tab) {
	const tabType = tab.dataset.tabtype;
	let todos = []; // should be a list of todo class instances

	// Get the header, and then the list element for containing your todo list
	const mainContentHeader = document.getElementById("main-content-header");
	const todoListContainer = document.getElementById("todo-list-container");

	// Get todos and change header, alongside other stuff, depending on the type of tab.
	if (tabType == "mainTab") {
		todos = getMainTabTodos(tab);

		// Create and style header for main tab
		mainContentHeader.innerHTML = `<h1 id="tab-title-el">${tab.dataset.tabid}</h1>`;
		mainContentHeader.classList.add("main-content-header-main-tab");
		mainContentHeader.classList.remove("main-content-header-project-tab");
	} else {
		// Else we are generating content for a project tab
		const currentProject = projectsList[tab.dataset.projectid];
		todos = currentProject.getProjectTodos();

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
		addTodoBtn.addEventListener("click", e => {
			console.log("Add todo button was clicked");
		});

		// Create button for editing projects; the projectid will be put on the button to keep track of the project being edited
		const editProjectBtn = document.getElementById("edit-project-btn");
		editProjectBtn.addEventListener("click", displayProjectForm);

		const deleteProjectBtn = document.getElementById("delete-project-btn");
		deleteProjectBtn.addEventListener("click", e => {
			console.log("User tried to delete project");
		});


		// BOOK MARK: Finish the buttons in this section


	}

	// NOTE: Should probably sort todos by date, but worry about that later

	// Now load the main content, there are todos, then load them, else load a message that tells the user
	// to make some todos or projects
	todoListContainer.innerHTML = todos.map(todo => {
		return `<li class="todo-item" data-todo-complete="false">
						<span class="todo-title-el">${todo.title.getTitle()}</span>
						<div class="todo-btns">
							<button id="toggle-todo-btn" class="green-btn">Mark as Complete</button>
							<button id="todo-details-btn" class="gray-btn">Details</button>
							<button id="edit-todo-btn" class="gray-btn">Edit</button>
							<button id="delete-todo-btn" class="red-btn">Delete</button>
						</div>
					</li>`;
	}).join("");

	// Then set up event listeners for those todo buttons
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
	// If the clicked tab is a project tab then update the activeProjecIndex, else set the project index to ""
	if (clickedTab.dataset.tabtype == "mainTab") {
		formInfoModule.activeProjectIndex = "";
	} else {
		formInfoModule.activeProjectIndex = parseInt(clickedTab.dataset.projectid); // return as an integer, so that it's easier to work with indices
	}
	// Make it so that clicking on the tab would call the function to render the content
	renderMainContent(clickedTab);
}

// Likely have separate function for rendering main tabs
function getMainTabTodos(tab) {
	const tabID = tab.dataset.tabid;
	let tabTodos = [];
	const currentDate = new Date();

	for (let i = 0; i < projectsList.length; i++) { // Loop through all projects
		const projectTodos = projectsList[i].getProjectTodos(); // Get the list of the todos for current project, loop through them to to see if they match conditions
		for (let i = 0; i < projectTodos.length; i++) { // If they do then add them to tabTodos
			if (tabID == "Home") {
				tabTodos.push(projectTodos[i]);
			} else if (tabID == "Today" && (isSameDate(currentDate, projectTodos[i].dueDate))) {
				tabTodos.push(projectTodos[i]);
			} else {
				// tabID == "Week"
				if (isSevenDaysInFuture(currentDate, projectTodos[i].dueDate)) {
					tabTodos.push(projectTodos[i]);
				}
			}
		}
	}
	return tabTodos;
}

// Creates a new project and adds it to the projectsList array
function addProject(projectTitle) {
	const newProject = new Project(projectTitle);
	projectsList.push(newProject);
}

// Finds existing project and edits its details within projectsList;
function editProject(newProjectTitle) {
	// Find the position of the project and modify it	
	projectsList[formInfoModule.activeProjectIndex].title.setTitle(newProjectTitle);
}

window.addEventListener("DOMContentLoaded", () => {
	updateSidebarTabs(); // Since we now have the home, today, and week tabs on the sidebar

})