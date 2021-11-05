class Project {
  constructor({ title, description, color, listOfTodos = [] } = {}) {
    this.title = title;
    this.description = description;
    this.color = color;
    this.listOfTodos = listOfTodos;
  }
}
export default Project;
