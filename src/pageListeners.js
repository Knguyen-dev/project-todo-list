import {
    tabsModule,
    DomModule,
    modalModule,
    addProject,
    editProject,
    deleteProject,
    addTodo,
    editTodo,
} from "./modules.js";
import {
    hideModal,
    renderMainContent,
    renderProjectForm,
    renderTodoForm,
    renderPage,
} from "./rendering.js";
/*
- Whenever a tab is clicked, we make sure it's the only tab
	that's highlighted. Then we render the main content related to it
- NOTE: We want to have handleSidebarTabClick as a callback function, since 
	we don't want duplicate event listeners, which only happens on the main tabs
	since we don't reset those
*/
function handleSidebarTabClick(e) {
    const clickedTab = e.currentTarget;
    const sidebarTabs = DomModule.getSidebarTabs();
    // Make sure clicked tab, only has data-active
    for (let i = 0; i < sidebarTabs.length; i++) {
        if (sidebarTabs[i] == clickedTab) {
            sidebarTabs[i].setAttribute("data-active", true);
        } else {
            sidebarTabs[i].removeAttribute("data-active");
        }
    }
    // Record the active tab's information
    tabsModule.activeTabID = clickedTab.dataset.tabId;
    tabsModule.activeTabType = clickedTab.dataset.tabType;
    renderMainContent();
}

/*
- Create event listener for the 'edit' button on individual todos.
	There are two scenarios when editing
1. Editing whilst in a user-created project tab:
	1. We already have the projectIndex in activeTabID
	2. We only need to get the todoIndex data-attribute from todo-el.
2. Editing whilst in a main tab:
	1. The project and todo indices are both in the todoEl element.
3. Finally, record both of these values, and set the isEdit boolean to true
	to indicate we're going to edit something. We Then call the function
	to show the todo form for editing.
*/
function handleEditTodoBtn(e) {
    const todoEl = e.currentTarget.parentElement.parentElement;
    tabsModule.selectedTodoIndex = todoEl.dataset.todoIndex;
    if (tabsModule.activeTabType == tabsModule.mainTabType) {
        tabsModule.selectedProjectIndex = todoEl.dataset.projectIndex;
    } else {
        tabsModule.selectedProjectIndex = tabsModule.activeTabID;
    }
    modalModule.isEdit = true;
    renderTodoForm();
}

/*
- Creates event listeners for all buttons related to interactively with a project
1. Adding a new project
2. Add a todo to an existing project
3. Editing an existing project
4. Deleting an existing project
*/
function setupProjectBtns() {
    /*
	- For creating and editing projects, we change the boolean indicating if 
		we are using the form to edit or not. Then we render the appropriate project form. 
	NOTE: The reason these functions don't have 'renderPage()' to render changes 
		in the sidebar or maincontent is because these buttons only open the modal
		with the appropriate content, while the projectForm itself on submission
		will render the changes to the page
	*/
    DomModule.createProjectBtn.addEventListener("click", () => {
        modalModule.isEdit = false;
        renderProjectForm();
    });
    DomModule.editProjectBtn.addEventListener("click", () => {
        modalModule.isEdit = true;
        renderProjectForm();
    });
    /*
	- Delete button will delete the project from the data, and render the page again.
		By rendering the page, we see the changes that happen in the sidebar and 
		main content due to deleting the project.
	*/
    DomModule.deleteProjectBtn.addEventListener("click", () => {
        deleteProject();
        renderPage();
    });

    // For showing the todo form, when we want to add todos to a project
    DomModule.addTodoBtn.addEventListener("click", () => {
        modalModule.isEdit = false;
        renderTodoForm();
    });
}

// Sets up event listener for the project form
function setupProjectForm() {
    DomModule.projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (modalModule.isEdit) {
            editProject(DomModule.projectTitleInput.value);
        } else {
            addProject(DomModule.projectTitleInput.value);
        }
        renderPage();
        hideModal();
    });
}

// Sets up eveent listener for the todo form
function setupTodoForm() {
    DomModule.todoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (modalModule.isEdit) {
            editTodo(
                DomModule.todoTitleInput.value,
                DomModule.todoDescInput.value,
                DomModule.todoDateInput.value,
                DomModule.todoPrioritySelect.value
            );
        } else {
            addTodo(
                DomModule.todoTitleInput.value,
                DomModule.todoDescInput.value,
                DomModule.todoDateInput.value,
                DomModule.todoPrioritySelect.value
            );
        }
        renderPage();
        hideModal();
    });
}

/*
- Loads and sets up event listeners for the initial page. This excludes 
	anything dynamic, for example the sidebar tabs which are dynamically created and 
	so their event listeners are as well.
*/
function loadPageListeners() {
    DomModule.closeModalBtn.addEventListener("click", hideModal);
    setupProjectBtns();
    setupProjectForm();
    setupTodoForm();
}

export { handleSidebarTabClick, handleEditTodoBtn, loadPageListeners };
