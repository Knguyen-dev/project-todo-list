/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Using composition style of making classes for more flexibility.
var Title = /*#__PURE__*/function () {
  function Title(title) {
    _classCallCheck(this, Title);
    this.title = title;
  }
  _createClass(Title, [{
    key: "setTitle",
    value: function setTitle(newTitle) {
      this.title = newTitle;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.title;
    }
  }]);
  return Title;
}();
var Description = /*#__PURE__*/function () {
  function Description(description) {
    _classCallCheck(this, Description);
    this.description = description;
  }
  _createClass(Description, [{
    key: "setDescription",
    value: function setDescription(newDescription) {
      this.description = newDescription;
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      return this.description;
    }
  }]);
  return Description;
}();
var Priority = /*#__PURE__*/function () {
  function Priority(priority) {
    _classCallCheck(this, Priority);
    this.priority = priority;
  }
  _createClass(Priority, [{
    key: "setPriority",
    value: function setPriority(newPriority) {
      this.priority = newPriority;
    }
  }, {
    key: "getPriority",
    value: function getPriority() {
      return this.priority;
    }
  }]);
  return Priority;
}();
/*
- Completion class to see if a todo is complete

NOTE: Yes, completion can be described in one boolean, but the idea behind 
	it is that if multiple classes need this attribute of being 'Complete', we don't
	have to deal with making functions set or get their completion status
*/
var Completion = /*#__PURE__*/function () {
  function Completion(isComplete) {
    _classCallCheck(this, Completion);
    this.isComplete = isComplete;
  }
  _createClass(Completion, [{
    key: "setCompletion",
    value: function setCompletion(isComplete) {
      this.isComplete = isComplete;
    }
  }, {
    key: "getCompletion",
    value: function getCompletion() {
      return this.isComplete;
    }
  }]);
  return Completion;
}(); // Todo class: dueDate is just the value of the input date element
/*
NOTE: isComplete is default false because of the idea that if you create a todo or 
	are given a task in rela life, it's likely not going to be immediately completed.
*/
var Todo = /*#__PURE__*/_createClass(function Todo(title, description, dueDate, priority) {
  var isComplete = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  _classCallCheck(this, Todo);
  this.title = new Title(title);
  this.description = new Description(description);
  this.dueDate = new Date(dueDate);
  this.priority = new Priority(priority);
  this.isComplete = new Completion(isComplete);
}); // The project class: has title, but should have a list of todos
var Project = /*#__PURE__*/function () {
  function Project() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Sample Project";
    _classCallCheck(this, Project);
    this.title = new Title(title);
    this.projectTodos = [];
  }
  _createClass(Project, [{
    key: "addTodo",
    value: function addTodo(todo) {
      this.projectTodos.push(todo);
    }

    // Replaces todo class instance at index 'i' by replacing
    // old todo, with a new todo that has the new information
  }, {
    key: "replaceTodoAtIndex",
    value: function replaceTodoAtIndex(i, todo) {
      this.projectTodos[i] = todo;
    }
  }, {
    key: "removeTodoAtIndex",
    value: function removeTodoAtIndex(i) {
      this.projectTodos.splice(i, 1);
    }

    // Gets number of incomplete todos from projectTodos
  }, {
    key: "getIncompleteTodoCount",
    value: function getIncompleteTodoCount() {
      var count = 0;
      this.projectTodos.forEach(function (todo) {
        if (!todo.isComplete.getCompletion()) {
          count += 1;
        }
      });
      return count;
    }
  }]);
  return Project;
}();


/***/ }),

/***/ "./src/initialPage.js":
/*!****************************!*\
  !*** ./src/initialPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInitialPage": () => (/* binding */ createInitialPage)
/* harmony export */ });
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


// Creates and returns fieldset with input elements for a form
function createFormField(fieldObj) {
  var fieldset = document.createElement("fieldset");
  var label = document.createElement("label");
  label.textContent = fieldObj.labelText;
  label.htmlFor = fieldObj.inputID;
  fieldset.appendChild(label);
  // If the input element we're making is a drop down
  if (fieldObj.inputType == "select") {
    var selectEl = document.createElement("select");
    selectEl.id = fieldObj.inputID;
    selectEl.name = fieldObj.inputName;
    fieldObj.options.forEach(function (option) {
      var optionEl = document.createElement("option");
      optionEl.textContent = option.text;
      optionEl.value = option.value;
      selectEl.appendChild(optionEl);
    });
    fieldset.appendChild(selectEl);
  } else {
    // Else if it's input element that accepts text
    var inputEl = document.createElement("input");
    inputEl.type = fieldObj.inputType;
    inputEl.id = fieldObj.inputID;
    inputEl.name = fieldObj.inputName;
    if (fieldObj.maxLength) {
      inputEl.maxLength = fieldObj.maxLength;
    }
    if (fieldObj.placeholderText) {
      inputEl.placeholder = fieldObj.placeholderText;
    }
    inputEl.required = fieldObj.isRequired;
    fieldset.appendChild(inputEl);
  }
  return fieldset;
}

// Creates mark up for the form for creating/editing todos
function createTodoForm() {
  var form = document.createElement("form");
  form.className = "modal-form";
  form.id = "todo-form";
  var fields = [{
    labelText: "Todo Title:",
    inputType: "text",
    inputID: "todo-title-field",
    inputName: "todo title",
    placeholderText: "E.g. 'Workout'",
    maxLength: 20,
    isRequired: true
  }, {
    labelText: "Todo Description:",
    inputType: "text",
    inputID: "todo-description-field",
    inputName: "todo description",
    placeholderText: "E.g. Go to the gym in the evening",
    maxLength: 100,
    isRequired: true
  }, {
    labelText: "Due Date: ",
    inputType: "date",
    inputID: "todo-due-date-field",
    inputName: "todo due date",
    isRequired: true
  }, {
    labelText: "Todo Priority:",
    inputType: "select",
    inputID: "todo-priority-drop-down",
    inputName: "priority-drop-down",
    options: [{
      text: "Low",
      value: "Low"
    }, {
      text: "Medium",
      value: "Medium"
    }, {
      text: "High",
      value: "High"
    }]
  }, {
    labelText: "Mark as Complete:",
    inputType: "checkbox",
    inputID: "todo-complete-input",
    inputName: "mark-completed-checkbox",
    isRequired: false
  }];
  // Create the fieldsets for the form fields
  for (var _i = 0, _fields = fields; _i < _fields.length; _i++) {
    var field = _fields[_i];
    var fieldset = createFormField(field);
    form.appendChild(fieldset);
  }
  // Create submit button and return the form
  var submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.type = "submit";
  submitBtn.id = "todo-submit-btn";
  form.appendChild(submitBtn);
  return form;
}

// Creates the mark up for the form for 'creating/editing projects'
function createProjectForm() {
  var form = document.createElement("form");
  form.className = "modal-form";
  form.id = "project-form";
  var fields = [{
    labelText: "Project Title:",
    inputType: "text",
    inputID: "project-title-field",
    inputName: "project title",
    placeholderText: "E.g. Compose a new album",
    maxLength: 20
  }];
  // Create the fieldsets for the form fields
  for (var _i2 = 0, _fields2 = fields; _i2 < _fields2.length; _i2++) {
    var field = _fields2[_i2];
    var fieldset = createFormField(field);
    form.appendChild(fieldset);
  }
  // Create the sumit button and return the form
  var submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.type = "submit";
  submitBtn.id = "project-submit-btn";
  form.appendChild(submitBtn);
  return form;
}

// Creates a section that shows the details of a todo
function createTodoDetailsSection() {
  var todoDetailsSections = document.createElement("section");
  todoDetailsSections.id = "todo-details-section";
  todoDetailsSections.innerHTML = "\n\t<h3>Title: <span id=\"todo-details-title-el\"></span></h3>\n\t<p>Details: <span id=\"todo-details-description-el\"></span></p>\n\t<p>Priority: <span id=\"todo-details-priority-el\"></span></p>\n\t<p>Due Date: <span id=\"todo-details-dueDate-el\"></span></p>\n\t<p>Completion Status: <span id=\"todo-details-completion-el\"></span></p>\n\t";
  return todoDetailsSections;
}

// create the modal
function createOverlay() {
  var overlayEl = document.createElement("div");
  overlayEl.classList.add("overlay");
  return overlayEl;
}

// Create the modal container
function createModal() {
  var modalEl = document.createElement("div");
  modalEl.classList.add("modal");

  // Create the header for the modal
  var modalHeader = document.createElement("header");
  modalHeader.classList.add("modal-header");

  // Create the title of the header
  var modalHeaderTitleEl = document.createElement("h2");
  modalHeaderTitleEl.id = "modal-header-title-el";

  // Create the close button for hte modal
  var closeModalBtn = document.createElement("button");
  closeModalBtn.id = "close-modal-btn";
  closeModalBtn.textContent = "Close";

  // Create the main-content section where different types of content will be loaded into the modal
  // depending on what the user does.
  var modalMainContentEl = document.createElement("section");
  modalMainContentEl.classList.add("modal-main-content");

  // Creates the elements and section that'll be shown on the modal's main content
  var todoForm = createTodoForm();
  var projectForm = createProjectForm();
  var todoDetailsSection = createTodoDetailsSection();
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
  var header = document.createElement("header");
  header.id = "page-header";

  // Create the container that has the app's logo and name
  var appLogoContainer = document.createElement("div");
  appLogoContainer.classList.add("app-logo-container");
  appLogoContainer.innerHTML = "\n\t\t\t\t\t<img src=\"".concat(_modules_js__WEBPACK_IMPORTED_MODULE_0__.imageModule.todo_list_icon, "\" alt=\"Logo of app\">\n\t\t\t\t\t<h1 id=\"app-title-el\">Todo list</h1>");
  header.appendChild(appLogoContainer);

  // Create user info section of the header
  var userInfoSection = document.createElement("div");
  userInfoSection.classList.add("user-info-section");
  userInfoSection.innerHTML = "<h2>Hello, <span id=\"user-email-el\">example@gmail.com</span></h2>\n\t\t\t\t\t\t<button id=\"toggle-theme-btn\">Toggle theme</button>\n\t\t\t\t\t<a href=\"#\" id=\"user-link\">Sign out</a>";
  header.appendChild(userInfoSection);
  return header;
}

