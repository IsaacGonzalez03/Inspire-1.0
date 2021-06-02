export class Todo {
  constructor({ id = '', completed, description }) {
    this.id = id
    this.completed = completed || false
    this.description = description
  }
  get Template() {
    return /*html*/ `
    <div>
      <div>
        <input type="checkbox" onclick="app.todosController.completeTodo('${this.id}')" ${this.completed ? 'checked' : ''}> ${this.description}
        <!--add checked attribute based off this.completed Ternary?-->
        <h3 class="fas fa-bomb glow text-dark tls" onclick="app.todosController.deleteTodo('${this.id}')"></h3>
        </div>
    </div>
    `
  }
}


