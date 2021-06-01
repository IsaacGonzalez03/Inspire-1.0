export class Todo {
  constructor({ id = '', completed, description }) {
    this.id = id
    this.completed = completed || false
    this.description = description
  }
  get Template() {
    return /*html*/ `
    <div class="justify-content-between">
      <div>
        <input type="checkbox" onclick="app.todosController.completeTodo('${this.id}')"> ${this.description}
        <!--add checked attribute based off this.completed -->
        <button class="btn btn-danger btn-sm" onclick="app.todosController.deleteTodo('${this.id}')">Delete</button>
        </div>
    </div>
    `
  }
}