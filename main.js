/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/StartPage.js
class StartPage {
  constructor(container) {
    this.container = container;
  }
  drawUI() {
    this.container.innerHTML = StartPage.markup;
  }
  static get markup() {
    return `
    <div class="container" novalidate>
        <button class="btn" type="submit">Click to toggle popover</button>
        <div class="tooltip">
            <h2 class="tooltip-title">Popover title</h2>
            <p class="tooltip-text">And here's some amazing content. It's very engaging. Right?</p>
        </div>`;
  }
}
;// CONCATENATED MODULE: ./src/js/listner.js
class Listner {
  constructor(tooltip) {
    this.tooltip = tooltip;
  }
  onButton(e) {
    e.preventDefault();
    const popover = this.tooltip.querySelector(".tooltip");
    if (popover.classList.contains("active")) {
      popover.classList.remove("active");
    } else {
      popover.classList.add("active");
    }
  }
  bind() {
    const button = this.tooltip.querySelector(".btn");
    button.addEventListener("click", e => this.onButton(e));
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const page = new StartPage(document.querySelector("body"));
page.drawUI();
const listner = new Listner(document.querySelector(".container"));
listner.bind();
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;