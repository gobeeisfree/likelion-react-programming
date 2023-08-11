export function getElem(selector, context = document) {
  return context.querySelector(selector);
}
export function getElems(selector, context = document) {
  return context.querySelectorAll(selector);
}
