import { createInitialPage } from "./initialPage.js";
import { Todo, Project } from "./classes.js";

// Import the images from their respective locations, so the assets folder
// imageModule: module that contains all images used in application
const imageModule = {
    github_icon: require("./assets/icons/github-mark.svg"),
    todo_list_icon: require("./assets/icons/todo_list_icon.svg"),
};

// Object that contains all tabs
const tabsModule = {
    /*
	- projectTabType: String indicating a tab, and the 'project' class instance
		representing it, was created by the user, as they created a new 'project'
		to work on
	- mainTabType: String indicating a tab, and the 'project' class instance
		representing it, wasn't created by the user, as it was there by default.
	- Text content and IDS for the mainTabs, which 
		will be used in initialPage.js to create those tabs
	*/
    projectTabType: "projectTab",
    mainTabType: "mainTab",
    mainTabs: [
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
    ],
    /*
	- Represent the Home, Today, and Week tabs
	- NOTE: The tab IDs are available in initialPage.js. Make sure the tabIDs from the 
		createPageSidebar() in 'mainTabs' array match the keys here. This is because
		we use the data attribute of 'tabId' in rendering.js where we render 
		information such as the amount of todos per tab.
	1. tabProject: Project that represents the main tab's todos, and the 
		tab's title.
	2. projectIndices: A parallel list, representing the index of the project 
		originally containing that todo, the index correlating to projectsList
	3. todoIndices: A parallel list, representing the index of the todo 
		in the user project.
	*/
    Home: {
        tabProject: new Project("Home"),
        todoIndices: [],
        projectIndices: [],
    },
    Today: {
        tabProject: new Project("Today"),
        todoIndices: [],
        projectIndices: [],
    },
    Week: {
        tabProject: new Project("Week"),
        todoIndices: [],
        projectIndices: [],
    },

    // Represents more of custom projects/tabs that the user makes rather than
    // default or predefined 'projects' of 'Home', 'Today', and 'Week'
    projectsList: [],
    /*
	- activeTabID: Either represents keyterms 'Home', 'Today', and 'Week' for the 
		tab IDs for the main tabs, or it represents the index of a 'project' that's 
		linked to a tab. 
	*/
    activeTabID: "Home",
    activeTabType: "mainTab",

    /*
	1. selectedProjectIndex: Index for locating the specific project index that 
		a todo belongs to in projectsList
	2. selectedTodoIndex: Index for locating specific todo in the project class 
		instance's array of todos.
	NOTE: Very helpful for locating a todo for purposes such as editing, deleting,
		or displaying data. Know that selectedProjectIndex should not be 
		confused with activeTabID, as 'selectedProjectIndex' only records indices and 
		should only be used in the context of targeting todos for the above 
		operations. Leave the task of keeping track of tab information to 
		attributes such as 'activeTabID' and 'activeTabType'
	*/
    selectedProjectIndex: "",
    selectedTodoIndex: "",
};

const modalModule = {
    // boolean that keeps track of and differentiates whether the user is editing something or adding something new
    isEdit: true,
    activeContentID: "",
    modalTitle: "",
};

const themeModule = {
    isDarkTheme: false,
};

