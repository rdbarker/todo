const createElement = ({
  tag = "div",
  parent = "",
  inner = "",
  css = "",
  src = "",
  id = "",
  href = "",
  click,
} = {}) => {
  const element = document.createElement(tag);
  if (css) element.classList = css;
  if (src) element.src = src;
  if (id) element.id = id;
  if (inner) {
    if (typeof inner === "string") element.textContent = inner;
    else {
      element.appendChild(inner);
    }
  }
  if (href) {
    element.href = href;
  }
  if (parent) {
    if (typeof parent === "string" || parent instanceof String) {
      document.querySelector(parent).appendChild(element);
    } else {
      parent.appendChild(element);
    }
  } else {
    document.querySelector("body").appendChild(element);
  }

  if (click) {
    element.addEventListener("click", click);
  }

  return element;
};

export default createElement;
