import createElement from "./helpers/createElement";

const sideMenu = (dataService) => {
  const render = (list) => {
    $projectsMenuContainer.innerText = "";
    list.forEach((element) => {
      const $element = createElement({
        parent: $projectsMenuContainer,
        inner: element,
      });
    });
  };
  let currentProjects = [];
  dataService.subscribe("projects", render);
  const $sidebarContainer = createElement({ parent: "#container" });
  const $today = createElement({ parent: $sidebarContainer, inner: "Today" });
  const $week = createElement({
    parent: $sidebarContainer,
    inner: "This Week",
  });
  const $month = createElement({
    parent: $sidebarContainer,
    inner: "This Month",
  });
  const $seperator = createElement({ parent: $sidebarContainer });
  const $projectsMenuContainer = createElement({
    parent: "#container",
    id: "menucontainer",
  });
};

export default sideMenu;