const DomModule = (() => {
    // Create and load page on the document
    const page = createInitialPage();
    document.body.appendChild(page);

    // Get button for toggling the theme of the page
    const contentDiv = document.querySelector("#content");
    const toggleThemeBtn = document.querySelector("#toggle-theme-btn");

    // Get overlay and modal elements
    const overlayEl = document.querySelector(".overlay");
    const modalEl = document.querySelector(".modal");
    const modalTitleEl = document.querySelector("#modal-header-title-el");
    const closeModalBtn = document.querySelector("#close-modal-btn");

    // Todo form elements
    const todoForm = document.querySelector("#todo-form");
    const todoTitleInput = document.querySelector("#todo-title-field");
    const todoDescInput = document.querySelector("#todo-description-field");
    const todoDateInput = document.querySelector("#todo-due-date-field");
    const todoPrioritySelect = document.querySelector(
        "#todo-priority-drop-down"
    );
    const todoCompletionInput = document.querySelector("#todo-complete-input");

    // Project form elements
    const projectForm = document.querySelector("#project-form");
    const projectTitleInput = document.querySelector("#project-title-field");

    // Todo details section elements
    const todoDetailsSection = document.querySelector("#todo-details-section");
    const todoDetailsTitleEl = document.querySelector("#todo-details-title-el");
    const todoDetailsDescEl = document.querySelector(
        "#todo-details-description-el"
    );
    const todoDetailsPriorityEl = document.querySelector(
        "#todo-details-priority-el"
    );
    const todoDetailsDateEl = document.querySelector(
        "#todo-details-dueDate-el"
    );
    const todoDetailsCompletionEl = document.querySelector(
        "#todo-details-completion-el"
    );

    // Get a list of modal children, which will be the content we'll be displaying
    const modalMainContent = document.querySelector(".modal-main-content");
    const modalContentList = modalMainContent.children;

    // Get section in sidebar that holds main tabs
    const mainTabSection = document.querySelector(".main-tab-section");
    // Get section in sidebar that holds projects/user created tabs
    const projectsTabSection = document.querySelector(".projects-tab-section");
    const createProjectBtn = document.querySelector("#create-project-btn");

    // Create functions that selector all sidebar tabs, and gets active tab
    const getSidebarTabs = () => document.querySelectorAll("li.sidebar-tab");
    const getActiveTab = () =>
        document.querySelector("li.sidebar-tab[data-active='true']");

    // Get elements for the main content section
    const mainContentHeader = document.querySelector("#main-content-header");
    const tabTitleEl = document.querySelector("#tab-title-el");
    const projectBtnsDiv = document.querySelector("#project-btns-container");

    const addTodoBtn = document.querySelector("#add-todo-btn");
    const editProjectBtn = document.querySelector("#edit-project-btn");
    const deleteProjectBtn = document.querySelector("#delete-project-btn");

    const todoListContainer = document.querySelector("#todo-list-container");
    const emptyTabSection = document.querySelector("#empty-tab-section");

    return {
        contentDiv,
        toggleThemeBtn,
        overlayEl,
        modalEl,
        modalTitleEl,
        closeModalBtn,
        todoForm,
        todoTitleInput,
        todoDescInput,
        todoDateInput,
        todoPrioritySelect,
        todoCompletionInput,
        projectForm,
        projectTitleInput,
        todoDetailsSection,
        todoDetailsTitleEl,
        todoDetailsDescEl,
        todoDetailsPriorityEl,
        todoDetailsDateEl,
        todoDetailsCompletionEl,
        modalContentList,
        mainTabSection,
        projectsTabSection,
        createProjectBtn,
        getSidebarTabs,
        getActiveTab,
        mainContentHeader,
        tabTitleEl,
        projectBtnsDiv,
        addTodoBtn,
        editProjectBtn,
        deleteProjectBtn,
        todoListContainer,
        emptyTabSection,
    };
})();

// Updates the projects in local storage
function updateLocalStorageProjects() {
    localStorage.setItem("projects", JSON.stringify(tabsModule.projectsList));
}

/*
- Gets projects from localStorage nad puts them in the projectsList
*/
function loadLocalStorageProjects() {
    // If there are projects in local storage
    if (localStorage.getItem("projects")) {
        let localStorageProjects = JSON.parse(localStorage.getItem("projects"));
        localStorageProjects = localStorageProjects.map((projectObj) => {
            // Create project instance
            const projectTitle = projectObj.title.title;
            const projectTodos = projectObj.projectTodos;
            const project = new Project(projectTitle);

            // Create all todos instances and push it to the project instance
            for (const todoObj of projectTodos) {
                const todo = new Todo(
                    todoObj.title.title,
                    todoObj.description.description,
                    todoObj.dueDate,
                    todoObj.priority.priority,
                    todoObj.isComplete.isComplete
                );
                project.addTodo(todo);
            }
            // Return project instance
            return project;
        });
        // Load those projects into the 'projectsList'
        tabsModule.projectsList = localStorageProjects;
    } else {
        // Else, if there aren't any projects in local storage
        // Set projectsList to a blank array, if it isn't already
        tabsModule.projectsList = [];
    }
}

// Clears all main tabs of their todos, and their related information
function clearMainTabTodos() {
    tabsModule.mainTabs.forEach((tabObj) => {
        const tabID = tabObj.tabID;
        tabsModule[tabID].tabProject.projectTodos = [];
        tabsModule[tabID].projectIndices = [];
        tabsModule[tabID].todoIndices = [];
    });
}

