import createElement from "./helpers/createElement.js";
import sideMenuBottom from "./sideMenu/sideMenuBottom";
import sideMenuTop from "./sideMenu/sideMenuTop";

const sideMenu = (dataService) => {
  const addProject = () => {
    dataService.publish("createProject");
  };
  const $parent = createElement({ parent: "#container", css: "side-menu" });
  const $addButton = createElement({
    parent: $parent,
    tag: "a",
    inner: "add",
    href: "#add-modal",
  });
  sideMenuTop($parent);
  sideMenuBottom(dataService, $parent);
};

export default sideMenu;
