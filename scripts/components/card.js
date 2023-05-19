//Импорты
import { popupElementImg, popupElementText } from "../utils/constant.js";
import { handleCardClick } from "../../pages/index.js";

//Классы
export default class Card {
  constructor(card, cardTemplate, handleCardClick) {
    this._card = card;
    this._name = card.placename;
    this._link = card.placelink;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
  }

  createCard() {
    this._cloneElement = this._getCloneTemplate();
    this._elementImg = this._cloneElement.querySelector(".element__img");
    this._elementText = this._cloneElement.querySelector(".element__text");
    this._deleteElementButton =
      this._cloneElement.querySelector(".element__delete");
    this._likeElement = this._cloneElement.querySelector(".element__like");

    this._elementImg.setAttribute("src", this._link);
    this._elementImg.setAttribute("alt", this._name);

    this._elementText.textContent = this._name;

    this._setEventListener();

    return this._cloneElement;
  }

  _getCloneTemplate() {
    const newcard = this._cardTemplate.content.cloneNode(true);
    return newcard;
  }

  // Функция удаления карточек
  _deleteCardCick(event) {
    const buttonDelete = event.target;
    const element = buttonDelete.closest(".element");
    element.remove();
  }

  // Функция добавления лайка
  _addLike(event) {
    event.target.classList.toggle("element__like_active");
  }

  // Функция открытия попапа с картинкой
  _openPopupOpenSize = () => {
    popupElementImg.src = this._link;
    popupElementImg.alt = this._name;
    popupElementText.textContent = this._name;
    // openPopup(popupOpenSize);
  };

  _openPopupOS = () => {
    this._handleCardClick(this._card);
  };

  _setEventListener() {
    // Обработчик удаления карточки
    this._deleteElementButton.addEventListener("click", this._deleteCardCick);
    // Обработчик лайка
    this._likeElement.addEventListener("click", this._addLike);
    // Обработка открытия попапа с картинкой
    this._elementImg.addEventListener("click", this._openPopupOS);
  }
}
