export class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.subscribe((todos) => {
      this.view.renderTodos(todos);
    });

    this.view.addButton.addEventListener(
      "click",
      this.handleAddTodo.bind(this),
    );
    this.view.todoList.addEventListener(
      "click",
      this.handleDeleteTodo.bind(this),
    );

    this.view.renderTodos(this.model.getTodos());
  }

  handleAddTodo() {
    const todoText = this.view.input.value.trim();
    if (todoText) {
      this.model.addTodo(todoText);
      this.view.input.value = "";
    }
  }

  handleDeleteTodo(event) {
    if (event.target.tagName === "BUTTON") {
      const index = parseInt(event.target.dataset.index, 10);
      this.model.removeTodo(index);
    }
  }
}
