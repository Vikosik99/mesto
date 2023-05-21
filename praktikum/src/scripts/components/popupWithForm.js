import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, colbeckSubmitForm) {
    super(popupSelector);
    this._colbeckSubmitForm = colbeckSubmitForm;
    this._form = this._popupSelector.querySelector(".form");
    this._inputAll = this._form.querySelectorAll(".form__input");
  }

  _getInputValues() {
    this._value = {};
    this._inputAll.forEach((input) => {
      this._value[input.name] = input.value;
    });
    return this._value;
  }

  setInputValues(inputText) {
    this._inputAll.forEach((input) => {
      input.value = inputText[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._colbeckSubmitForm(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
