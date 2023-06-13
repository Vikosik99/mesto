export default class Section {
  constructor(renderer, containerSelector) {
    // this._initialCards = items; //Массив карточек
    this._renderer = renderer;
    this._elementsContainer = document.querySelector(containerSelector);
  }

  createCardFromArray(dataCardServer) {
    dataCardServer.forEach((card) => {
      this._renderer(card);
    });
  }

  addItem(elementDom) {
    this._elementsContainer.append(elementDom);
  }

  addItemNew(elementDom) {
    this._elementsContainer.prepend(elementDom);
  }
}
