import createElement from "./helpers/createElement";
import sideMenuBottom from "./subViews/sideMenuBottom";
import sideMenuTop from "./subViews/sideMenuTop";

const sideMenu = (dataService) => {
  const $parent = createElement({ parent: "#container", css: "side-menu" });
  sideMenuTop($parent);
  sideMenuBottom(dataService, $parent);
};

export default sideMenu;
