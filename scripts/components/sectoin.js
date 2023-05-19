import { elementsContainer } from "../utils/constant.js";

export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialCards = items; //Массив карточек
    this._renderer = renderer; //Скорее всего будет публичным
    this._elementsContainer = document.querySelector(containerSelector);
  }

  createCardFromArray() {
    this._initialCards.forEach((card) => {
      this.addItem(this._renderer(card));
    });
  }

  addItem(elementDom) {
    elementsContainer.append(elementDom);
  }

  createCardFromArrayNew() {
    this._initialCards.forEach((card) => {
      this.addItemNew(this._renderer(card));
    });
  }

  addItemNew(elementDom) {
    elementsContainer.prepend(elementDom);
  }
}

// //Реализация проходки по всему массиву данных и их выводу
// initialCards.forEach((card) => {
//     elementsContainer.append(createCard(card));
//   });

//Функция добавления новых карточек
// function handleSubmitAddCardForm(event) {
//     event.preventDefault();
//     const placename = formInputKyePlacename.value;
//     const placelink = formInputKyePlacelink.value;
//     const newCard = { name: placename, link: placelink };
//     elementsContainer.prepend(createCard(newCard));

//     closePopup(popupAdd);
//     //Очистка импутов после сабмита
//     formAdd.reset();
//   }
