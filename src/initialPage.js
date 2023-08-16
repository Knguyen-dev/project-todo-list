// Creates and returns fieldset with input elements for a form
function createFormField(fieldObj) {
	const fieldset = document.createElement("fieldset");
	const label = document.createElement("label");
	label.textContent = fieldObj.labelText;
	label.htmlFor = fieldObj.inputID;
	fieldset.appendChild(label);
	// If the input element we're making is a drop down
	if (fieldObj.inputType == "select") {
		const selectEl = document.createElement("select");
		selectEl.id = fieldObj.inputID;
		selectEl.name = fieldObj.inputName;
		fieldObj.options.forEach((option) => {
			const optionEl = document.createElement("option");
			optionEl.textContent = option.text;
			optionEl.value = option.value;
			selectEl.appendChild(optionEl);
		})
		fieldset.appendChild(selectEl);
	} else {
		// Else if it's input element that accepts text
		const inputEl = document.createElement("input");
		inputEl.type = fieldObj.inputType;
		inputEl.id = fieldObj.inputID;
		inputEl.name = fieldObj.inputName;
		
		if (fieldObj.maxLength) {
			inputEl.maxLength = fieldObj.maxLength;
		}
		if (fieldObj.placeholderText) {
			inputEl.placeholder = fieldObj.placeholderText;
		}
		inputEl.required = true;
		fieldset.appendChild(inputEl);
	}
	return fieldset;
}

// Creates mark up for the form for creating/editing todos 
function createTodoForm() {
	const form = document.createElement("form");
	form.className = "modal-form";
	form.id = "todo-form";	
	const fields = [
		{
			labelText: "Todo Title:",
			inputType: "text",
			inputID: "todo-title-field",
			inputName: "todo title",
			placeholderText: "E.g. 'Workout'",
			maxLength: 20,
		},
		{
			labelText: "Todo Description:",
			inputType: "text",
			inputID: "todo-description-field",
			inputName: "todo description",
			placeholderText: "E.g. Go to the gym in the evening" ,
			maxLength: 100,
		},
		{
			labelText: "Due Date: ",
			inputType: "date",
			inputID: "todo-due-date-field ",
			inputName: "todo due date",
		},
		{
			labelText: "Todo Priority:",
			inputType: "select",
			inputID: "todo-priority-drop-down",
			inputName: "priority-drop-down",
			options: [
				{text: "Low", value:"Low"},
				{text: "Medium", value:"Medium"},
				{text: "High", value:"High"},
			],
		}
	];
	// Create the fieldsets for the form fields
	for (const field of fields) {
		const fieldset = createFormField(field);
		form.appendChild(fieldset);
	}
	// Create submit button and return the form
	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Submit";
	submitBtn.type = "submit";
	submitBtn.id = "todo-submit-btn";
	submitBtn.className = "light-blue-btn";
	form.appendChild(submitBtn);
	return form;
}

// Creates the mark up for the form for 'creating/editing projects'
function createProjectForm() {
	const form = document.createElement("form");
	form.className = "modal-form";
	form.id = "project-form";
	const fields = [
		{
			labelText: "Project Title:",
			inputType: "text",
			inputID: "project-title-field",
			inputName: "project title",
			placeholderText: "E.g. Compose a new album",
			maxLength: 20,
		},
	];
	// Create the fieldsets for the form fields
	for (const field of fields) {
		const fieldset = createFormField(field);
		form.appendChild(fieldset);
	}
	// Create the sumit button and return the form
	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Submit";
	submitBtn.type = "submit";
	submitBtn.id = "project-submit-btn";
	submitBtn.className = "light-blue-btn";
	form.appendChild(submitBtn);
	return form;
}

