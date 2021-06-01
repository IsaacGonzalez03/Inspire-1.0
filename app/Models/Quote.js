export class Quote {
  constructor({ content, author }) {
    this.content = content
    this.author = author
  }

  get Template() {
    return `
    <div>
    <p class="myDIV">${this.content}</p>
    <p class="hide">${this.author}</p>
    </div>
    `
  }
}