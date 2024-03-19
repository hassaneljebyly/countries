export function getNextSibling({
  parentElement,
  nextElementSibling,
  previousElementSibling,
}) {
  const firstChildElement = parentElement.firstChild;
  const lastChildElement = parentElement.lastChild;
  const nextElement = nextElementSibling || firstChildElement;
  const previousElement = previousElementSibling || lastChildElement;
  return { nextElement, previousElement };
}

export function focusNextOption({ code, target }) {
  const { nextElement, previousElement } = getNextSibling(target);
  if (code === 'ArrowUp') {
    previousElement.focus();
  } else if (code === 'ArrowDown') {
    nextElement.focus();
  }
}

export function focusSelected() {
  const firstElement = document.querySelector(
    '.select-menu__options:first-child'
  );
  const selectedElement = document.querySelector(
    '.select-menu__options[aria-selected="true"]'
  );
  const defaultSelected = selectedElement || firstElement;
  defaultSelected.focus();
}

export function closeMenuAndFocus(keyCode, setFilterExpanded) {
  if (keyCode === 'Escape' || keyCode === 'Tab') {
    setFilterExpanded(false);
    document.querySelector('.select-menu__button').focus();
  }
}
