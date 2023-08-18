import { tabsModule, DomModule, modalModule } from "./modules.js";
import {
    formatDateToUS,
    isSameDate,
    isSevenDaysInFuture,
    sortTodosByDate,
} from "./utility.js";
import { Todo } from "./classes.js";
import { setupSidebarTabs } from "./pageListeners.js";

// Hides modal
function hideModal() {
    DomModule.overlayEl.classList.add("content-hidden");
    DomModule.modalEl.classList.add("content-hidden");
}

// Renders the odal and the content section that needs to be used
function renderModalContent() {
    /*
	1. Shows modal and overlay
    2. Render the modal content that's active whilst hiding the rest
    3. Finally, render the title of the modal
	*/
    DomModule.overlayEl.classList.remove("content-hidden");
    DomModule.modalEl.classList.remove("content-hidden");
    DomModule.modalContentList.forEach((element) => {
        if (modalModule.activeContentID == element.id) {
            element.classList.remove("content-hidden");
        } else {
            element.classList.add("content-hidden");
        }
    });
    DomModule.modalTitleEl.textContent = modalModule.modalTitle;
}

// Render the project form
function renderProjectForm() {
    /*
	1. Reset form fields and set activeContentID so that the project form will be shown on modal
	2. If we're editing a project: Get the current project, the one we're 
		editing, edit the modal's title, and fill the input field.
	3. Else: If we're creating the new project, we just edit the title of the modal,
		no need to edit the input field since it's already been reset.
	4. Finally call the rendering function to show the modal and its content
	*/
    DomModule.projectForm.reset();
    modalModule.activeContentID = DomModule.projectForm.id;
    if (modalModule.isEdit) {
        const currentProject = tabsModule.getActiveProject();
        modalModule.modalTitle = `Edit Project '${currentProject.title.getTitle()}'!`;
        DomModule.projectTitleInput.value = currentProject.title.getTitle();
    } else {
        modalModule.modalTitle = "Create new project!";
    }
    renderModalContent();
}

// Renders content of the todo form
function renderTodoForm() {
    /*
	1. Most of the steps are similar to renderProjectForm()
	2. If we're editing a todo, we're getting, get the todo the user wants to edit,
		then modify the form based on that todo's information
	NOTE: For javascript date object, a way to input the value of that date object 
		into an input of type date is to do '.toISOString()' and .slice(0, 10) on it.
	3. Else just edit the title of the modal.
	*/
    DomModule.todoForm.reset();
    modalModule.activeContentID = DomModule.todoForm.id;
    if (modalModule.isEdit) {
        const currentTodo = tabsModule.getActiveTodo();
        DomModule.modalTitleEl.textContent = `Edit Todo '${currentTodo.title.getTitle()}'`;
        DomModule.todoTitleInput.value = `${currentTodo.title.getTitle()}`;
        DomModule.todoDescInput.value = `${currentTodo.description.getDescription()}`;
        DomModule.todoDateInput.value = `${currentTodo.dueDate
            .toISOString()
            .slice(0, 10)}`;
        DomModule.todoPrioritySelect.value = `${currentTodo.priority.getPriority()}`;
    } else {
        const currentProject = tabsModule.getActiveProject();
        DomModule.modalTitleEl.textContent = `Add new todo for project '${currentProject.title.getTitle()}'`;
    }
    renderModalContent();
}

// Renders the contents of the todos details section
/*
- Remember that we can show details of todo whilst on a project 
	tab or a main tab. 
- In this case when rendering the todos, the buttons should set the 
	information of the project the todo belongs to, and then the index
	of the todo. We set this information, so that on click those indices 
	are the active indices.
*/
function renderTodoDetails() {
    modalModule.activeContentID = DomModule.todoDetailsSection.id;
    const currentTodo = tabsModule.getActiveTodo();
    DomModule.modalTitleEl.textContent = `Details for todo '${currentTodo.title.getTitle()}'`;
    DomModule.todoDetailsTitleEl.value = currentTodo.title.getTitle();
    DomModule.todoDetailsDescEl.value =
        currentTodo.description.getDescription();
    DomModule.todoDetailsPriorityEl.value = currentTodo.priority.getPriority();
    DomModule.todoDetailsDateEl.value = currentTodo.dueDate
        .toISOString()
        .slice(0, 10);
    renderModalContent();
}

