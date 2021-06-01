import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js";

class TodosService {
  async addTodo(rawTodo) {
    let res = await sandboxApi.post('', rawTodo)
    console.log(res)
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
  }
  async getTodo() {
    let res = await sandboxApi.get()
    ProxyState.todos = res.data.map(t => new Todo(t))
  }
  async deleteTodo(id) {
    let todo = ProxyState.todos.find(t => t.id === id)
    console.log(todo)
    let res = await sandboxApi.delete("/" + todo.id)
    // ProxyState.todos = ProxyState.todos.filter(t => t.id !== id)
    this.getTodo()
    console.log(res)
  }
  async completeTodo(id) {
    let todo = ProxyState.todos.find(t => t.id === id)
    if (todo.completed == false) {
      todo.completed = true
    }
    await sandboxApi.put(todo.id, todo)
    ProxyState.todos = ProxyState.todos
  }
}

export const todosService = new TodosService();