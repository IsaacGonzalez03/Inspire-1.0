import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"

function _drawTodos() {
  let template = ''
  let todos = ProxyState.todos
  todos.forEach(t => template += t.Template)
  document.getElementById('todos').innerHTML = template
  // console.log('draw todos')
}

export class TodosController {
  constructor() {
    ProxyState.on('todos', _drawTodos)
    // console.log('todos controller')
    this.getTodo()
  }
  async getTodo() {
    try {
      await todosService.getTodo()
    } catch (error) {
      console.error(error)
    }
  }
  async addTodo() {
    window.event.preventDefault()
    let form = window.event.target
    let rawTodo = {
      description: form.description.value
    }
    await todosService.addTodo(rawTodo)
    form.reset()
  }
  async deleteTodo(id) {
    try {
      await todosService.deleteTodo(id)
    } catch (error) {
      console.error(error)
    }
  }
  async completeTodo(id) {
    try {
      todosService.completeTodo(id)
    } catch (error) {
      console.error(error)
    }
  }
}