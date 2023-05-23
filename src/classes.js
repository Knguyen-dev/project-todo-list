// Using composition style of making classes for more flexibility.

class Title {
	constructor(title) {
		this.title = title;
	}
	setTitle(newTitle) {
		this.title = newTitle;
	}
	getTitle() {
		return this.title;
	}
}
class Description {
	constructor(description) {
		this.description = description;
	}
	setDescription(newDescription) {
		this.description = newDescription;
	}
	getDescription() {
		return this.description;
	}
}
class Priority {
	constructor(priority) {
		this.priority = priority;
	}
	setPriority(newPriority) {
		this.priority = newPriority;
	}
	getPriority() {
		return this.priority;
	}
}

// Todo class: dueDate is just the value of the input date element
class Todo {
	constructor(title, description, dueDate, priority) {
		this.title = new Title(title);
		this.description = new Description(description);
		this.dueDate = new Date(dueDate);
		this.priority = new Priority(priority);
	}
}

// The project class: has title, but should have a list of todos 
class Project {
	constructor(title) {
		this.title = new Title(title);
		this.projectTodos = []; 
	}
	getProjectTodos() {
		return this.projectTodos;
	}
}

// Note class; just an extra class, but it's kind of just for demonstration purposes; not actually going to use it
class Note {
	constructor(description) {
		this.description = new Description(description);
	}
}

export { Todo, Project };