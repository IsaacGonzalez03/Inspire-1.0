import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"

function _drawTodos() {
  let template = ''
  let todos = ProxyState.todos
  todos.forEach(t => template += t.Template)
  document.getElementById('todos').innerHTML = template
  // console.log('draw todos')
}

function _todoCount() {
  let todos = ProxyState.todos
  let totalTodos = todos.length
  let completed = 0
  todos.forEach(t => {
    if (t.completed == true) {
      completed += 1
    }
  })
  document.getElementById('todo-count').innerHTML = `Total Todo's: ${totalTodos} Completed: ${completed}`
}


export class TodosController {
  constructor() {
    ProxyState.on('todos', _drawTodos)
    ProxyState.on('todos', _todoCount)
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