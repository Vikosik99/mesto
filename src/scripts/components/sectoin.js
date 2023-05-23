export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialCards = items; //Массив карточек
    this._renderer = renderer;
    this._elementsContainer = document.querySelector(containerSelector);
  }

  createCardFromArray() {
    this._initialCards.forEach((card) => {
      this.addItem(card);
    });
  }

  addItem(elementDom) {
    this._elementsContainer.append(this._renderer(elementDom));
  }

  addItemNew(elementDom) {
    this._elementsContainer.prepend(this._renderer(elementDom));
  }
}
