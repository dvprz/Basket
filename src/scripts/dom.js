/*
 * Taken from http://youmightnotneedjquery.com/
 */

const doc = document

export function ready(fn) {
  if (doc.attachEvent ? doc.readyState === "complete" : doc.readyState !== "loading"){
    fn();
  } else {
    doc.addEventListener('DOMContentLoaded', fn);
  }
}

export function hasClass(el, className) {
  return el.classList.contains(className)
}