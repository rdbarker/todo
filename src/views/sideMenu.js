import createElement from "./helpers/createElement";

const sideMenu = (dataService) => {
  const render = (list) => {
    list.forEach((element) => {
      createElement({ parent: $sidebarContainer, inner: element });
    });
  };
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
  const projectsBar = [];
  const tmplist = ["sample project", "another project", "one more"];
  render(tmplist);
};

export default sideMenu;