// Function for creating the sidebar
function createPageSidebar() {
  var sidebarEl = document.createElement("section");
  sidebarEl.id = "page-sidebar";

  // Create main tab section for the sidebar
  var mainTabSection = document.createElement("ul");
  mainTabSection.classList.add("sidebar-tab-section", "main-tab-section");

  // Create the main tabs, and then append them to the mainTabSection of our sidebar
  var _iterator = _createForOfIteratorHelper(_modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.mainTabs),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var tab = _step.value;
      var listEl = document.createElement("li");
      listEl.className = "sidebar-tab";
      listEl.setAttribute("data-tab-type", _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.mainTabType);
      listEl.setAttribute("data-tab-id", tab.tabID);
      var tabTitleEl = document.createElement("span");
      tabTitleEl.textContent = tab.tabText;
      tabTitleEl.className = "sidebar-tab-title";
      var todoCountEl = document.createElement("span");
      todoCountEl.className = "todo-count-el";
      listEl.appendChild(tabTitleEl);
      listEl.appendChild(todoCountEl);
      mainTabSection.appendChild(listEl);
    }
    // Create the title "Projects" for a section in the sidebar
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var sidebarSectionTitleEl = document.createElement("h1");
  sidebarSectionTitleEl.id = "sidebar-section-title";
  sidebarSectionTitleEl.textContent = "Projects";

  // Create projects tab section
  var projectsTabSection = document.createElement("ul");
  projectsTabSection.classList.add("sidebar-tab-section", "projects-tab-section");

  // Create the button for adding/creating a project; add data attribute to help with form logic to see if they're adding or editing a project
  var createProjectBtn = document.createElement("button");
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
  var mainContent = document.createElement("section");
  mainContent.id = "page-main-content";

  // Create header for the main content section
  var mainContentHeader = document.createElement("header");
  mainContentHeader.id = "main-content-header";
  mainContentHeader.innerHTML = "<h1 id=\"tab-title-el\">Sample Tab Title</h1>";

  // Create section for button that interact with a project that the user created
  var projectBtnsDiv = document.createElement("div");
  projectBtnsDiv.id = "project-btns-container";
  var addTodoBtn = document.createElement("button");
  addTodoBtn.id = "add-todo-btn";
  addTodoBtn.classList.add("green-btn");
  addTodoBtn.textContent = "Add Todo";
  var editProjectBtn = document.createElement("button");
  editProjectBtn.id = "edit-project-btn";
  editProjectBtn.classList.add("blue-btn");
  editProjectBtn.textContent = "Edit Project";
  var deleteProjectBtn = document.createElement("button");
  deleteProjectBtn.id = "delete-project-btn";
  deleteProjectBtn.classList.add("red-btn");
  deleteProjectBtn.textContent = "Delete Project";
  projectBtnsDiv.appendChild(addTodoBtn);
  projectBtnsDiv.appendChild(editProjectBtn);
  projectBtnsDiv.appendChild(deleteProjectBtn);
  mainContentHeader.appendChild(projectBtnsDiv);
  var todoListContainer = document.createElement("ul");
  todoListContainer.id = "todo-list-container";

  // Create div that shows the user a message when there are no todos
  var emptyTabSection = document.createElement("section");
  emptyTabSection.id = "empty-tab-section";

  // Create message elements to show the user (main message)
  var mainMessageEl = document.createElement("h1");
  mainMessageEl.id = "empty-tab-message-primary";
  mainMessageEl.textContent = "No todos in this tab yet!";

  // Create the sub message
  var subMessageEl = document.createElement("p");
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
  var footer = document.createElement("footer");
  footer.id = "page-footer";

  // Create icon link section/container
  var footerIconContainer = document.createElement("div");
  footerIconContainer.classList.add("footer-icon-container");

  // Create the link and the image for the link
  var iconLink = document.createElement("a");
  var iconImage = document.createElement("img");
  iconImage.src = _modules_js__WEBPACK_IMPORTED_MODULE_0__.imageModule.github_icon;
  iconImage.classList.add("site-icons");

  // Create the description of the footer; Create date element
  var footerMessageEl = document.createElement("p");
  footerMessageEl.id = "footer-message-el";
  footerMessageEl.textContent = "All credit and rights reserved to the hot ice cream company - ".concat(new Date().getFullYear());

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
  var contentDiv = document.createElement("div");
  contentDiv.id = "content";
  var overlayEl = createOverlay();
  var modalEl = createModal();
  // NOTE: projectContainer is just another container that has all of our page's elements
  // excluding the modal and its content
  var projectContainer = document.createElement("div");
  projectContainer.id = "project-container";
  var pageHeader = createPageHeader();
  var pageSidebar = createPageSidebar();
  var pageMainContent = createMainContentSection();
  var pageFooter = createPageFooter();

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


/***/ }),

/***/ "./src/modules.js":
/*!************************!*\
  !*** ./src/modules.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomModule": () => (/* binding */ DomModule),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "clearMainTabTodos": () => (/* binding */ clearMainTabTodos),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "editProject": () => (/* binding */ editProject),
/* harmony export */   "editTodo": () => (/* binding */ editTodo),
/* harmony export */   "getActiveProject": () => (/* binding */ getActiveProject),
/* harmony export */   "getSelectedTodo": () => (/* binding */ getSelectedTodo),
/* harmony export */   "imageModule": () => (/* binding */ imageModule),
/* harmony export */   "loadLocalStorageProjects": () => (/* binding */ loadLocalStorageProjects),
/* harmony export */   "modalModule": () => (/* binding */ modalModule),
/* harmony export */   "tabsModule": () => (/* binding */ tabsModule),
/* harmony export */   "themeModule": () => (/* binding */ themeModule)
/* harmony export */ });
/* harmony import */ var _initialPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialPage.js */ "./src/initialPage.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./src/classes.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



// Import the images from their respective locations, so the assets folder
// imageModule: module that contains all images used in application
var imageModule = {
  github_icon: __webpack_require__(/*! ./assets/icons/github-mark.svg */ "./src/assets/icons/github-mark.svg"),
  todo_list_icon: __webpack_require__(/*! ./assets/icons/todo_list_icon.svg */ "./src/assets/icons/todo_list_icon.svg")
};

// Object that contains all tabs
var tabsModule = {
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
  mainTabs: [{
    tabID: "Home",
    tabText: "Home"
  }, {
    tabID: "Today",
    tabText: "Today"
  }, {
    tabID: "Week",
    tabText: "Week"
  }],
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
    tabProject: new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Project("Home"),
    todoIndices: [],
    projectIndices: []
  },
  Today: {
    tabProject: new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Project("Today"),
    todoIndices: [],
    projectIndices: []
  },
  Week: {
    tabProject: new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Project("Week"),
    todoIndices: [],
    projectIndices: []
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
  selectedTodoIndex: ""
};
var modalModule = {
  // boolean that keeps track of and differentiates whether the user is editing something or adding something new
  isEdit: true,
  activeContentID: "",
  modalTitle: ""
};
var themeModule = {
  isDarkTheme: false
};
var DomModule = function () {
  // Create and load page on the document
  var page = (0,_initialPage_js__WEBPACK_IMPORTED_MODULE_0__.createInitialPage)();
  document.body.appendChild(page);

  // Get button for toggling the theme of the page
  var contentDiv = document.querySelector("#content");
  var toggleThemeBtn = document.querySelector("#toggle-theme-btn");

  // Get overlay and modal elements
  var overlayEl = document.querySelector(".overlay");
  var modalEl = document.querySelector(".modal");
  var modalTitleEl = document.querySelector("#modal-header-title-el");
  var closeModalBtn = document.querySelector("#close-modal-btn");

  // Todo form elements
  var todoForm = document.querySelector("#todo-form");
  var todoTitleInput = document.querySelector("#todo-title-field");
  var todoDescInput = document.querySelector("#todo-description-field");
  var todoDateInput = document.querySelector("#todo-due-date-field");
  var todoPrioritySelect = document.querySelector("#todo-priority-drop-down");
  var todoCompletionInput = document.querySelector("#todo-complete-input");

  // Project form elements
  var projectForm = document.querySelector("#project-form");
  var projectTitleInput = document.querySelector("#project-title-field");

  // Todo details section elements
  var todoDetailsSection = document.querySelector("#todo-details-section");
  var todoDetailsTitleEl = document.querySelector("#todo-details-title-el");
  var todoDetailsDescEl = document.querySelector("#todo-details-description-el");
  var todoDetailsPriorityEl = document.querySelector("#todo-details-priority-el");
  var todoDetailsDateEl = document.querySelector("#todo-details-dueDate-el");
  var todoDetailsCompletionEl = document.querySelector("#todo-details-completion-el");

  // Get a list of modal children, which will be the content we'll be displaying
  var modalMainContent = document.querySelector(".modal-main-content");
  var modalContentList = modalMainContent.children;

  // Get section in sidebar that holds main tabs
  var mainTabSection = document.querySelector(".main-tab-section");
  // Get section in sidebar that holds projects/user created tabs
  var projectsTabSection = document.querySelector(".projects-tab-section");
  var createProjectBtn = document.querySelector("#create-project-btn");

  // Create functions that selector all sidebar tabs, and gets active tab
  var getSidebarTabs = function getSidebarTabs() {
    return document.querySelectorAll("li.sidebar-tab");
  };
  var getActiveTab = function getActiveTab() {
    return document.querySelector("li.sidebar-tab[data-active='true']");
  };

  // Get elements for the main content section
  var mainContentHeader = document.querySelector("#main-content-header");
  var tabTitleEl = document.querySelector("#tab-title-el");
  var projectBtnsDiv = document.querySelector("#project-btns-container");

  // Get buttons for interacting with user created projects
  var addTodoBtn = document.querySelector("#add-todo-btn");
  var editProjectBtn = document.querySelector("#edit-project-btn");
  var deleteProjectBtn = document.querySelector("#delete-project-btn");

  // Section that contains todo elements
  var todoListContainer = document.querySelector("#todo-list-container");

  // Section that shows up when there are no todos to be shown
  var emptyTabSection = document.querySelector("#empty-tab-section");
  return {
    contentDiv: contentDiv,
    toggleThemeBtn: toggleThemeBtn,
    overlayEl: overlayEl,
    modalEl: modalEl,
    modalTitleEl: modalTitleEl,
    closeModalBtn: closeModalBtn,
    todoForm: todoForm,
    todoTitleInput: todoTitleInput,
    todoDescInput: todoDescInput,
    todoDateInput: todoDateInput,
    todoPrioritySelect: todoPrioritySelect,
    todoCompletionInput: todoCompletionInput,
    projectForm: projectForm,
    projectTitleInput: projectTitleInput,
    todoDetailsSection: todoDetailsSection,
    todoDetailsTitleEl: todoDetailsTitleEl,
    todoDetailsDescEl: todoDetailsDescEl,
    todoDetailsPriorityEl: todoDetailsPriorityEl,
    todoDetailsDateEl: todoDetailsDateEl,
    todoDetailsCompletionEl: todoDetailsCompletionEl,
    modalContentList: modalContentList,
    mainTabSection: mainTabSection,
    projectsTabSection: projectsTabSection,
    createProjectBtn: createProjectBtn,
    getSidebarTabs: getSidebarTabs,
    getActiveTab: getActiveTab,
    mainContentHeader: mainContentHeader,
    tabTitleEl: tabTitleEl,
    projectBtnsDiv: projectBtnsDiv,
    addTodoBtn: addTodoBtn,
    editProjectBtn: editProjectBtn,
    deleteProjectBtn: deleteProjectBtn,
    todoListContainer: todoListContainer,
    emptyTabSection: emptyTabSection
  };
}();

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
    var localStorageProjects = JSON.parse(localStorage.getItem("projects"));
    localStorageProjects = localStorageProjects.map(function (projectObj) {
      // Create project instance
      var projectTitle = projectObj.title.title;
      var projectTodos = projectObj.projectTodos;
      var project = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Project(projectTitle);

      // Create all todos instances and push it to the project instance
      var _iterator = _createForOfIteratorHelper(projectTodos),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var todoObj = _step.value;
          var todo = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Todo(todoObj.title.title, todoObj.description.description, todoObj.dueDate, todoObj.priority.priority, todoObj.isComplete.isComplete);
          project.addTodo(todo);
        }
        // Return project instance
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
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
  tabsModule.mainTabs.forEach(function (tabObj) {
    var tabID = tabObj.tabID;
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
  var project = tabsModule.projectsList[tabsModule.selectedProjectIndex];
  var todo = project.projectTodos[tabsModule.selectedTodoIndex];
  return todo;
}

/*
NOTE: These functions below only manipulate the data-structures, you will
	need to call the function renderPage(), to see any changes in the sidebar 
	or main-content sections.
*/
// Adds new project to the projectsList
function addProject(title) {
  tabsModule.projectsList.push(new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Project(title));
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
  var newTodo = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Todo(title, description, dueDate, priority, isComplete);
  tabsModule.projectsList[tabsModule.activeTabID].addTodo(newTodo);
  updateLocalStorageProjects();
}

// Edits a todo, by replacing the old one wiht a new one that has the user's edits
function editTodo(title, description, dueDate, priority, isComplete) {
  var newTodo = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Todo(title, description, dueDate, priority, isComplete);
  /*
  1. tabsModule.projectsList[tabsModule.selectedProjectIndex]: The project class instance 
  that contains the todo that we want to edit
  2. replaceTodoAtIndex(tabsModule.selectedTodoIndex, newTodo): Replaces todo class 
  instance at 'selectedTodoIndex', the old one that the user wants to edit, with a new todo instance.
  */
  tabsModule.projectsList[tabsModule.selectedProjectIndex].replaceTodoAtIndex(tabsModule.selectedTodoIndex, newTodo);
  updateLocalStorageProjects();
}

// Deletes a todo based on the selected todo and project indices
function deleteTodo() {
  tabsModule.projectsList[tabsModule.selectedProjectIndex].removeTodoAtIndex(tabsModule.selectedTodoIndex);
  updateLocalStorageProjects();
}


/***/ }),

