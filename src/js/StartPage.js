

export default class StartPage {
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
