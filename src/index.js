import { renderInitialPage } from "./rendering.js";
import { tabsModule } from "./modules.js";
import { Project, Todo } from "./classes.js";

function loadDummyData() {
    const project1 = new Project("Go to the pub!");
    const todo1 = new Todo("Todo1", "Desc todo1", "2017-06-01", "Low");
    const todo2 = new Todo("Todo2", "Desc todo2", "2020-05-22", "Medium");
    const todo3 = new Todo("Todo3", "Desc todo3", "2019-12-20", "High");
    const todo4 = new Todo("Todo4", "Desc todo4", "2021-01-20", "Low");
    project1.addTodo(todo1);
    project1.addTodo(todo2);
    project1.addTodo(todo3);
    project1.addTodo(todo4);

    const project2 = new Project("Go Gym!");
    const todo5 = new Todo("Todo5", "Desc todo5", "2018-10-20", "High");
    const todo6 = new Todo("Todo6", "Desc todo6", "2022-01-10", "Low");
    project2.addTodo(todo5);
    project2.addTodo(todo6);

    tabsModule.projectsList.push(project1);
    tabsModule.projectsList.push(project2);
}

/*
BOOK MARK:

1. Set up event listeners for adding projects, adding todos, editing projects, and 
	deleting projects
1. Set up event listeners for the edit, details, and delete buttons.
3. Style the todo items, to look somewhat better 




*/

window.addEventListener("DOMContentLoaded", () => {
    console.log("Window loaded");
    loadDummyData();
    renderInitialPage();
});
