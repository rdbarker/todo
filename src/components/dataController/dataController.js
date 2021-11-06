import Project from "./project";
import Todo from "./todo";

const dataController = () => {
  let allProjects = [];
  let allTodos = [];

  const createTodo = ({
    title = "Blank Title",
    dueDate,
    prio = 1,
    description,
    notes,
    completed = false,
    checkList = [],
    project,
  } = {}) => {
    const todo = new Todo({
      title,
      dueDate,
      prio,
      description,
      notes,
      completed,
      checkList,
      project,
    });
    allProjects.push(todo);
  };
  const createProject = ({
    title = "Blank Project",
    description,
    color = "gray",
  } = {}) => {
    const project = new Project({ title, description, color });
    allProjects.push(project);
  };
  const getAllProjectTitles = () => {
    const titles = allProjects.map((value) => {
      return value["title"];
    });
    return titles;
  };

  return { createTodo, createProject, getAllProjectTitles, createTodo };
};

export default dataController;
