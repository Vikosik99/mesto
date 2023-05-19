export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._popupButtonClose = this._popupSelector.querySelector(
      ".popup__button-close"
    );
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    //Реализация закрытия попапов через esc
    document.addEventListener("keydown", this._handleByEscClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    //Реализация закрытия попапов через esc
    document.removeEventListener("keydown", this._handleByEscClose);
  }

  setEventListeners() {
    this._popupButtonClose.addEventListener("click", this._handleClosePopup);
    //Реализация закрытия попапов при клике на overlay
    this._popupSelector.addEventListener("click", this._handleCloseByOverlay);
  }

  _handleByEscClose = (event) => {
    //Функция закрытия попапов через esc
    if (event.key === "Escape") {
      this.close();
    }
  };

  _handleClosePopup = () => {
    this.close();
  };

  _handleCloseByOverlay = (event) => {
    //Функция закрытия попапов при клике на overlay
    if (event.target === event.currentTarget) {
      this.close();
    }
  };
}
