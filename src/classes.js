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

/*
- Completion class to see if a todo is complete

NOTE: Yes, completion can be described in one boolean, but the idea behind 
	it is that if multiple classes need this attribute of being 'Complete', we don't
	have to deal with making functions set or get their completion status
*/
class Completion {
    constructor(isComplete) {
        this.isComplete = isComplete;
    }
    setCompletion(isComplete) {
        this.isComplete = isComplete;
    }
    getCompletion() {
        return this.isComplete;
    }
}

// Todo class: dueDate is just the value of the input date element
/*
NOTE: isComplete is default false because of the idea that if you create a todo or 
	are given a task in rela life, it's likely not going to be immediately completed.
*/
class Todo {
    constructor(title, description, dueDate, priority, isComplete = false) {
        this.title = new Title(title);
        this.description = new Description(description);
        this.dueDate = new Date(dueDate);
        this.priority = new Priority(priority);
        this.isComplete = new Completion(isComplete);
    }
}

// The project class: has title, but should have a list of todos
class Project {
    constructor(title = "Sample Project") {
        this.title = new Title(title);
        this.projectTodos = [];
    }

    addTodo(todo) {
        this.projectTodos.push(todo);
    }

    // Replaces todo class instance at index 'i' by replacing
    // old todo, with a new todo that has the new information
    replaceTodoAtIndex(i, todo) {
        this.projectTodos[i] = todo;
    }

    removeTodoAtIndex(i) {
        this.projectTodos.splice(i, 1);
    }

    // Gets number of incomplete todos from projectTodos
    getIncompleteTodoCount() {
        let count = 0;
        this.projectTodos.forEach((todo) => {
            if (!todo.isComplete.getCompletion()) {
                count += 1;
            }
        });
        return count;
    }
}

export { Todo, Project };
