export default class Section {
    constructor({ items, renderer }, containerSelector) {
      this._renderedItems = items;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  
    _deleteCard = (idx) => {
      this._renderedItems.splice(idx, 1)
      this.renderItems()
    }
  
    addItem(element) {
      this._renderedItems.unshift(element);
      this.renderItems()
    }
  
    clear() {
      this._container.innerHTML = "";
    }
  
    renderItems() {
      this._renderer(this._container, this._renderedItems)
    }
  }