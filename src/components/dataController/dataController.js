import Project from "./project";
import Todo from "./todo";

const dataController = (dataService) => {
  let allProjects = [];
  let allTodos = [];
  const publishProjects = () => {
    dataService.publish("projectsUpdate", getAllProjectTitles());
  };
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
    publishProjects();
  };
  const getAllProjectTitles = () => {
    const titles = allProjects
      .map((value) => {
        return value["title"];
      })
      .sort();
    return titles;
  };
  dataService.subscribe("createProject", createProject);
  return { createTodo, createProject, getAllProjectTitles, createTodo };
};

export default dataController;
