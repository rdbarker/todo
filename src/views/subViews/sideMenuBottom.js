import createElement from "../helpers/createElement";

const sideMenuBottom = (dataService, parentContainer) => {
  const render = (list) => {
    $parent.innerText = "";
    list.forEach((element) => {
      const $element = createElement({
        parent: $parent,
        inner: element,
        tag: "li",
      });
    });
  };
  let currentProjects = [];
  dataService.subscribe("projectsUpdate", render);
  const $parent = createElement({ tag: "ul", parent: parentContainer });
};

export default sideMenuBottom;
