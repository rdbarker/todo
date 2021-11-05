class Todo {
  constructor({
    title = "Blank Title",
    dueDate,
    prio = 1,
    description,
    notes,
    completed = false,
    checkList = [],
  } = {}) {
    this.title = title;
    this.dueDate = dueDate;
    this.prio = prio;
    this.description = description;
    this.notes = notes;
    this.completed = completed;
    this.checkList = checkList;
  }
}

export default Todo;
