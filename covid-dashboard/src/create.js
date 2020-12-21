function create(el, classNames, child, parent, ...dataAttr) {
  let element = null;
  try {
    element = document.createElement(el);
  } catch (error) {
    throw new Error("Unable to create HTMLElement! Give a proper tag name");
  }
  if (classNames) element.classList.add(...classNames.split(" ")); // "class1 class2 class3"
  if (child && Array.isArray(child)) {
    child.forEach(
      (childElement) => childElement && element.appendChild(childElement)
    );
  } else if (child && typeof child === "object") {
    element.appendChild(child);
  } else if (child && typeof child === "string") {
    element.innerHTML = child;
  }
  if (parent) {
    parent.appendChild(element);
  }
  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue === "") {
        element.setAttribute(attrName, "");
      }
      if (attrName.match(/type|id|value|for|name|selected|height|width/)) {
        element.setAttribute(attrName, attrValue);
      } else {
        element.dataset[attrName] = attrValue;
      }
    });
  }
  return element;
}

export default create;
