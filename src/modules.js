import { createInitialPage } from "./initialPage.js";
import { Todo, Project } from "./classes.js";
import "./style.css";
import WebFont from "webfontloader";
WebFont.load({
    google: {
        families: ["Roboto", "Open Sans"],
    },
});

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

		tabsModule[tabsModule.activeTabID].tabProject;

	Changes:

		1. Change getActiveProject() so that it accomodates the new structure
		2. Change how we distribute todos in the updateSideBarTabs so that it 
			records project and todo indices 
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

    // Clears all main tabs of their todos, and their related information
    clearMainTabTodos: function () {
        this.mainTabs.forEach((tabObj) => {
            const tabID = tabObj.tabID;
            this[tabID].tabProject.projectTodos = [];
            this[tabID].tabProject.projectIndices = [];
            this[tabID].tabProject.todoIndices = [];
        });
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
	- Gets the 'project' class instance that's associated with the 
	sidebar tab that the user is currently on.

	1. If it's a main tab, a tab the user didn't create, return the project 
		representing the tab.
	2. Else, it's a project tab, one created by the user, so return the project
		representing said tab.
	*/
    getActiveProject: function () {
        if (tabsModule.activeTabType == tabsModule.mainTabType) {
            return tabsModule[tabsModule.activeTabID].tabProject;
        } else {
            return tabsModule.projectsList[tabsModule.activeTabID];
        }
    },

    getActiveTodo: () =>
        tabsModule.getActiveProject().projectTodos[tabsModule.activeTodoIndex],
    activeTodoIndex: "",
};

const modalModule = {
    // boolean that keeps track of and differentiates whether the user is editing something or adding something new
    isEdit: true,
    activeContentID: "",
    modalTitle: "",
};

const DomModule = (() => {
    // Create and load page on the document
    const page = createInitialPage();
    document.body.appendChild(page);

    // Get Important Dom elements
    const overlayEl = document.querySelector(".overlay");
    const modalEl = document.querySelector(".modal");

    const modalTitleEl = document.querySelector("#modal-header-title-el");
    const closeModalBtn = document.querySelector("#close-modal-btn");

    const todoForm = document.querySelector("#todo-form");
    const todoTitleInput = document.querySelector("#todo-title-field");
    const todoDescInput = document.querySelector("#todo-description-field");
    const todoDateInput = document.querySelector("#todo-due-date-field");
    const todoPrioritySelect = document.querySelector(
        "#todo-priority-drop-down"
    );

    const projectForm = document.querySelector("#project-form");
    const projectTitleInput = document.querySelector("#project-title-field");

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
    const modalContentList = [todoForm, projectForm, todoDetailsSection];

    const mainTabSection = document.querySelector(".main-tab-section");
    const projectsTabSection = document.querySelector(".projects-tab-section");
    const createProjectBtn = document.querySelector("#create-project-btn");
    const getSidebarTabs = () => document.querySelectorAll("li.sidebar-tab");
    const getActiveTab = () =>
        document.querySelector("li.sidebar-tab[data-active='true']");

    const mainContentHeader = document.querySelector("#main-content-header");
    const tabTitleEl = document.querySelector("#tab-title-el");
    const projectBtnsDiv = document.querySelector("#project-btns-container");
    const todoListContainer = document.querySelector("#todo-list-container");
    const emptyTabSection = document.querySelector("#empty-tab-section");

    return {
        overlayEl,
        modalEl,
        modalTitleEl,
        closeModalBtn,
        todoForm,
        todoTitleInput,
        todoDescInput,
        todoDateInput,
        todoPrioritySelect,
        projectForm,
        projectTitleInput,
        todoDetailsSection,
        todoDetailsTitleEl,
        todoDetailsDescEl,
        todoDetailsPriorityEl,
        todoDetailsDateEl,
        modalContentList,
        mainTabSection,
        projectsTabSection,
        createProjectBtn,
        getSidebarTabs,
        getActiveTab,
        mainContentHeader,
        tabTitleEl,
        projectBtnsDiv,
        todoListContainer,
        emptyTabSection,
    };
})();

export { tabsModule, modalModule, DomModule };
