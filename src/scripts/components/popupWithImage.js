import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupElementImg = this._popupSelector.querySelector(
      ".popup__element-img"
    );
    this._popupElementText = this._popupSelector.querySelector(
      ".popup__element-text"
    );
  }

  open = (card) => {
    this._popupElementImg.src = card.placelink;
    this._popupElementImg.alt = card.placename;
    this._popupElementText.textContent = card.placename;
    super.open();
  };
}
