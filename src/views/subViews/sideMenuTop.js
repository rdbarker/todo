import createElement from "../helpers/createElement";

const sideMenuTop = (parentContainer) => {
  const $parent = createElement({ parent: parentContainer, tag: "ul" });
  const $today = createElement({ parent: $parent, inner: "Today", tag: "li" });
  const $week = createElement({
    parent: $parent,
    inner: "This Week",
    tag: "li",
  });
  const $month = createElement({
    parent: $parent,
    inner: "This Month",
    tag: "li",
  });
};

export default sideMenuTop;
