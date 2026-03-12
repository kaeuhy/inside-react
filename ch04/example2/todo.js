import { TodoController } from "./TodoController.js";
import { TodoModel } from "./TodoModel.js";
import { TodoView } from "./TodoView.js";

const app = new TodoController(new TodoModel(), new TodoView());
