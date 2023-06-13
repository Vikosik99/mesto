import Popup from "./popup.js";

export default class PopupWithFormDelete extends Popup {
  constructor(popupSelector, functionSubmit) {
    super(popupSelector);
    this._functionSubmit = functionSubmit;
    this._form = this._popupSelector.querySelector(".form");
  }

  setSubmitAction(functionSubmit) {
    this._functionSubmit = functionSubmit;
  }

  _setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._functionSubmit({ card: this._cloneElement, cardId: this._cardId });
      this.close();
    });
  }

  close() {
    super.close();
    // this._form.reset();
  }

  open() {
    super.open();
    // this._form.reset();
    // this._cloneElement = card;
    // this._cardId = cardId;
  }
}
