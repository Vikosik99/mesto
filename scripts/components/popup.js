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
    if (event.key === "Escape") {
      this.close();
    }
  };

  _handleClosePopup = () => {
    this.close();
  };

  _handleCloseByOverlay = (event) => {
    if (event.target === event.currentTarget) {
      this.close();
    }
  };
}

// //Функция закрытия попапов по клику вне контейнера
// function handleCloseByOverlay(event) {
//     if (event.target === event.currentTarget) {
//       closePopup(event.currentTarget);
//     }
//   }

// //Реализация закрытия попапов при клике на overlay
// const popups = Array.from(document.querySelectorAll(".popup"));
// popups.forEach((popup) => {
//   popup.addEventListener("click", handleCloseByOverlay);
// });

// //Функция закрытия попапа redaction
// function closePopupRedaction() {
//     closePopup(popupRedaction);
//   }
// // Реализация открытия и закрытия попапа редактирования профиля
// profileButtonEdit.addEventListener("click", openPopupRedaction);
// popupButtonCloseRedaction.addEventListener("click", closePopupRedaction);

// //Общая функция открытия попапов
// function openPopup(popup) {
//     popup.classList.add("popup_opened");
//     //Реализация закрытия попапов через esc
//     document.addEventListener("keydown", closePopupByEsc);
//   }

//   //Общая функция закрытия попапов
// function closePopup(popup) {
//     popup.classList.remove("popup_opened");
//     //Реализация закрытия попапов через esc
//     document.removeEventListener("keydown", closePopupByEsc);
//   }
// //Функция закрытия попапов по нажатию на esc
// function closePopupByEsc(event) {
//   if (event.key === "Escape") {
//     const poppupClose = document.querySelector(".popup_opened");
//     closePopup(poppupClose);
//   }
// }