// Creates a section that shows the details of a todo
function createTodoDetailsSection() {
	const todoDetailsSections = document.createElement("section");
	todoDetailsSections.id = "todo-details-section";
	todoDetailsSections.innerHTML = `
	<h3 id="todo-details-title-el">Title: Title of said todo</h3>
	<p id="todo-details-description-el">Details: of the todo</p>
	<p id="todo-details-priority-el">Priority: High</p>
	<p id="todo-details-dueDate-el">Due Date: Sample Date</p>`;
	return todoDetailsSections;
}


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
	const modalHeader = document.createElement("header");
	modalHeader.classList.add("modal-header");

	// Create the title of the header
	const modalHeaderTitleEl = document.createElement("h2");
	modalHeaderTitleEl.id = "modal-header-title-el";

	// Create the close button for hte modal
	const closeModalBtn = document.createElement("button");
	closeModalBtn.classList.add("light-blue-btn");
	closeModalBtn.id = "close-modal-btn";
	closeModalBtn.textContent = "Close";

	// Create the main-content section where different types of content will be loaded into the modal 
	// depending on what the user does.
	const modalMainContentEl = document.createElement("section");
	modalMainContentEl.classList.add("modal-main-content");

	// Creates the elements and section that'll be shown on the modal's main content
	const todoForm = createTodoForm();
	const projectForm = createProjectForm();
	const todoDetailsSection = createTodoDetailsSection();

	modalHeader.appendChild(modalHeaderTitleEl);
	modalHeader.appendChild(closeModalBtn);
	modalEl.appendChild(modalHeader);
	modalMainContentEl.appendChild(todoForm);
	modalMainContentEl.appendChild(projectForm);
	modalMainContentEl.appendChild(todoDetailsSection);
	modalEl.appendChild(modalMainContentEl);
	return modalEl;
}

// Function for creating project header
function createPageHeader() {
	const header = document.createElement("header");
	header.id = "page-header";

	// Create the container that has the app's logo and name
	const appLogoContainer = document.createElement("div");
	appLogoContainer.classList.add("app-logo-container");
	appLogoContainer.innerHTML = `
					<img src="./assets/icons/todo_list_icon.svg" alt="Logo of app">
					<h1 id="app-title-el">Todo list</h1>`;
	header.appendChild(appLogoContainer);
	
	// Create user info section of the header 
	const userInfoSection = document.createElement("div");
	userInfoSection.classList.add("user-info-section");
	userInfoSection.innerHTML = `<h2>Hello, <span id="user-email-el">example@gmail.com</span></h2>
					<a href="#" class="light-blue-btn" id="user-link">Sign out</a>`;
	header.appendChild(userInfoSection);
	return header;
}

// Function for creating the sidebar
function createPageSidebar() {
	const sidebarEl = document.createElement("section");
	sidebarEl.id = "page-sidebar";

	// Create main tab section for the sidebar
	const mainTabSection = document.createElement("ul");
	mainTabSection.classList.add("sidebar-tab-section", "main-tab-section");
	// Create the default starting tabs that are our main tabs
	const mainTabs = [
		{
			tabID: "Home",
			tabText: "Home",
		},
		{
			tabID: "Today",
			tabText: "Today",
		},
		{
			tabID: "Week",
			tabText: "Week",
		},
	];
	// Create the main tabs, and then append them to the mainTabSection of our sidebar
	for (const tab of mainTabs) {
		const listEl = document.createElement("li");
		listEl.className = "sidebar-tab-item";
		listEl.setAttribute("data-tabtype", "mainTab");
		listEl.setAttribute("data-tabID", tab.tabID);
		const tabTitleEl = document.createElement("span");
		tabTitleEl.textContent = tab.tabText;
		tabTitleEl.className = "sidebar-tab-title";
		const todoCountEl = document.createElement("span");
		todoCountEl.className = "todo-count-el";
		listEl.appendChild(tabTitleEl);
		listEl.appendChild(todoCountEl);
		mainTabSection.appendChild(listEl);
	}
	// Create the title "Projects" for a section in the sidebar
	const sidebarSectionTitleEl = document.createElement("h1");
	sidebarSectionTitleEl.id = "sidebar-section-title";
	sidebarSectionTitleEl.textContent = "Projects";
	
	// Create projects tab section
	const projectsTabSection = document.createElement("ul");
	projectsTabSection.classList.add("sidebar-tab-section", "projects-tab-section");
	
	// Create the button for adding/creating a project; add data attribute to help with form logic to see if they're adding or editing a project
	const createProjectBtn = document.createElement("button");
	createProjectBtn.classList.add("sidebar-tab-item");
	createProjectBtn.id = "create-project-btn";
	createProjectBtn.textContent = "Add Project";
	
	// Create the proper structure and the sidebar
	sidebarEl.appendChild(mainTabSection);
	sidebarEl.appendChild(sidebarSectionTitleEl);
	sidebarEl.appendChild(projectsTabSection);
	sidebarEl.appendChild(createProjectBtn);
	return sidebarEl;
}