/***/ "./src/pageListeners.js":
/*!******************************!*\
  !*** ./src/pageListeners.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleDeleteTodoBtn": () => (/* binding */ handleDeleteTodoBtn),
/* harmony export */   "handleEditTodoBtn": () => (/* binding */ handleEditTodoBtn),
/* harmony export */   "handleSidebarTabClick": () => (/* binding */ handleSidebarTabClick),
/* harmony export */   "handleTodoDetailsBtn": () => (/* binding */ handleTodoDetailsBtn),
/* harmony export */   "loadPageListeners": () => (/* binding */ loadPageListeners)
/* harmony export */ });
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
/* harmony import */ var _rendering_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rendering.js */ "./src/rendering.js");



/*
- Toggles the theme of the page
1. Change theme boolean to opposite
2. Call rendering function to render the change.
*/
function toggleTheme() {
  if (_modules_js__WEBPACK_IMPORTED_MODULE_0__.themeModule.isDarkTheme) {
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.themeModule.isDarkTheme = false;
  } else {
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.themeModule.isDarkTheme = true;
  }
  (0,_rendering_js__WEBPACK_IMPORTED_MODULE_1__.renderTheme)();
}

/*
- Whenever a tab is clicked, we make sure it's the only tab
	that's highlighted. Then we render the main content related to it
- NOTE: We want to have handleSidebarTabClick as a callback function, since 
	we don't want duplicate event listeners, which only happens on the main tabs
	since we don't reset those
*/
function handleSidebarTabClick(e) {
  var clickedTab = e.currentTarget;
  var sidebarTabs = _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.getSidebarTabs();
  // Make sure clicked tab, only has data-active
  for (var i = 0; i < sidebarTabs.length; i++) {
    if (sidebarTabs[i] == clickedTab) {
      sidebarTabs[i].setAttribute("data-active", true);
    } else {
      sidebarTabs[i].removeAttribute("data-active");
    }
  }
  // Record the active tab's information
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.activeTabID = clickedTab.dataset.tabId;
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.activeTabType = clickedTab.dataset.tabType;
  (0,_rendering_js__WEBPACK_IMPORTED_MODULE_1__.renderMainContent)();
}

/*
- Records selectedTodoIndex and selectedProjectIndex.
1. e.currentTarget: The 'edit', 'details,' or 'delete' button on 
	a given todo element that triggered the event.
2. All todoEl, have todoIndex attribute, but if we're on a main tab,
	then it'll have a projectIndex too, indicating the index of the project
	the todo belongs to in the 'projectsList' array.
NOTE: More of a helper function to functions such as 
	'handleEditTodoBtn', 'handleTodoDetailsBtn', etc.
*/
function recordSelectedTodoIndices(e) {
  var todoEl = e.currentTarget.parentElement.parentElement;
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.selectedTodoIndex = todoEl.dataset.todoIndex;
  if (_modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.activeTabType == _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.mainTabType) {
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.selectedProjectIndex = todoEl.dataset.projectIndex;
  } else {
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.selectedProjectIndex = _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.activeTabID;
  }
}

/*
- Create event listener for the 'edit' button on individual todos.
1. Record index values, and set the isEdit boolean to true
	to indicate we're going to edit something. We Then call the function
	to show the todo form for editing.
*/
function handleEditTodoBtn(e) {
  recordSelectedTodoIndices(e);
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.isEdit = true;
  (0,_rendering_js__WEBPACK_IMPORTED_MODULE_1__.renderTodoForm)();
}

/*
- Create event listener for showing todo details
1. Record index values
2. Then call renderTodoDetails(), which will prepare a section and 
	fill out that section with the todo's information, and then it'll 
	display the modal showing that todo's details.
*/
function handleTodoDetailsBtn(e) {
  recordSelectedTodoIndices(e);
  (0,_rendering_js__WEBPACK_IMPORTED_MODULE_1__.renderTodoDetails)();
}

/*
- Create event listener for deleting a todo
1. Record index values
2. Delete the todo's data
3. Then render the page, which will update the sidebar and maincontent now 
	that the deleted todo is gone
*/
function handleDeleteTodoBtn(e) {
  recordSelectedTodoIndices(e);
  (0,_modules_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)();
  (0,_rendering_js__WEBPACK_IMPORTED_MODULE_1__.renderPage)();
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
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.createProjectBtn.addEventListener("click", function () {
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.isEdit = false;
    (0,_rendering_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectForm)();
  });
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.editProjectBtn.addEventListener("click", function () {
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.isEdit = true;
    (0,_rendering_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectForm)();
  });
  /*
  - Delete button will delete the project from the data, and render the page again.
  By rendering the page, we see the changes that happen in the sidebar and 
  main content due to deleting the project.
  */
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.deleteProjectBtn.addEventListener("click", function () {
    (0,_modules_js__WEBPACK_IMPORTED_MODULE_0__.deleteProject)();
    (0,_rendering_js__WEBPACK_IMPORTED_MODULE_1__.renderPage)();
  });

  // For showing the todo form, when we want to add todos to a project
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.addTodoBtn.addEventListener("click", function () {
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.isEdit = false;
    (0,_rendering_js__WEBPACK_IMPORTED_MODULE_1__.renderTodoForm)();
  });
}

// Sets up event listener for the project form
function setupProjectForm() {
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.projectForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (_modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.isEdit) {
      (0,_modules_js__WEBPACK_IMPORTED_MODULE_0__.editProject)(_modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.projectTitleInput.value);
    } else {
      (0,_modules_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(_modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.projectTitleInput.value);
    }
    (0,_rendering_js__WEBPACK_IMPORTED_MODULE_1__.renderPage)();
    (0,_rendering_js__WEBPACK_IMPORTED_MODULE_1__.hideModal)();
  });
}

// Sets up eveent listener for the todo form
function setupTodoForm() {
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (_modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.isEdit) {
      (0,_modules_js__WEBPACK_IMPORTED_MODULE_0__.editTodo)(_modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoTitleInput.value, _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoDescInput.value, _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoDateInput.value, _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoPrioritySelect.value, _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoCompletionInput.checked);
    } else {
      (0,_modules_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)(_modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoTitleInput.value, _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoDescInput.value, _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoDateInput.value, _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoPrioritySelect.value, _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoCompletionInput.checked);
    }
    (0,_rendering_js__WEBPACK_IMPORTED_MODULE_1__.renderPage)();
    (0,_rendering_js__WEBPACK_IMPORTED_MODULE_1__.hideModal)();
  });
}

/*
- Loads and sets up event listeners for the initial page. This excludes 
	anything dynamic, for example the sidebar tabs which are dynamically created and 
	so their event listeners are as well.
*/
function loadPageListeners() {
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.closeModalBtn.addEventListener("click", _rendering_js__WEBPACK_IMPORTED_MODULE_1__.hideModal);
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.toggleThemeBtn.addEventListener("click", toggleTheme);
  setupProjectBtns();
  setupProjectForm();
  setupTodoForm();
}


/***/ }),

/***/ "./src/rendering.js":
/*!**************************!*\
  !*** ./src/rendering.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideModal": () => (/* binding */ hideModal),
/* harmony export */   "renderMainContent": () => (/* binding */ renderMainContent),
/* harmony export */   "renderPage": () => (/* binding */ renderPage),
/* harmony export */   "renderProjectForm": () => (/* binding */ renderProjectForm),
/* harmony export */   "renderTheme": () => (/* binding */ renderTheme),
/* harmony export */   "renderTodoDetails": () => (/* binding */ renderTodoDetails),
/* harmony export */   "renderTodoForm": () => (/* binding */ renderTodoForm)
/* harmony export */ });
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");
/* harmony import */ var _pageListeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageListeners.js */ "./src/pageListeners.js");




// Hides modal and overlay
function hideModal() {
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.overlayEl.classList.add("content-hidden");
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.modalEl.classList.add("content-hidden");
}

/*
- Renders the current theme of the page
1. Change text of the button to opposite of the current page's theme to let user know they can witch
2. Add or remove "dark-mode" class to affect the css styling of the page
*/
function renderTheme() {
  if (_modules_js__WEBPACK_IMPORTED_MODULE_0__.themeModule.isDarkTheme) {
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.toggleThemeBtn.textContent = "Light";
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.contentDiv.classList.add("dark-mode");
  } else {
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.toggleThemeBtn.textContent = "Dark";
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.contentDiv.classList.remove("dark-mode");
  }
}

