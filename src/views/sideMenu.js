import createElement from "./helpers/createElement";
import sideMenuBottom from "./subViews/sideMenuBottom";
import sideMenuTop from "./subViews/sideMenuTop";

const sideMenu = (dataService) => {
  const addProject = () => {
    dataService.publish("createProject");
  };
  const $parent = createElement({ parent: "#container", css: "side-menu" });
  const $addButton = createElement({
    parent: $parent,
    tag: "button",
    inner: "add",
    click: addProject,
  });
  sideMenuTop($parent);
  sideMenuBottom(dataService, $parent);
};

export default sideMenu;