// Function for creating the main display page (section where all of the todos are)
function createMainContentSection() {
	// Create project main content section
	const mainContent = document.createElement("section");
	mainContent.classList.add("project-main-content");

	const mainContentHeader = document.createElement("header");
	mainContentHeader.id ="main-content-header";
	mainContentHeader.innerHTML = `<h1 id="tab-title-el">Sample Tab Title</h1>`;
	
	const todoListContainer = document.createElement("ul");
	todoListContainer.id = "todo-list-container";
	
	// Create div that shows the user a message 
	const emptyTabSection = document.createElement("section");
	emptyTabSection.id = "empty-tab-section";

	// Create message elements to show the user (main message)
	const mainMessageEl = document.createElement("h1");
	mainMessageEl.id = "empty-tab-message-primary";
	mainMessageEl.textContent = "No todos in this tab yet!";
	
	// Create the sub message 
	const subMessageEl = document.createElement("p");
	subMessageEl.id = "empty-tab-message-secondary";
	subMessageEl.textContent = "Please make a new todo or project to get started!";
	
	// Create proper structure 
	mainContent.appendChild(mainContentHeader);
	mainContent.appendChild(todoListContainer);
	mainContent.appendChild(emptyTabSection);
	emptyTabSection.appendChild(mainMessageEl);
	emptyTabSection.appendChild(subMessageEl);
	return mainContent;
}

// function for creating project footer
function createPageFooter() {
	// Create footer
	const footer = document.createElement("footer");
	footer.id = "page-footer";

	// Create icon link section/container
	const footerIconContainer = document.createElement("div");
	footerIconContainer.classList.add("footer-icon-container");

	// Create the link and the image for the link
	const iconLink = document.createElement("a");
	const iconImage = document.createElement("img");
	iconImage.src = "./assets/icons/github-mark.svg";
	iconImage.classList.add("site-icons");
	
	// Create the description of the footer; Create date element
	const footerMessageEl = document.createElement("p");
	footerMessageEl.id = "footer-message-el";
	footerMessageEl.textContent = `All credit and rights reserved to the hot ice cream company - ${new Date().getFullYear()}`;

	// Create proper structure and return the footer
	iconLink.appendChild(iconImage);
	footerIconContainer.appendChild(iconLink);
	footer.appendChild(footerIconContainer);
	footer.appendChild(footerMessageEl);	
	return footer;
}

// creates and returns page
function createInitialPage() {
	// Create div that represents our page
	const contentDiv = document.createElement("div");
	contentDiv.id = "content";

	const overlayEl = createOverlay();
	const modalEl = createModal();
	// NOTE: projectContainer is just another container that has all of our page's elements
	// excluding the modal and its content
	const projectContainer = document.createElement("div");
	projectContainer.id = "project-container";

	const pageHeader = createPageHeader();
	const pageSidebar = createPageSidebar();
	const pageMainContent = createMainContentSection();
	const pageFooter = createPageFooter();

	// Create the proper structure for the page and return the page
	projectContainer.appendChild(pageHeader);
	projectContainer.appendChild(pageSidebar);
	projectContainer.appendChild(pageMainContent);
	projectContainer.appendChild(pageFooter);	
	contentDiv.appendChild(overlayEl);
	contentDiv.appendChild(modalEl);
	contentDiv.appendChild(projectContainer);
	return contentDiv;
}


export { createInitialPage };