/*
- Renders the modal and the content section that needs to be used
1. Shows modal and overlay
2. Render the title of the modal
3. Render the modal content that's active whilst hiding the rest
*/
function renderModalContent() {
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.overlayEl.classList.remove("content-hidden");
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.modalEl.classList.remove("content-hidden");
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.modalTitleEl.textContent = _modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.modalTitle;
  for (var i = 0; i < _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.modalContentList.length; i++) {
    var element = _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.modalContentList[i];
    if (_modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.activeContentID == element.id) {
      element.classList.remove("content-hidden");
    } else {
      element.classList.add("content-hidden");
    }
  }
}

/*
- Render the project form
1. Reset form fields and set activeContentID so that the project form will be shown on modal
2. If we're editing a project: Get the current project, the one we're 
	editing, edit the modal's title, and fill the input field.
3. Else: If we're creating the new project, we just edit the title of the modal,
	no need to edit the input field since it's already been reset.
4. Finally call the rendering function to show the modal and its content
*/
function renderProjectForm() {
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.projectForm.reset();
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.activeContentID = _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.projectForm.id;
  if (_modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.isEdit) {
    var currentProject = (0,_modules_js__WEBPACK_IMPORTED_MODULE_0__.getActiveProject)();
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.modalTitle = "Edit Project '".concat(currentProject.title.getTitle(), "'!");
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.projectTitleInput.value = currentProject.title.getTitle();
  } else {
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.modalTitle = "Create new project!";
  }
  renderModalContent();
}

/*
- Renders content of the todo form
1. Most of the steps are similar to renderProjectForm()
2. If we're editing a todo, we're getting, get the todo the user wants to edit,
	then modify the form based on that todo's information
NOTE: For javascript date object, a way to input the value of that date object 
	into an input of type date is to do '.toISOString()' and .slice(0, 10) on it.
3. In both cases the title of the modal will be different if you're editing or 
	adding a todo.
4. Finally call renderModalContent() to render the modal and its content, allowing 
	the changes done in this function to be on display.
*/
function renderTodoForm() {
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoForm.reset();
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.activeContentID = _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoForm.id;
  if (_modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.isEdit) {
    var currentTodo = (0,_modules_js__WEBPACK_IMPORTED_MODULE_0__.getSelectedTodo)();
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.modalTitle = "Edit Todo '".concat(currentTodo.title.getTitle(), "'");
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoTitleInput.value = "".concat(currentTodo.title.getTitle());
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoDescInput.value = "".concat(currentTodo.description.getDescription());
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoDateInput.value = "".concat(currentTodo.dueDate.toISOString().slice(0, 10));
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoPrioritySelect.value = "".concat(currentTodo.priority.getPriority());
    if (currentTodo.isComplete.getCompletion()) {
      _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoCompletionInput.checked = true;
    } else {
      _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoCompletionInput.checked = false;
    }
  } else {
    var currentProject = (0,_modules_js__WEBPACK_IMPORTED_MODULE_0__.getActiveProject)();
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.modalTitle = "Add new todo for project '".concat(currentProject.title.getTitle(), "'");
  }
  renderModalContent();
}