/*
- Updates and renders the sidebar tabs
1. Renders, potential new changes in sidebar tabs such as new tabs or changes in todo count, etc.
2. Put event listeners on the sidebar tabs
*/
function updateSidebarTabs() {
    /*
	- Update the projects section on the sidebar
	1. Clear the sidebar tab of all user created project tabs
	2. Create tab element, and add identifying data-attributes onto it that'll be used later
	3. Create title element and todo count element for the tab.
	4. Finally put it all together and add the tab element to the projectsTabSection
	*/
    DomModule.projectsTabSection.innerHTML = "";
    tabsModule.projectsList.forEach((project, index) => {
        const tabEl = document.createElement("li");
        tabEl.className = "sidebar-tab";
        tabEl.setAttribute("data-tab-type", "projectTab");
        tabEl.setAttribute("data-tab-id", index);

        const tabTitleEl = document.createElement("span");
        tabTitleEl.className = "sidebar-tab-title";
        tabTitleEl.textContent = project.title.getTitle();

        const todoCountEl = document.createElement("span");
        todoCountEl.className = "todo-count-el";
        tabEl.appendChild(tabTitleEl);
        tabEl.appendChild(todoCountEl);

        DomModule.projectsTabSection.appendChild(tabEl);
    });

    /*
	- Distribute all todos amongst the main tabs, which are allocated by date
	1. Sort the todos of the projects by date
	2. First clear the todos in the main tab projects
	3. Push all todos in home tab, since that tab is responsible for showing all todos
	4. If the date of the todo matches the current date, put it in today tab
	5. Else if it's within 7 days in the future, we put it in the week tab

	NOTE: By sorting todos by date, we'll be able to pop them out and 
	render them by date. It also deals with the issue of indexing, as we 
	know how our todos are going to be index, allowing us to easily 
	reference and locate the todos by indices
	*/
    tabsModule.projectsList.forEach((project) => {
        project.projectTodos = sortTodosByDate(project.projectTodos);
    });

    /*
	- Clear all todos, and their related information such as the index of the 
		projects they belong to and the index of themselves in said project.
	- This is to prevent duplication, as we're about to distribute todos.
	*/
    tabsModule.clearMainTabTodos();

    const currentDate = new Date();
    tabsModule.projectsList.forEach((project, projectIndex) => {
        const projectTodos = project.projectTodos;
        for (let todoIndex = 0; todoIndex < projectTodos.length; todoIndex++) {
            // Record todo information in Home tab object
            tabsModule.Home.tabProject.addTodo(projectTodos[todoIndex]);
            tabsModule.Home.todoIndices.push(todoIndex);
            tabsModule.Home.projectIndices.push(projectIndex);
            if (isSameDate(currentDate, projectTodos[todoIndex].dueDate)) {
                // Record todo information in Today tab object
                tabsModule.Today.tabProject.addTodo(projectTodos[todoIndex]);
                tabsModule.Today.todoIndices.push(todoIndex);
                tabsModule.Today.projectIndices.push(projectIndex);
            } else if (
                isSevenDaysInFuture(
                    currentDate,
                    projectTodos[todoIndex].dueDate
                )
            ) {
                // Record todo information in Week tab object
                tabsModule.Today.tabProject.addTodo(projectTodos[todoIndex]);
                tabsModule.Today.todoIndices.push(todoIndex);
                tabsModule.Today.projectIndices.push(projectIndex);
            }
        }
    });

    /*
	- Update the sidebar tabs
	1. update the amount of completed todos represented in each tab
	2. update or persist the tab that's active, whether it's a user project 
		or main tab
	NOTE: Can't have 'sidebarTabs' in our DomModule since this is dynamic and 
			the amount of sidebar tabs can change
	*/
    const sidebarTabs = DomModule.getSidebarTabs();
    sidebarTabs.forEach((tab) => {
        // Get the id of the tab
        const tabID = tab.dataset.tabId;
        const todoCountEl = tab.querySelector(".todo-count-el");
        // Depending on whether it's a main or project tab, we have different of getting the amount of todos
        if (tab.dataset.tabType === tabsModule.mainTabType) {
            todoCountEl.textContent =
                tabsModule[tabID].tabProject.getIncompleteTodoCount();
        } else {
            todoCountEl.textContent =
                tabsModule.projectsList[tabID].getIncompleteTodoCount();
        }
        // After updating all sidebar tabs, make sure to persist the highlighting of the tab that's active.
        if (tabID === tabsModule.activeTabID) {
            tab.setAttribute("data-active", true);
        } else {
            tab.removeAttribute("data-active");
        }
    });
    // Set up event listeners for the sidebar tabs
    setupSidebarTabs();
}

/*

Goals:
1. In order to make it so we can edit, add, and delete todos on our mainTabs,
	we need to know the project that the todo belongs to. A solution could 
	be having parallel lists. For each mainTab have two separate arrays, one 
	for the todo class instance, whilst the other is for the index of the project
	belonging to that todo. By having the index of the project, we'll be able 
	to track the todo the project belongs to. If we're editing the todo, we need 
	to know the index of the todo that we are editing as well.

2. 


*/

