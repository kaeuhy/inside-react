export class TodoModel {
  constructor() {
    this.todos = [];
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach((listener) => listener(this.todos));
  }

  addTodo(todo) {
    this.todos.push(todo);
    this.notify();
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
    this.notify();
  }

  getTodos() {
    return this.todos;
  }
}