/*
- Renders the contents of the todos details section
*/
function renderTodoDetails() {
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.activeContentID = _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoDetailsSection.id;
  var currentTodo = (0,_modules_js__WEBPACK_IMPORTED_MODULE_0__.getSelectedTodo)();
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.modalModule.modalTitle = "Details for todo '".concat(currentTodo.title.getTitle(), "'");
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoDetailsTitleEl.textContent = currentTodo.title.getTitle();
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoDetailsDescEl.textContent = currentTodo.description.getDescription();
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoDetailsPriorityEl.textContent = currentTodo.priority.getPriority();
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoDetailsDateEl.textContent = (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.formatDateToUS)(currentTodo.dueDate);
  if (currentTodo.isComplete.getCompletion()) {
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoDetailsCompletionEl.textContent = "Complete";
  } else {
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoDetailsCompletionEl.textContent = "Incomplete";
  }
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
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.projectsTabSection.innerHTML = "";
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.projectsList.forEach(function (project, index) {
    var tabEl = document.createElement("li");
    tabEl.className = "sidebar-tab";
    tabEl.setAttribute("data-tab-type", "projectTab");
    tabEl.setAttribute("data-tab-id", index);
    var tabTitleEl = document.createElement("span");
    tabTitleEl.className = "sidebar-tab-title";
    tabTitleEl.textContent = project.title.getTitle();
    var todoCountEl = document.createElement("span");
    todoCountEl.className = "todo-count-el";
    tabEl.appendChild(tabTitleEl);
    tabEl.appendChild(todoCountEl);
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.projectsTabSection.appendChild(tabEl);
  });

  /*
  - Distribute all todos amongst the main tabs, which are allocated by date
  1. Sort the todos of the projects by date
  2. First clear the todos in the main tab projects to prevent duplication when 
  we start distributing them again.
  NOTE: By sorting todos by date, we'll be able to pop them out and 
  render them by date. It also deals with the issue of indexing, as we 
  know how our todos are going to be index, allowing us to easily 
  reference and locate the todos by indices
  */
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.projectsList.forEach(function (project) {
    project.projectTodos = (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.sortTodosByDate)(project.projectTodos);
  });
  (0,_modules_js__WEBPACK_IMPORTED_MODULE_0__.clearMainTabTodos)();
  /*
  - Distribute todos from project instnaces amongst the main tabs
  1. Push all todos in home tab, since that tab is responsible for showing all todos
  2. If the due date of a today is today, put it in the today tab
  3. Else if it's within 7 days in the future, we put it in the week tab
  */
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.projectsList.forEach(function (project, projectIndex) {
    var projectTodos = project.projectTodos;
    for (var todoIndex = 0; todoIndex < projectTodos.length; todoIndex++) {
      _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.Home.tabProject.addTodo(projectTodos[todoIndex]);
      _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.Home.todoIndices.push(todoIndex);
      _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.Home.projectIndices.push(projectIndex);
      if ((0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.isToday)(projectTodos[todoIndex].dueDate)) {
        _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.Today.tabProject.addTodo(projectTodos[todoIndex]);
        _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.Today.todoIndices.push(todoIndex);
        _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.Today.projectIndices.push(projectIndex);
      } else if ((0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.isSevenDaysInFuture)(projectTodos[todoIndex].dueDate)) {
        _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.Week.tabProject.addTodo(projectTodos[todoIndex]);
        _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.Week.todoIndices.push(todoIndex);
        _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.Week.projectIndices.push(projectIndex);
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
  var sidebarTabs = _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.getSidebarTabs();
  sidebarTabs.forEach(function (tab) {
    // Get the id of the tab
    var tabID = tab.dataset.tabId;
    var todoCountEl = tab.querySelector(".todo-count-el");
    // Depending on whether it's a main or project tab, we have different of getting the amount of todos
    if (tab.dataset.tabType === _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.mainTabType) {
      todoCountEl.textContent = _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule[tabID].tabProject.getIncompleteTodoCount();
    } else {
      todoCountEl.textContent = _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.projectsList[tabID].getIncompleteTodoCount();
    }
    // After updating all sidebar tabs, make sure to persist the highlighting of the tab that's active.
    if (tabID === _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.activeTabID) {
      tab.setAttribute("data-active", true);
    } else {
      tab.removeAttribute("data-active");
    }

    // Set up event listeners for the sidebar tab
    tab.addEventListener("click", _pageListeners_js__WEBPACK_IMPORTED_MODULE_2__.handleSidebarTabClick);
  });
}

/*
- Renders main content section
1. Header and Title of the tab
2. Buttons showing ways to interact with the project if it's a user-created project/tab
	rather than one of the default main tabs
3. main-content such as whether it's todos or just a section indicating the 
	user needs to create todos
*/
function renderMainContent() {
  /*
  1. Get project associated to the active tab, regardless of whether
  it's a main or a user created tab
  2. Get the already sorted todos for the project
  */
  var project = (0,_modules_js__WEBPACK_IMPORTED_MODULE_0__.getActiveProject)();
  var todos = project.projectTodos;
  /*
  1. Reset and clear markup for mainContentHeader 
  2. Edit the main-content, so that the header has the tab title
  - If we're not on a main tab, we add buttons to:
  1. Add todos
  2. edit the project
  3. Delete the project
  - Else, we hide that section of buttons because we aren't on a project tab
  */
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.tabTitleEl.textContent = project.title.getTitle();
  if (_modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.activeTabType === _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.mainTabType) {
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.projectBtnsDiv.classList.add("content-hidden");
  } else {
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.projectBtnsDiv.classList.remove("content-hidden");
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
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.emptyTabSection.classList.add("content-hidden");
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoListContainer.classList.remove("content-hidden");
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoListContainer.innerHTML = "";
    todos.forEach(function (todo, index) {
      var todoEl = document.createElement("li");
      todoEl.className = "todo-item";
      todoEl.setAttribute("data-todo-complete", todo.isComplete.getCompletion());

      /*
      - If it's a main tab, we add on the index of the project that the todo
      originally belongs to, and also the index of that todo in that project
      - Else, it's a project tab, so the activeTabID already records the project
      that the todo belongs to, and 'index'.
      */
      if (_modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.activeTabType == _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.mainTabType) {
        todoEl.setAttribute("data-project-index", _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule[_modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.activeTabID].projectIndices[index]);
        todoEl.setAttribute("data-todo-index", _modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule[_modules_js__WEBPACK_IMPORTED_MODULE_0__.tabsModule.activeTabID].todoIndices[index]);
      } else {
        todoEl.setAttribute("data-todo-index", index);
      }
      var todoTitleEl = document.createElement("span");
      todoTitleEl.className = "todo-title-el";
      todoTitleEl.textContent = todo.title.getTitle();
      var todoDescEl = document.createElement("span");
      todoDescEl.className = "todo-description-el";
      todoDescEl.textContent = todo.description.getDescription();
      var todoDateEl = document.createElement("span");
      todoDateEl.textContent = "todo-due-date-el";
      todoDateEl.textContent = "Due: ".concat((0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.formatDateToUS)(todo.dueDate));
      var todoBtnsDiv = document.createElement("div");
      todoBtnsDiv.className = "todo-btns-container";
      var editTodoBtn = document.createElement("button");
      editTodoBtn.classList.add("edit-todo-btn", "green-btn");
      editTodoBtn.textContent = "Edit";
      editTodoBtn.addEventListener("click", _pageListeners_js__WEBPACK_IMPORTED_MODULE_2__.handleEditTodoBtn);
      var todoDetailsBtn = document.createElement("button");
      todoDetailsBtn.classList.add("todo-details-btn", "blue-btn");
      todoDetailsBtn.textContent = "Details";
      todoDetailsBtn.addEventListener("click", _pageListeners_js__WEBPACK_IMPORTED_MODULE_2__.handleTodoDetailsBtn);
      var deleteTodoBtn = document.createElement("button");
      deleteTodoBtn.classList.add("delete-todo-btn", "red-btn");
      deleteTodoBtn.textContent = "Delete";
      deleteTodoBtn.addEventListener("click", _pageListeners_js__WEBPACK_IMPORTED_MODULE_2__.handleDeleteTodoBtn);
      todoBtnsDiv.appendChild(editTodoBtn);
      todoBtnsDiv.appendChild(todoDetailsBtn);
      todoBtnsDiv.appendChild(deleteTodoBtn);
      todoEl.appendChild(todoTitleEl);
      todoEl.appendChild(todoDescEl);
      todoEl.appendChild(todoDateEl);
      todoEl.appendChild(todoBtnsDiv);
      _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoListContainer.appendChild(todoEl);
    });
  } else {
    /*
    - If there are no todos for the active tab:
    1. Show section that tells user that they no have todos
    2. Hide the todoListContainer since there aren't any todos to be
    shown; this also gives us space on the layout
    */
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.emptyTabSection.classList.remove("content-hidden");
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.DomModule.todoListContainer.classList.add("content-hidden");
  }
}

// Renders sidebar and maincontent
function renderPage() {
  renderTheme();
  updateSidebarTabs();
  renderMainContent();
}


/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDateToUS": () => (/* binding */ formatDateToUS),
/* harmony export */   "isSevenDaysInFuture": () => (/* binding */ isSevenDaysInFuture),
/* harmony export */   "isToday": () => (/* binding */ isToday),
/* harmony export */   "sortTodosByDate": () => (/* binding */ sortTodosByDate)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Checks if a date WITHIN 7 days in the future; not including today
function isSevenDaysInFuture(inputDate) {
  var today = new Date();
  var oneDayMilliseconds = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  // Convert both dates to UTC to avoid issues with daylight saving time; essentially gets
  // amount of miliseconds since january 1, 1970 zero hour
  var todayUTC = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  var inputDateUTC = Date.UTC(inputDate.getUTCFullYear(), inputDate.getUTCMonth(), inputDate.getUTCDate());
  /*
  1. inputDateUTC - todayUTC; difference between days in miliseconds, if we 
  assume inputDate UTC is some date in the future, it should be greater than 
  today UTC.
  2. Divide by amount of miliseconds in a day, you'd get the approximate amount of days
  3. Round it down, and you got the approximate difference in days.
  */
  var diffDays = Math.floor((inputDateUTC - todayUTC) / oneDayMilliseconds);
  return diffDays > 0 && diffDays <= 7;
}
function isToday(inputDate) {
  var today = new Date();
  var todayUTC = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  var inputDateUTC = Date.UTC(inputDate.getUTCFullYear(), inputDate.getUTCMonth(), inputDate.getUTCDate());
  return todayUTC == inputDateUTC;
}

// Will return a date in the form "[Month] [Day], [Year]" e.g. "June 6, 2017"
/*
- NOTE: When creating new Date("yyyy-mm-dd") objects, calling .toDateString() sometimes
	gives a date that's one day off from how it was originally created. 
	E.g. 2020-05-19, would be converted and displayed as 2020-05-18. To prevent that 
	headache, I didn't want to use a date library, so I just created this function.

*/
function formatDateToUS(dateObj) {
  // Create a map of months
  var monthMap = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December"
  };

  // First we reassign the date object to the string to correct any date errosr created by it defaulting to certain timezones
  var dateStr = dateObj.toISOString().slice(0, 10);
  var yearStr = dateStr.slice(0, 4);
  var monthStr = monthMap[dateStr.slice(5, 7)];
  var dayStr;
  // If the day value is single digits
  if (dateStr.slice(8, 9) == "0") {
    dayStr = dateStr.slice(9);
  } else {
    // Else if the day value is double digits, then we slice differently to get the full date
    dayStr = dateStr.slice(8);
  }
  // Format the string in the United States style
  var formattedDate = "".concat(monthStr.slice(0, 3), " ").concat(dayStr, " ").concat(yearStr);
  return formattedDate;
}

// Sorts your todos by their dueDate
function sortTodosByDate(todos) {
  if (todos.length <= 1) {
    return todos;
  }
  var lessThanPivot = [];
  var greaterThanPivot = [];
  var pivot = todos[0];
  for (var i = 1; i < todos.length; i++) {
    // If the date is earlier than the pivot's date
    if (todos[i].dueDate < pivot.dueDate) {
      lessThanPivot.push(todos[i]);
    } else {
      // Else this means the todo's due date is greater or later than the pivot
      greaterThanPivot.push(todos[i]);
    }
  }
  todos = [].concat(_toConsumableArray(sortTodosByDate(lessThanPivot)), [pivot], _toConsumableArray(sortTodosByDate(greaterThanPivot)));
  return todos;
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\nul,\r\nol {\r\n    list-style: none;\r\n}\r\na {\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\nfieldset {\r\n    border: none;\r\n}\r\ninput {\r\n    background-color: white;\r\n    border: 2px solid gray;\r\n    padding: var(--section-padding);\r\n}\r\nlabel {\r\n    display: block;\r\n    margin-bottom: 2px;\r\n}\r\ninput {\r\n    width: 100%;\r\n}\r\n/* scrollbar styles */\r\n*::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n*::-webkit-scrollbar-thumb {\r\n    transition: var(--transition);\r\n    background-color: var(--scrollbar-color);\r\n    border-radius: var(--border-radius);\r\n}\r\n*::-webkit-scrollbar-track {\r\n    background-color: transparent;\r\n}\r\n*::-webkit-scrollbar-thumb:hover {\r\n    background-color: var(--scrollbar-color-hover);\r\n    cursor: pointer;\r\n}\r\n:root {\r\n    --clr-cyan-blue: #3b82f6;\r\n    --clr-dark-sky: #0c1445;\r\n    --clr-dark-slate: #334155;\r\n    --clr-dark-gray: #111827;\r\n    --clr-emerald: #10b981;\r\n    --clr-light-teal: #5eead4;\r\n    /* Scrollbar color is just '--clr-emerald' in rgb form */\r\n    --scrollbar-color: rgba(16, 185, 129, 0.7);\r\n    --scrollbar-color-hover: rgba(16, 185, 129, 1);\r\n    --font-1: \"Roboto\", sans-serif;\r\n    --font-2: \"Open Sans\", sans-serif;\r\n    --transition: all 0.25s ease-in-out;\r\n    --border-radius: 6px;\r\n    --padding-btn-link: 6px 12px;\r\n    --section-padding: 8px 16px;\r\n    --letter-spacing: 4px;\r\n}\r\nbody {\r\n    font-family: var(--font-1), var(--font-2);\r\n}\r\nbutton {\r\n    background-color: white;\r\n    padding: var(--section-padding);\r\n    cursor: pointer;\r\n    font-weight: 700;\r\n    font-family: var(--font-1), var(--font-2);\r\n    transition: var(--transition);\r\n    border-style: solid;\r\n}\r\n\r\n.green-btn {\r\n    background-color: transparent;\r\n    border-color: var(--clr-emerald);\r\n    color: black;\r\n    border-width: 3px;\r\n}\r\n.green-btn:hover {\r\n    background-color: var(--clr-emerald);\r\n    color: white;\r\n}\r\n.blue-btn {\r\n    background-color: transparent;\r\n    border-color: var(--clr-cyan-blue);\r\n    color: black;\r\n    border-width: 3px;\r\n}\r\n.blue-btn:hover {\r\n    background-color: var(--clr-cyan-blue);\r\n    color: white;\r\n}\r\n.red-btn {\r\n    background-color: transparent;\r\n    border-color: red;\r\n    color: black;\r\n    border-width: 3px;\r\n}\r\n.red-btn:hover {\r\n    background-color: red;\r\n    color: white;\r\n}\r\n\r\n.content-hidden {\r\n    display: none !important;\r\n    color: black;\r\n}\r\n\r\n/* Styling for content; mainly for having modals */\r\n.content {\r\n    position: relative;\r\n}\r\n\r\n/* Styles for modal forms */\r\n/* Blurred overlay */\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    /* Blurs the area behind the element  */\r\n    backdrop-filter: blur(5px);\r\n    /* This will be over all other content in project-container */\r\n    z-index: 1;\r\n}\r\n\r\n.modal {\r\n    position: fixed;\r\n    z-index: 2;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: auto;\r\n    /* Make height min-content since heights will vary due to the different forms */\r\n    height: min-content;\r\n    /* Fancy box shadow */\r\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\r\n    background-color: var(--clr-light-teal);\r\n    border-radius: var(--border-radius);\r\n    overflow: hidden;\r\n    font-weight: 700;\r\n}\r\n\r\n.modal button {\r\n    background-color: transparent;\r\n}\r\n.modal button:hover {\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.modal-header {\r\n    padding: var(--section-padding);\r\n    color: black;\r\n    background-color: var(--clr-emerald);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n#close-modal-btn {\r\n    margin-left: 16px;\r\n}\r\n\r\n.modal-main-content {\r\n    padding: var(--section-padding);\r\n    margin: 0 auto;\r\n}\r\n.modal-main-content .modal-form {\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 8px;\r\n}\r\n\r\n.modal-main-content select {\r\n    padding: 8px 16px;\r\n    border: var(--border-radius);\r\n    width: 100%;\r\n}\r\n\r\n/* Styles for everything related to the project container */\r\n#project-container {\r\n    display: grid;\r\n    grid-template-rows: auto 1fr auto;\r\n    grid-template-columns: auto 1fr;\r\n    min-height: 100vh;\r\n}\r\n\r\n#page-header,\r\n#page-sidebar,\r\n#page-main-content,\r\n#page-footer {\r\n    transition: var(--transition);\r\n}\r\n\r\n/* Header styles */\r\n#page-header {\r\n    background-color: var(--clr-emerald);\r\n    font-weight: 700;\r\n    padding: var(--section-padding);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    grid-row: 1;\r\n    grid-column: 1 / span 2;\r\n}\r\n\r\n/* Styles for containers in header */\r\n.app-logo-container,\r\n.user-info-section {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n.app-logo-container {\r\n    flex-basis: 200px;\r\n}\r\n.user-info-section {\r\n    flex-basis: 500px;\r\n}\r\n#toggle-theme-btn {\r\n    background-color: transparent;\r\n    min-width: 20%;\r\n}\r\n#toggle-theme-btn:hover {\r\n    background-color: black;\r\n    color: var(--clr-emerald);\r\n}\r\n\r\n/* Styling for the sidebar */\r\n#page-sidebar {\r\n    background-color: var(--clr-light-teal);\r\n    padding: 16px;\r\n    /* Start and span across row 2, which is our main row. Then position into  */\r\n    grid-row: 2;\r\n    grid-column: 1;\r\n    font-size: 20px;\r\n    text-align: center;\r\n}\r\n\r\n/*\r\n- Styling for the todo count \r\n- Doing min-width and height so that the todo-count at least expands \r\n\tto fit the text of the amount of todos. Though, after triple digits, \r\n\tit's shape becomes more of a melon rather than a circle, which is acceptable.\r\n- Need flex box to center the text for the todo count\r\n*/\r\n.todo-count-el {\r\n    background-color: white;\r\n    font-weight: 700;\r\n    min-width: 30px;\r\n    min-height: 30px;\r\n    border-radius: 50%;\r\n    padding: 4px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/* Styling for the sections containing hte tabs and the tabs themselves. */\r\n.sidebar-tab-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 10px;\r\n}\r\n.sidebar-tab {\r\n    cursor: pointer;\r\n    font-size: inherit;\r\n    border: 2px solid black;\r\n    border-radius: var(--border-radius);\r\n    padding: 6px 6px;\r\n    transition: var(--transition);\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.sidebar-tab:hover {\r\n    background-color: black;\r\n    .sidebar-tab-title {\r\n        color: white;\r\n    }\r\n}\r\n.sidebar-tab[data-active=\"true\"] {\r\n    background-color: black;\r\n    .sidebar-tab-title {\r\n        color: white;\r\n    }\r\n}\r\n\r\n.sidebar-tab-title {\r\n    transition: var(--transition);\r\n    /* Make the title's max-width the width of the container minus 40px for style purposes */\r\n    max-width: calc(100% - 40px);\r\n    overflow-x: hidden;\r\n}\r\n\r\n/* Styling for secondary tab */\r\n.projects-tab-section {\r\n    /* If height of the project's container goes over 150px, we add a scroll bar for it */\r\n    max-height: 150px;\r\n    overflow-y: auto;\r\n    margin-bottom: 32px;\r\n}\r\n\r\n/* Make it so only the sidebar-tab registers clicks */\r\n.sidebar-tab > * {\r\n    pointer-events: None;\r\n}\r\n\r\n/* Style the title \"Projects\" on the sidebar */\r\n#sidebar-section-title {\r\n    margin-top: 8px;\r\n    margin-bottom: 8px;\r\n    letter-spacing: var(--letter-spacing);\r\n}\r\n\r\n/* Fancy styling for button: box shadow is just setting the background when you hover */\r\n#create-project-btn {\r\n    background-color: transparent;\r\n    box-shadow: inset 0 0 0 0 var(--clr-emerald);\r\n    color: black;\r\n    border: 3px solid black;\r\n    padding: var(--section-padding);\r\n}\r\n#create-project-btn:hover {\r\n    box-shadow: inset 0 0 0 120px var(--clr-emerald);\r\n    color: white;\r\n}\r\n\r\n/* Styling for main content section: Section where todos are displayed and todo information is displayed */\r\n#page-main-content {\r\n    background-color: white;\r\n    padding: 12px;\r\n    grid-row: 2;\r\n    grid-column: 2 / end;\r\n    display: grid;\r\n    grid-template-rows: auto 1fr;\r\n}\r\n\r\n/* Styling header of project-main-content */\r\n#main-content-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    row-gap: 6px;\r\n    letter-spacing: var(--letter-spacing);\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n#project-btns-container {\r\n    display: flex;\r\n    column-gap: 12px;\r\n}\r\n#project-btns-container {\r\n    border-width: 3px;\r\n}\r\n#project-btns-container button {\r\n    border-width: 4px;\r\n}\r\n\r\n/* Make it scrollable if it goes past the height content */\r\n#todo-list-container {\r\n    padding: var(--section-padding);\r\n    width: 70%;\r\n    margin: 0 auto;\r\n    grid-row: 2;\r\n    row-gap: 12px;\r\n    overflow-y: auto;\r\n    max-height: 70vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n}\r\n\r\n.todo-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: var(--section-padding);\r\n    border: 3px solid var(--clr-dark-slate);\r\n    transition: var(--transition);\r\n}\r\n\r\n/* For larger screens, we'll hide the description of the todo */\r\n.todo-description-el {\r\n    display: none;\r\n}\r\n\r\n.todo-item:hover {\r\n    box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.5);\r\n}\r\n.todo-item[data-todo-complete=\"true\"] .todo-title-el {\r\n    text-decoration: line-through;\r\n}\r\n\r\n/* Styling for section that shows when you have no todos or no projects created */\r\n#empty-tab-section {\r\n    text-align: center;\r\n    margin: 24px;\r\n    font-weight: 700;\r\n    letter-spacing: var(--letter-spacing);\r\n}\r\n\r\n#empty-tab-message-primary {\r\n    font-size: 28px;\r\n    margin-bottom: 12px;\r\n}\r\n#empty-tab-message-secondary {\r\n    font-size: 16px;\r\n}\r\n\r\n/* Styling for the footer */\r\n#page-footer {\r\n    background-color: var(--clr-emerald);\r\n    color: black;\r\n    text-align: center;\r\n    font-weight: 700;\r\n    padding: var(--section-padding);\r\n    grid-row: 3;\r\n    grid-column: 1 / end;\r\n}\r\n\r\n.site-icons {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n/* Dark mode styling */\r\n#content.dark-mode {\r\n    #page-header,\r\n    #page-footer,\r\n    #page-sidebar,\r\n    #page-main-content {\r\n        color: white;\r\n    }\r\n\r\n    .modal {\r\n        color: white;\r\n        background-color: var(--clr-dark-slate);\r\n    }\r\n    .modal-header {\r\n        color: inherit;\r\n        background-color: var(--clr-dark-gray);\r\n    }\r\n    .modal button {\r\n        color: white;\r\n        border-color: white;\r\n    }\r\n    .modal button:hover {\r\n        color: black;\r\n        border-color: white;\r\n        background-color: white;\r\n    }\r\n\r\n    #page-header,\r\n    #page-footer {\r\n        background-color: var(--clr-dark-gray);\r\n    }\r\n    #page-sidebar {\r\n        background-color: var(--clr-dark-sky);\r\n    }\r\n\r\n    .sidebar-tab {\r\n        border-color: var(--clr-light-teal);\r\n    }\r\n    .sidebar-tab:hover {\r\n        background-color: var(--clr-light-teal);\r\n        .sidebar-tab-title {\r\n            color: black;\r\n        }\r\n    }\r\n    .sidebar-tab[data-active=\"true\"] {\r\n        background-color: var(--clr-light-teal);\r\n        .sidebar-tab-title {\r\n            color: black;\r\n        }\r\n    }\r\n\r\n    .todo-count-el {\r\n        color: black;\r\n    }\r\n\r\n    #page-main-content {\r\n        background-color: var(--clr-dark-slate);\r\n    }\r\n    #toggle-theme-btn {\r\n        color: white;\r\n        border-color: white;\r\n    }\r\n    #toggle-theme-btn:hover {\r\n        background-color: white;\r\n        color: var(--clr-dark-gray);\r\n    }\r\n    .todo-item {\r\n        border-color: var(--clr-light-teal);\r\n    }\r\n\r\n    #create-project-btn,\r\n    #add-todo-btn,\r\n    #edit-project-btn,\r\n    #delete-project-btn,\r\n    .edit-todo-btn,\r\n    .todo-details-btn,\r\n    .delete-todo-btn {\r\n        color: white;\r\n    }\r\n\r\n    #create-project-btn {\r\n        border-color: white;\r\n    }\r\n}\r\n\r\n/* Media queries */\r\n/* \r\n1. For medium sized screens change the layout of the todos\r\n2. Also show the todo descriptions\r\n*/\r\n@media screen and (max-width: 1000px) {\r\n    .todo-item {\r\n        flex-direction: column;\r\n        row-gap: 8px;\r\n    }\r\n    .todo-description-el {\r\n        display: block;\r\n    }\r\n}\r\n\r\n/* For medium-smaller sized screens, we make the header layout more compact */\r\n@media screen and (max-width: 750px) {\r\n    #page-header {\r\n        flex-direction: column;\r\n        padding-bottom: 20px;\r\n    }\r\n    .app-logo-container,\r\n    .user-info-section {\r\n        flex-basis: 0px;\r\n        flex-direction: column;\r\n    }\r\n    .app-logo-container {\r\n        margin-bottom: 16px;\r\n    }\r\n    .user-info-section {\r\n        row-gap: 8px;\r\n    }\r\n}\r\n\r\n/* \r\n- When on really small screens\r\n1. Hide the description of the todo.\r\n2. Change layout of the project, making the sidebar placed under the header\r\n*/\r\n\r\n@media screen and (max-width: 500px) {\r\n    #project-container {\r\n        grid-template-rows: auto;\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    #page-header,\r\n    #page-sidebar {\r\n        font-size: 0.7em;\r\n    }\r\n\r\n    #page-sidebar {\r\n        grid-row: 2 / 3;\r\n    }\r\n\r\n    #page-main-content {\r\n        grid-row: 3 / 4;\r\n        grid-column-start: 1;\r\n    }\r\n    #project-btns-container {\r\n        flex-direction: column;\r\n        row-gap: 8px;\r\n    }\r\n    #todo-list-container {\r\n        width: 100%;\r\n    }\r\n    .todo-description-el {\r\n        display: none;\r\n    }\r\n    #page-footer {\r\n        grid-row: 4 / 5;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;;IAEI,gBAAgB;AACpB;AACA;IACI,qBAAqB;IACrB,cAAc;AAClB;AACA;IACI,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,sBAAsB;IACtB,+BAA+B;AACnC;AACA;IACI,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,WAAW;AACf;AACA,qBAAqB;AACrB;IACI,UAAU;AACd;AACA;IACI,6BAA6B;IAC7B,wCAAwC;IACxC,mCAAmC;AACvC;AACA;IACI,6BAA6B;AACjC;AACA;IACI,8CAA8C;IAC9C,eAAe;AACnB;AACA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,yBAAyB;IACzB,wBAAwB;IACxB,sBAAsB;IACtB,yBAAyB;IACzB,wDAAwD;IACxD,0CAA0C;IAC1C,8CAA8C;IAC9C,8BAA8B;IAC9B,iCAAiC;IACjC,mCAAmC;IACnC,oBAAoB;IACpB,4BAA4B;IAC5B,2BAA2B;IAC3B,qBAAqB;AACzB;AACA;IACI,yCAAyC;AAC7C;AACA;IACI,uBAAuB;IACvB,+BAA+B;IAC/B,eAAe;IACf,gBAAgB;IAChB,yCAAyC;IACzC,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;IAC7B,gCAAgC;IAChC,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,oCAAoC;IACpC,YAAY;AAChB;AACA;IACI,6BAA6B;IAC7B,kCAAkC;IAClC,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,sCAAsC;IACtC,YAAY;AAChB;AACA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,YAAY;AAChB;;AAEA,kDAAkD;AAClD;IACI,kBAAkB;AACtB;;AAEA,2BAA2B;AAC3B,oBAAoB;AACpB;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,uCAAuC;IACvC,0BAA0B;IAC1B,6DAA6D;IAC7D,UAAU;AACd;;AAEA;IACI,eAAe;IACf,UAAU;IACV,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,WAAW;IACX,+EAA+E;IAC/E,mBAAmB;IACnB,qBAAqB;IACrB,+CAA+C;IAC/C,uCAAuC;IACvC,mCAAmC;IACnC,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;AACjC;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,+BAA+B;IAC/B,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,4BAA4B;IAC5B,WAAW;AACf;;AAEA,2DAA2D;AAC3D;IACI,aAAa;IACb,iCAAiC;IACjC,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA;;;;IAII,6BAA6B;AACjC;;AAEA,kBAAkB;AAClB;IACI,oCAAoC;IACpC,gBAAgB;IAChB,+BAA+B;IAC/B,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,uBAAuB;AAC3B;;AAEA,oCAAoC;AACpC;;IAEI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,6BAA6B;IAC7B,cAAc;AAClB;AACA;IACI,uBAAuB;IACvB,yBAAyB;AAC7B;;AAEA,4BAA4B;AAC5B;IACI,uCAAuC;IACvC,aAAa;IACb,4EAA4E;IAC5E,WAAW;IACX,cAAc;IACd,eAAe;IACf,kBAAkB;AACtB;;AAEA;;;;;;CAMC;AACD;IACI,uBAAuB;IACvB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,0EAA0E;AAC1E;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,uBAAuB;IACvB,mCAAmC;IACnC,gBAAgB;IAChB,6BAA6B;IAC7B,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,uBAAuB;IACvB;QACI,YAAY;IAChB;AACJ;AACA;IACI,uBAAuB;IACvB;QACI,YAAY;IAChB;AACJ;;AAEA;IACI,6BAA6B;IAC7B,wFAAwF;IACxF,4BAA4B;IAC5B,kBAAkB;AACtB;;AAEA,8BAA8B;AAC9B;IACI,qFAAqF;IACrF,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA,qDAAqD;AACrD;IACI,oBAAoB;AACxB;;AAEA,8CAA8C;AAC9C;IACI,eAAe;IACf,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA,uFAAuF;AACvF;IACI,6BAA6B;IAC7B,4CAA4C;IAC5C,YAAY;IACZ,uBAAuB;IACvB,+BAA+B;AACnC;AACA;IACI,gDAAgD;IAChD,YAAY;AAChB;;AAEA,0GAA0G;AAC1G;IACI,uBAAuB;IACvB,aAAa;IACb,WAAW;IACX,oBAAoB;IACpB,aAAa;IACb,4BAA4B;AAChC;;AAEA,2CAA2C;AAC3C;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,qCAAqC;IACrC,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;;AAEA,0DAA0D;AAC1D;IACI,+BAA+B;IAC/B,UAAU;IACV,cAAc;IACd,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,+BAA+B;IAC/B,uCAAuC;IACvC,6BAA6B;AACjC;;AAEA,+DAA+D;AAC/D;IACI,aAAa;AACjB;;AAEA;IACI,0CAA0C;AAC9C;AACA;IACI,6BAA6B;AACjC;;AAEA,iFAAiF;AACjF;IACI,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,qCAAqC;AACzC;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,eAAe;AACnB;;AAEA,2BAA2B;AAC3B;IACI,oCAAoC;IACpC,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,+BAA+B;IAC/B,WAAW;IACX,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA,sBAAsB;AACtB;IACI;;;;QAII,YAAY;IAChB;;IAEA;QACI,YAAY;QACZ,uCAAuC;IAC3C;IACA;QACI,cAAc;QACd,sCAAsC;IAC1C;IACA;QACI,YAAY;QACZ,mBAAmB;IACvB;IACA;QACI,YAAY;QACZ,mBAAmB;QACnB,uBAAuB;IAC3B;;IAEA;;QAEI,sCAAsC;IAC1C;IACA;QACI,qCAAqC;IACzC;;IAEA;QACI,mCAAmC;IACvC;IACA;QACI,uCAAuC;QACvC;YACI,YAAY;QAChB;IACJ;IACA;QACI,uCAAuC;QACvC;YACI,YAAY;QAChB;IACJ;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,uCAAuC;IAC3C;IACA;QACI,YAAY;QACZ,mBAAmB;IACvB;IACA;QACI,uBAAuB;QACvB,2BAA2B;IAC/B;IACA;QACI,mCAAmC;IACvC;;IAEA;;;;;;;QAOI,YAAY;IAChB;;IAEA;QACI,mBAAmB;IACvB;AACJ;;AAEA,kBAAkB;AAClB;;;CAGC;AACD;IACI;QACI,sBAAsB;QACtB,YAAY;IAChB;IACA;QACI,cAAc;IAClB;AACJ;;AAEA,6EAA6E;AAC7E;IACI;QACI,sBAAsB;QACtB,oBAAoB;IACxB;IACA;;QAEI,eAAe;QACf,sBAAsB;IAC1B;IACA;QACI,mBAAmB;IACvB;IACA;QACI,YAAY;IAChB;AACJ;;AAEA;;;;CAIC;;AAED;IACI;QACI,wBAAwB;QACxB,0BAA0B;IAC9B;;IAEA;;QAEI,gBAAgB;IACpB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;QACf,oBAAoB;IACxB;IACA;QACI,sBAAsB;QACtB,YAAY;IAChB;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;IACjB;IACA;QACI,eAAe;IACnB;AACJ","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\nul,\r\nol {\r\n    list-style: none;\r\n}\r\na {\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\nfieldset {\r\n    border: none;\r\n}\r\ninput {\r\n    background-color: white;\r\n    border: 2px solid gray;\r\n    padding: var(--section-padding);\r\n}\r\nlabel {\r\n    display: block;\r\n    margin-bottom: 2px;\r\n}\r\ninput {\r\n    width: 100%;\r\n}\r\n/* scrollbar styles */\r\n*::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n*::-webkit-scrollbar-thumb {\r\n    transition: var(--transition);\r\n    background-color: var(--scrollbar-color);\r\n    border-radius: var(--border-radius);\r\n}\r\n*::-webkit-scrollbar-track {\r\n    background-color: transparent;\r\n}\r\n*::-webkit-scrollbar-thumb:hover {\r\n    background-color: var(--scrollbar-color-hover);\r\n    cursor: pointer;\r\n}\r\n:root {\r\n    --clr-cyan-blue: #3b82f6;\r\n    --clr-dark-sky: #0c1445;\r\n    --clr-dark-slate: #334155;\r\n    --clr-dark-gray: #111827;\r\n    --clr-emerald: #10b981;\r\n    --clr-light-teal: #5eead4;\r\n    /* Scrollbar color is just '--clr-emerald' in rgb form */\r\n    --scrollbar-color: rgba(16, 185, 129, 0.7);\r\n    --scrollbar-color-hover: rgba(16, 185, 129, 1);\r\n    --font-1: \"Roboto\", sans-serif;\r\n    --font-2: \"Open Sans\", sans-serif;\r\n    --transition: all 0.25s ease-in-out;\r\n    --border-radius: 6px;\r\n    --padding-btn-link: 6px 12px;\r\n    --section-padding: 8px 16px;\r\n    --letter-spacing: 4px;\r\n}\r\nbody {\r\n    font-family: var(--font-1), var(--font-2);\r\n}\r\nbutton {\r\n    background-color: white;\r\n    padding: var(--section-padding);\r\n    cursor: pointer;\r\n    font-weight: 700;\r\n    font-family: var(--font-1), var(--font-2);\r\n    transition: var(--transition);\r\n    border-style: solid;\r\n}\r\n\r\n.green-btn {\r\n    background-color: transparent;\r\n    border-color: var(--clr-emerald);\r\n    color: black;\r\n    border-width: 3px;\r\n}\r\n.green-btn:hover {\r\n    background-color: var(--clr-emerald);\r\n    color: white;\r\n}\r\n.blue-btn {\r\n    background-color: transparent;\r\n    border-color: var(--clr-cyan-blue);\r\n    color: black;\r\n    border-width: 3px;\r\n}\r\n.blue-btn:hover {\r\n    background-color: var(--clr-cyan-blue);\r\n    color: white;\r\n}\r\n.red-btn {\r\n    background-color: transparent;\r\n    border-color: red;\r\n    color: black;\r\n    border-width: 3px;\r\n}\r\n.red-btn:hover {\r\n    background-color: red;\r\n    color: white;\r\n}\r\n\r\n.content-hidden {\r\n    display: none !important;\r\n    color: black;\r\n}\r\n\r\n/* Styling for content; mainly for having modals */\r\n.content {\r\n    position: relative;\r\n}\r\n\r\n/* Styles for modal forms */\r\n/* Blurred overlay */\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    /* Blurs the area behind the element  */\r\n    backdrop-filter: blur(5px);\r\n    /* This will be over all other content in project-container */\r\n    z-index: 1;\r\n}\r\n\r\n.modal {\r\n    position: fixed;\r\n    z-index: 2;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: auto;\r\n    /* Make height min-content since heights will vary due to the different forms */\r\n    height: min-content;\r\n    /* Fancy box shadow */\r\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\r\n    background-color: var(--clr-light-teal);\r\n    border-radius: var(--border-radius);\r\n    overflow: hidden;\r\n    font-weight: 700;\r\n}\r\n\r\n.modal button {\r\n    background-color: transparent;\r\n}\r\n.modal button:hover {\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.modal-header {\r\n    padding: var(--section-padding);\r\n    color: black;\r\n    background-color: var(--clr-emerald);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n#close-modal-btn {\r\n    margin-left: 16px;\r\n}\r\n\r\n.modal-main-content {\r\n    padding: var(--section-padding);\r\n    margin: 0 auto;\r\n}\r\n.modal-main-content .modal-form {\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 8px;\r\n}\r\n\r\n.modal-main-content select {\r\n    padding: 8px 16px;\r\n    border: var(--border-radius);\r\n    width: 100%;\r\n}\r\n\r\n/* Styles for everything related to the project container */\r\n#project-container {\r\n    display: grid;\r\n    grid-template-rows: auto 1fr auto;\r\n    grid-template-columns: auto 1fr;\r\n    min-height: 100vh;\r\n}\r\n\r\n#page-header,\r\n#page-sidebar,\r\n#page-main-content,\r\n#page-footer {\r\n    transition: var(--transition);\r\n}\r\n\r\n/* Header styles */\r\n#page-header {\r\n    background-color: var(--clr-emerald);\r\n    font-weight: 700;\r\n    padding: var(--section-padding);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    grid-row: 1;\r\n    grid-column: 1 / span 2;\r\n}\r\n\r\n/* Styles for containers in header */\r\n.app-logo-container,\r\n.user-info-section {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n.app-logo-container {\r\n    flex-basis: 200px;\r\n}\r\n.user-info-section {\r\n    flex-basis: 500px;\r\n}\r\n#toggle-theme-btn {\r\n    background-color: transparent;\r\n    min-width: 20%;\r\n}\r\n#toggle-theme-btn:hover {\r\n    background-color: black;\r\n    color: var(--clr-emerald);\r\n}\r\n\r\n/* Styling for the sidebar */\r\n#page-sidebar {\r\n    background-color: var(--clr-light-teal);\r\n    padding: 16px;\r\n    /* Start and span across row 2, which is our main row. Then position into  */\r\n    grid-row: 2;\r\n    grid-column: 1;\r\n    font-size: 20px;\r\n    text-align: center;\r\n}\r\n\r\n/*\r\n- Styling for the todo count \r\n- Doing min-width and height so that the todo-count at least expands \r\n\tto fit the text of the amount of todos. Though, after triple digits, \r\n\tit's shape becomes more of a melon rather than a circle, which is acceptable.\r\n- Need flex box to center the text for the todo count\r\n*/\r\n.todo-count-el {\r\n    background-color: white;\r\n    font-weight: 700;\r\n    min-width: 30px;\r\n    min-height: 30px;\r\n    border-radius: 50%;\r\n    padding: 4px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/* Styling for the sections containing hte tabs and the tabs themselves. */\r\n.sidebar-tab-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 10px;\r\n}\r\n.sidebar-tab {\r\n    cursor: pointer;\r\n    font-size: inherit;\r\n    border: 2px solid black;\r\n    border-radius: var(--border-radius);\r\n    padding: 6px 6px;\r\n    transition: var(--transition);\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.sidebar-tab:hover {\r\n    background-color: black;\r\n    .sidebar-tab-title {\r\n        color: white;\r\n    }\r\n}\r\n.sidebar-tab[data-active=\"true\"] {\r\n    background-color: black;\r\n    .sidebar-tab-title {\r\n        color: white;\r\n    }\r\n}\r\n\r\n.sidebar-tab-title {\r\n    transition: var(--transition);\r\n    /* Make the title's max-width the width of the container minus 40px for style purposes */\r\n    max-width: calc(100% - 40px);\r\n    overflow-x: hidden;\r\n}\r\n\r\n/* Styling for secondary tab */\r\n.projects-tab-section {\r\n    /* If height of the project's container goes over 150px, we add a scroll bar for it */\r\n    max-height: 150px;\r\n    overflow-y: auto;\r\n    margin-bottom: 32px;\r\n}\r\n\r\n/* Make it so only the sidebar-tab registers clicks */\r\n.sidebar-tab > * {\r\n    pointer-events: None;\r\n}\r\n\r\n/* Style the title \"Projects\" on the sidebar */\r\n#sidebar-section-title {\r\n    margin-top: 8px;\r\n    margin-bottom: 8px;\r\n    letter-spacing: var(--letter-spacing);\r\n}\r\n\r\n/* Fancy styling for button: box shadow is just setting the background when you hover */\r\n#create-project-btn {\r\n    background-color: transparent;\r\n    box-shadow: inset 0 0 0 0 var(--clr-emerald);\r\n    color: black;\r\n    border: 3px solid black;\r\n    padding: var(--section-padding);\r\n}\r\n#create-project-btn:hover {\r\n    box-shadow: inset 0 0 0 120px var(--clr-emerald);\r\n    color: white;\r\n}\r\n\r\n/* Styling for main content section: Section where todos are displayed and todo information is displayed */\r\n#page-main-content {\r\n    background-color: white;\r\n    padding: 12px;\r\n    grid-row: 2;\r\n    grid-column: 2 / end;\r\n    display: grid;\r\n    grid-template-rows: auto 1fr;\r\n}\r\n\r\n/* Styling header of project-main-content */\r\n#main-content-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    row-gap: 6px;\r\n    letter-spacing: var(--letter-spacing);\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n#project-btns-container {\r\n    display: flex;\r\n    column-gap: 12px;\r\n}\r\n#project-btns-container {\r\n    border-width: 3px;\r\n}\r\n#project-btns-container button {\r\n    border-width: 4px;\r\n}\r\n\r\n/* Make it scrollable if it goes past the height content */\r\n#todo-list-container {\r\n    padding: var(--section-padding);\r\n    width: 70%;\r\n    margin: 0 auto;\r\n    grid-row: 2;\r\n    row-gap: 12px;\r\n    overflow-y: auto;\r\n    max-height: 70vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n}\r\n\r\n.todo-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: var(--section-padding);\r\n    border: 3px solid var(--clr-dark-slate);\r\n    transition: var(--transition);\r\n}\r\n\r\n/* For larger screens, we'll hide the description of the todo */\r\n.todo-description-el {\r\n    display: none;\r\n}\r\n\r\n.todo-item:hover {\r\n    box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.5);\r\n}\r\n.todo-item[data-todo-complete=\"true\"] .todo-title-el {\r\n    text-decoration: line-through;\r\n}\r\n\r\n/* Styling for section that shows when you have no todos or no projects created */\r\n#empty-tab-section {\r\n    text-align: center;\r\n    margin: 24px;\r\n    font-weight: 700;\r\n    letter-spacing: var(--letter-spacing);\r\n}\r\n\r\n#empty-tab-message-primary {\r\n    font-size: 28px;\r\n    margin-bottom: 12px;\r\n}\r\n#empty-tab-message-secondary {\r\n    font-size: 16px;\r\n}\r\n\r\n/* Styling for the footer */\r\n#page-footer {\r\n    background-color: var(--clr-emerald);\r\n    color: black;\r\n    text-align: center;\r\n    font-weight: 700;\r\n    padding: var(--section-padding);\r\n    grid-row: 3;\r\n    grid-column: 1 / end;\r\n}\r\n\r\n.site-icons {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n/* Dark mode styling */\r\n#content.dark-mode {\r\n    #page-header,\r\n    #page-footer,\r\n    #page-sidebar,\r\n    #page-main-content {\r\n        color: white;\r\n    }\r\n\r\n    .modal {\r\n        color: white;\r\n        background-color: var(--clr-dark-slate);\r\n    }\r\n    .modal-header {\r\n        color: inherit;\r\n        background-color: var(--clr-dark-gray);\r\n    }\r\n    .modal button {\r\n        color: white;\r\n        border-color: white;\r\n    }\r\n    .modal button:hover {\r\n        color: black;\r\n        border-color: white;\r\n        background-color: white;\r\n    }\r\n\r\n    #page-header,\r\n    #page-footer {\r\n        background-color: var(--clr-dark-gray);\r\n    }\r\n    #page-sidebar {\r\n        background-color: var(--clr-dark-sky);\r\n    }\r\n\r\n    .sidebar-tab {\r\n        border-color: var(--clr-light-teal);\r\n    }\r\n    .sidebar-tab:hover {\r\n        background-color: var(--clr-light-teal);\r\n        .sidebar-tab-title {\r\n            color: black;\r\n        }\r\n    }\r\n    .sidebar-tab[data-active=\"true\"] {\r\n        background-color: var(--clr-light-teal);\r\n        .sidebar-tab-title {\r\n            color: black;\r\n        }\r\n    }\r\n\r\n    .todo-count-el {\r\n        color: black;\r\n    }\r\n\r\n    #page-main-content {\r\n        background-color: var(--clr-dark-slate);\r\n    }\r\n    #toggle-theme-btn {\r\n        color: white;\r\n        border-color: white;\r\n    }\r\n    #toggle-theme-btn:hover {\r\n        background-color: white;\r\n        color: var(--clr-dark-gray);\r\n    }\r\n    .todo-item {\r\n        border-color: var(--clr-light-teal);\r\n    }\r\n\r\n    #create-project-btn,\r\n    #add-todo-btn,\r\n    #edit-project-btn,\r\n    #delete-project-btn,\r\n    .edit-todo-btn,\r\n    .todo-details-btn,\r\n    .delete-todo-btn {\r\n        color: white;\r\n    }\r\n\r\n    #create-project-btn {\r\n        border-color: white;\r\n    }\r\n}\r\n\r\n/* Media queries */\r\n/* \r\n1. For medium sized screens change the layout of the todos\r\n2. Also show the todo descriptions\r\n*/\r\n@media screen and (max-width: 1000px) {\r\n    .todo-item {\r\n        flex-direction: column;\r\n        row-gap: 8px;\r\n    }\r\n    .todo-description-el {\r\n        display: block;\r\n    }\r\n}\r\n\r\n/* For medium-smaller sized screens, we make the header layout more compact */\r\n@media screen and (max-width: 750px) {\r\n    #page-header {\r\n        flex-direction: column;\r\n        padding-bottom: 20px;\r\n    }\r\n    .app-logo-container,\r\n    .user-info-section {\r\n        flex-basis: 0px;\r\n        flex-direction: column;\r\n    }\r\n    .app-logo-container {\r\n        margin-bottom: 16px;\r\n    }\r\n    .user-info-section {\r\n        row-gap: 8px;\r\n    }\r\n}\r\n\r\n/* \r\n- When on really small screens\r\n1. Hide the description of the todo.\r\n2. Change layout of the project, making the sidebar placed under the header\r\n*/\r\n\r\n@media screen and (max-width: 500px) {\r\n    #project-container {\r\n        grid-template-rows: auto;\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    #page-header,\r\n    #page-sidebar {\r\n        font-size: 0.7em;\r\n    }\r\n\r\n    #page-sidebar {\r\n        grid-row: 2 / 3;\r\n    }\r\n\r\n    #page-main-content {\r\n        grid-row: 3 / 4;\r\n        grid-column-start: 1;\r\n    }\r\n    #project-btns-container {\r\n        flex-direction: column;\r\n        row-gap: 8px;\r\n    }\r\n    #todo-list-container {\r\n        width: 100%;\r\n    }\r\n    .todo-description-el {\r\n        display: none;\r\n    }\r\n    #page-footer {\r\n        grid-row: 4 / 5;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}());


/***/ }),

/***/ "./src/assets/icons/github-mark.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/github-mark.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "github-mark.svg";

/***/ }),

/***/ "./src/assets/icons/todo_list_icon.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/todo_list_icon.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "todo_list_icon.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/project-todo-list/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rendering_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rendering.js */ "./src/rendering.js");
/* harmony import */ var _pageListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageListeners.js */ "./src/pageListeners.js");
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules.js */ "./src/modules.js");


webfontloader__WEBPACK_IMPORTED_MODULE_1___default().load({
  google: {
    families: ["Roboto", "Open Sans"]
  }
});



window.addEventListener("DOMContentLoaded", function () {
  (0,_modules_js__WEBPACK_IMPORTED_MODULE_4__.loadLocalStorageProjects)();
  (0,_pageListeners_js__WEBPACK_IMPORTED_MODULE_3__.loadPageListeners)();
  (0,_rendering_js__WEBPACK_IMPORTED_MODULE_2__.renderPage)();
  (0,_rendering_js__WEBPACK_IMPORTED_MODULE_2__.hideModal)();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle40e3167acf50ba45a1c7.js.map