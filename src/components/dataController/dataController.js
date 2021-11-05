import Project from "./project";
import Todo from "./todo";

const dataController = () => {
  let allTodos = [];
  let allProjects = [];
  const createTodo = (obj) => {
    console.log(obj);
  };
  const createProject = (obj) => {
    console.log(obj);
  };
  return { createTodo, createProject };
};

export default dataController;