function renderMainContent() {
    /*
	1. Get project associated to the active tab, regardless of whether
		it's a main or a user created tab
	2. Get the already sorted todos for the project
	*/
    const project = tabsModule.getActiveProject();
    const todos = project.projectTodos;
    /*
	1. Reset and clear markup for mainContentHeader 
	2. Edit the main-content, so that the header has the tab title
	- If we're not on a main tab, we add buttons to:
		1. Add todos
		2. edit the project
		3. Delete the project
	- Else, we hide that section of buttons because we aren't on a project tab
	*/
    DomModule.tabTitleEl.textContent = project.title.getTitle();
    if (tabsModule.activeTabType === tabsModule.mainTabType) {
        DomModule.projectBtnsDiv.classList.add("content-hidden");
    } else {
        DomModule.projectBtnsDiv.classList.remove("content-hidden");
    }
    /*
	1. Main Tabs: If we're rendering todos from the main tabs, we 
		embed the indices of the project those todos belong to. Then embed
		the indices of those todos inside of those projects. These values 
		will be given by the tabsModule
	2. User-Created/Project tab: The activeTabID should have already recorded
		the index of the user-created project in projectsList. So we should only
		need to embed the index of the todo in the projectTodos array that's 
		available for all project class instances.
	*/

    /*
	- If  there are todos for the active tab:
	1. Remove emptyTabSection and make the todoListContainer 
		appear since we have todos to render. Then clear todoListContainer
	*/
    if (todos.length !== 0) {
        DomModule.emptyTabSection.classList.add("content-hidden");
        DomModule.todoListContainer.classList.remove("content-hidden");
        DomModule.todoListContainer.innerHTML = "";

        todos.forEach((todo, index) => {
            const todoEl = document.createElement("li");
            todoEl.className = "todo-item";
            todoEl.setAttribute(
                "data-todo-complete",
                todo.isComplete.getCompletion()
            );

            /*
			- If it's a main tab, we add on the index of the project that the todo
				originally belongs to, and also the index of that todo in that project
			- Else, it's a project tab, so the activeTabID already records the project
				that the todo belongs to, and 'index'.
			*/
            if (tabsModule.activeTabType == tabsModule.mainTabType) {
                todoEl.setAttribute(
                    "data-project-index",
                    tabsModule[tabsModule.activeTabID].projectIndices[index]
                );
                todoEl.setAttribute(
                    "data-todo-index",
                    tabsModule[tabsModule.activeTabID].todoIndices[index]
                );
            } else {
                todoEl.setAttribute("data-todo-index", index);
            }

            const todoTitleEl = document.createElement("span");
            todoTitleEl.className = "todo-title-el";
            todoTitleEl.textContent = todo.title.getTitle();

            const todoDateEl = document.createElement("span");
            todoDateEl.textContent = "todo-due-date-el";
            todoDateEl.textContent = `Due: ${formatDateToUS(todo.dueDate)}`;

            const todoBtnsDiv = document.createElement("div");
            todoBtnsDiv.className = "todo-btns-container";

            // Of course after add event listeners to these buttons

            const editTodoBtn = document.createElement("button");
            editTodoBtn.classList.add("edit-todo-btn", "green-btn");
            editTodoBtn.textContent = "Edit";

            const todoDetailsBtn = document.createElement("button");
            todoDetailsBtn.classList.add("todo-details-btn", "blue-btn");
            todoDetailsBtn.textContent = "Details";

            const deleteTodoBtn = document.createElement("button");
            deleteTodoBtn.classList.add("delete-todo-btm", "red-btn");
            deleteTodoBtn.textContent = "Delete";

            todoBtnsDiv.appendChild(editTodoBtn);
            todoBtnsDiv.appendChild(todoDetailsBtn);
            todoBtnsDiv.appendChild(deleteTodoBtn);
            todoEl.appendChild(todoTitleEl);
            todoEl.appendChild(todoDateEl);
            todoEl.appendChild(todoBtnsDiv);
            DomModule.todoListContainer.appendChild(todoEl);
        });
    } else {
        /*
		- If there are no todos for the active tab:
		1. Show section that tells user that they no have todos
		2. Hide the todoListContainer since there aren't any todos to be
			shown; this also gives us space on the layout
		*/
        DomModule.emptyTabSection.classList.remove("content-hidden");
        DomModule.todoListContainer.classList.add("content-hidden");
    }
}

function renderInitialPage() {
    updateSidebarTabs();
    renderMainContent();
    hideModal();
}

export { renderInitialPage, renderMainContent };
