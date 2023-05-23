// create the modal
function createOverlay() {
	const overlayEl = document.createElement("div");
	overlayEl.classList.add("overlay");
	return overlayEl;
}

// Create the modal container 
function createModal() {
	const modalEl = document.createElement("div");
	modalEl.classList.add("modal");

	// Create the header for the modal
	const modalHeaderEl = document.createElement("header");
	modalHeaderEl.classList.add("modal-header");
	modalEl.appendChild(modalHeaderEl);

	// Create the title of the header
	const modalHeaderTitleEl = document.createElement("h2");
	modalHeaderTitleEl.id = "modal-header-title-el";
	modalHeaderEl.appendChild(modalHeaderTitleEl);

	// Create the close button for hte modal
	const closeModalBtn = document.createElement("button");
	closeModalBtn.classList.add("light-blue-btn");
	closeModalBtn.id = "close-modal-btn";
	closeModalBtn.textContent = "Close";
	modalHeaderEl.appendChild(closeModalBtn);

	// Create the main-content section where different types of content will be loaded into the modal 
	// depending on what the user does.
	const modalMainContentSection = document.createElement("section");
	modalMainContentSection.classList.add("modal-main-content");

	// Finally add the main-content-section onto the modal itself
	modalEl.appendChild(modalMainContentSection);
	return modalEl;
}



/*
Looks like we should create functions for 
// Make them all hidden at first

- creating the "make project"
- creating "make todo" form
- creating "show todo details"

- loadModalContent(); takes in a string or something from the button, which allows it to decide
what to do content-hidden removal, and then ultimately what display function to run

Then functions:
- displayProjectForm; which could have a boolean for making or editing; we know it's editing 
if a project instance is passed through
- displayTodoForm; which could be making or editing depending if a todo class instance is passed


*/






// Function for creating project header
function createProjectHeader() {
	const headerEl = document.createElement("header");
	headerEl.classList.add("project-header");

	// Create the container that has the app's logo and name
	const appLogoContainer = document.createElement("div");
	appLogoContainer.classList.add("app-logo-container");
	appLogoContainer.innerHTML = `
					<img src="./assets/icons/todo_list_icon.svg" alt="Logo of app">
					<h1 id="app-title-el">Todo list</h1>`;
	headerEl.appendChild(appLogoContainer);
	
	// Create user info section of the header 
	const userInfoSection = document.createElement("div");
	userInfoSection.classList.add("user-info-section");
	userInfoSection.innerHTML = `<h2>Hello, <span id="user-email-el">example@gmail.com</span></h2>
					<a href="#" class="light-blue-btn" id="user-link">Sign out</a>
					<button class="light-blue-btn" id="change-theme-btn">Theme</button>`;
	headerEl.appendChild(userInfoSection);
	return headerEl;
}

// Function for creating the sidebar
function createProjectSidebar() {
	const sidebarEl = document.createElement("section");
	sidebarEl.classList.add("project-sidebar");

	// Create main tab for sidebar
	const mainTabSection = document.createElement("ul");
	mainTabSection.classList.add("sidebar-tab-section", "main-tab-section");	
	mainTabSection.innerHTML = `<li class="sidebar-tab-item" data-active="true" data-tabtype="mainTab" data-tabID="Home"><span class="sidebar-tab-title">Home</span><span class="todo-count-el">0</span></li>
					<li class="sidebar-tab-item" data-tabtype="mainTab" data-tabID="Today"><span class="sidebar-tab-title">Today</span><span class="todo-count-el">0</span></li>
					<li class="sidebar-tab-item" data-tabtype="mainTab" data-tabID="Week"><span class="sidebar-tab-title">Week</span><span class="todo-count-el">0</span></li>`;
	sidebarEl.appendChild(mainTabSection);

	// Create the title "Projects" for a section in the sidebar
	const sidebarSectionTitleEl = document.createElement("h1");
	sidebarSectionTitleEl.id = "sidebar-section-title";
	sidebarSectionTitleEl.textContent = "Projects";
	sidebarEl.appendChild(sidebarSectionTitleEl);

	// Create projects tab section
	const projectsTabSection = document.createElement("ul");
	projectsTabSection.classList.add("sidebar-tab-section", "projects-tab-section");
	sidebarEl.appendChild(projectsTabSection);

	// Create the button for adding/creating a project; add data attribute to help with form logic to see if they're adding or editing a project
	const createProjectBtn = document.createElement("button");
	createProjectBtn.classList.add("sidebar-tab-item");
	createProjectBtn.id = "create-project-btn";
	createProjectBtn.setAttribute("data-form-action", "add-project");
	createProjectBtn.textContent = "Add Project";
	sidebarEl.appendChild(createProjectBtn);

	return sidebarEl;
}

// BOOK MARK: DO THE MAIN CONTENT SECTION; probably going to have the header and title, and stff 

// Function for creating the main display page (section where all of the todos are)
function createMainContentSection() {
	// Create project main content section
	const projectMainContentSection = document.createElement("section");
	projectMainContentSection.classList.add("project-main-content");

	const mainContentHeader = document.createElement("header");
	mainContentHeader.id ="main-content-header";
	mainContentHeader.innerHTML = `<h1 id="tab-title-el">Sample Tab Title</h1>`;
	projectMainContentSection.appendChild(mainContentHeader);

	const todoListContainer = document.createElement("ul");
	todoListContainer.id = "todo-list-container";
	projectMainContentSection.appendChild(todoListContainer);


	return projectMainContentSection;
}

// function for creating project footer
function createProjectFooter() {
	const footerEl = document.createElement("footer");
	footerEl.classList.add("project-footer");

	// Create icon link section/container
	const footerIconContainer = document.createElement("div");
	footerIconContainer.classList.add("footer-icon-container");

	// Create the link and the image for the link
	const iconLink = document.createElement("a");
	const iconImage = document.createElement("img");
	iconImage.src = "./assets/icons/github-mark.svg";
	iconImage.classList.add("site-icons");
	iconLink.appendChild(iconImage);
	footerIconContainer.appendChild(iconLink);
	footerEl.appendChild(footerIconContainer);

	// Create the description of the footer; Create date element
	const footerMessageEl = document.createElement("p");
	footerMessageEl.id = "footer-message-el";
	const currentYear = new Date().getFullYear();
	footerMessageEl.textContent = `All credit and rights reserved to the hot ice cream company - ${currentYear}`;
	footerEl.appendChild(footerMessageEl);	
	return footerEl;
}


export {createOverlay, createModal, createProjectHeader, createProjectSidebar, createMainContentSection, createProjectFooter};