import "./style.css";
import WebFont from "webfontloader";
import {createTodoForm, createProjectForm, createTodoDetailsSection} from "./createModalContent";
import {createOverlay, createModal, createProjectHeader, createProjectSidebar, createMainContentSection, createProjectFooter} from "./initialPageLoad";
import {Todo, Project} from "./classes";
WebFont.load({
	google: {
		families: ["Roboto", "Open Sans"]
	}
});

// Lists containing project instances; probably are going to act as our 
// databases for the meantime
let projectsList = []; // contains all projects; but can also be used to get all todos


// IFFE: Contains all dom elements for page
const DOMElementsModule = (() => {

	// Section that contains all all page elements
	const pageContentSection = document.createElement("div");
	pageContentSection.id = "content";

	// Create elements that are going to be direct children of pageContentSection
	const overlayEl = createOverlay();
	const modalEl = createModal();
	const projectContainer = document.createElement("div");
	projectContainer.classList.add("project-container");

	pageContentSection.appendChild(overlayEl);
	pageContentSection.appendChild(modalEl);
	pageContentSection.appendChild(projectContainer);

	// Create the content for the modal; the forms will only be active the modal is open
	const todoForm = createTodoForm();
	const projectForm = createProjectForm();
	const todoDetailsSection = createTodoDetailsSection();

	// Create elements that are going to be placed inside the projectContainer 
	const projectHeader = createProjectHeader();
	const projectSidebar = createProjectSidebar();
	const projectMainContentSection = createMainContentSection();
	const projectFooter = createProjectFooter();

	projectContainer.appendChild(projectHeader);
	projectContainer.appendChild(projectSidebar);
	projectContainer.appendChild(projectMainContentSection);
	projectContainer.appendChild(projectFooter);

	// Now create the ability to load content

	// Let's get some buttons working

	// Tab buttons
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
});


