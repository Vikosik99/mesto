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

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._functionSubmit();
    });
  }

  open() {
    super.open();
  }
}
