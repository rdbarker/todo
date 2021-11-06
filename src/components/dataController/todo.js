class Todo {
  constructor({
    title,
    dueDate,
    prio,
    description,
    notes,
    completed,
    checkList,
    project,
  }) {
    this.title = title;
    this.dueDate = dueDate;
    this.prio = prio;
    this.description = description;
    this.notes = notes;
    this.completed = completed;
    this.checkList = checkList;
    this.project = project;
  }
}

export default Todo;