/*
- Gets the 'project' class instance that's associated with the 
sidebar tab that the user is currently on.
1. If it's a main tab, a tab the user didn't create, return the project 
	representing the tab.
2. Else, it's a project tab, one created by the user, so return the project
	representing said tab.
*/
function getActiveProject() {
    if (tabsModule.activeTabType == tabsModule.mainTabType) {
        return tabsModule[tabsModule.activeTabID].tabProject;
    } else {
        return tabsModule.projectsList[tabsModule.activeTabID];
    }
}

/*
- Returns a todo class instance based on 'selectedProjectIndex' and 
	'selectedTodoIndex'.
*/
function getSelectedTodo() {
    const project = tabsModule.projectsList[tabsModule.selectedProjectIndex];
    const todo = project.projectTodos[tabsModule.selectedTodoIndex];
    return todo;
}

/*
NOTE: These functions below only manipulate the data-structures, you will
	need to call the function renderPage(), to see any changes in the sidebar 
	or main-content sections.
*/
// Adds new project to the projectsList
function addProject(title) {
    tabsModule.projectsList.push(new Project(title));
    updateLocalStorageProjects();
}

/*
- Edits the active project in the projectsList
NOTE: We assume that to edit a project, the user must be on that project's page,
	there only being able to edit a project when they're on that project's tab. 
	Thus allowing the program to have already recorded "activeTabID", which 
	is the index the project is at in 'projectsList'. Letting us easily locate
	the project that the user wants. 
NOTE 2: Since there's no button to edit the project on the main tabs, we won't run
	into the error of trying to edit the main tabs.
*/
function editProject(title) {
    tabsModule.projectsList[tabsModule.activeTabID].title.setTitle(title);
    updateLocalStorageProjects();
}

/*
- Deletes the active project from the projectsList
1. Splices array to get rid of project class instance
2. Sets the 'activeTabID' to the 'Home' tab. This is because 
	we need to redirect the user somewhere after they've deleted the project.
	Since the tab they were on was dependent on that project existing. So
	an easy solution is setting the activeTabID to a tab that's always available.
3. Then set teh activeTabType to 'mainTab' to indicate that now we're on a maintab.
	This allows getActiveProject to correctly get the project representing a main 
	tab.
*/
function deleteProject() {
    tabsModule.projectsList.splice(tabsModule.activeTabID, 1);
    tabsModule.activeTabID = tabsModule.mainTabs[0].tabID;
    tabsModule.activeTabType = tabsModule.mainTabType;
    updateLocalStorageProjects();
}

// Adds a todo
function addTodo(title, description, dueDate, priority, isComplete) {
    const newTodo = new Todo(title, description, dueDate, priority, isComplete);
    tabsModule.projectsList[tabsModule.activeTabID].addTodo(newTodo);
    updateLocalStorageProjects();
}

// Edits a todo, by replacing the old one wiht a new one that has the user's edits
function editTodo(title, description, dueDate, priority, isComplete) {
    const newTodo = new Todo(title, description, dueDate, priority, isComplete);
    /*
	1. tabsModule.projectsList[tabsModule.selectedProjectIndex]: The project class instance 
		that contains the todo that we want to edit
	2. replaceTodoAtIndex(tabsModule.selectedTodoIndex, newTodo): Replaces todo class 
		instance at 'selectedTodoIndex', the old one that the user wants to edit, with a new todo instance.
	*/
    tabsModule.projectsList[tabsModule.selectedProjectIndex].replaceTodoAtIndex(
        tabsModule.selectedTodoIndex,
        newTodo
    );
    updateLocalStorageProjects();
}

// Deletes a todo based on the selected todo and project indices
function deleteTodo() {
    tabsModule.projectsList[tabsModule.selectedProjectIndex].removeTodoAtIndex(
        tabsModule.selectedTodoIndex
    );
    updateLocalStorageProjects();
}

export {
    imageModule,
    tabsModule,
    themeModule,
    modalModule,
    DomModule,
    loadLocalStorageProjects,
    clearMainTabTodos,
    getActiveProject,
    getSelectedTodo,
    addProject,
    editProject,
    deleteProject,
    addTodo,
    editTodo,
    deleteTodo,
};
