// Объявление переменных

const popupButtonCloseRedaction = document.querySelector(
  ".popup__button-close_redaction"
);
const popupAddButtonClose = document.querySelector(".popup__button-close_add");
const popupOpenSizeButtonClose = document.querySelector(
  ".popup__button-close_open-size"
);

const popupRedaction = document.querySelector(".popup_redaction");
const popupAdd = document.querySelector(".popup_add");
const popupOpenSize = document.querySelector(".popup_open-size");

const formInputKyeUsername = document.querySelector(
  ".form__input_kye_username"
);
const formInputKyeStatus = document.querySelector(".form__input_kye_status");

const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileUsername = document.querySelector(".profile__username");
const profileStatus = document.querySelector(".profile__status");
const profileButtonPluse = document.querySelector(".profile__button-pluse");

const formRedaction = document.querySelector(".form_redaction");
const formAdd = document.querySelector(".form_add");
const formInputKyePlacename = formAdd.querySelector(
  ".form__input_kye_placename"
);
const formInputKyePlacelink = formAdd.querySelector(
  ".form__input_kye_placelink"
);

const elementsContainer = document.querySelector(".elements");

const popupOpenSizeContainer = popupOpenSize.querySelector(
  ".popup__container_open-size"
);
const popupElementImg = popupOpenSize.querySelector(".popup__element-img");
const popupElementText = popupOpenSize.querySelector(".popup__element-text");

const cardTemplate = document.querySelector("#cardTemplete");

const formInputAdd = formAdd.querySelectorAll(".form__input");
const formButtonSaveAdd = formAdd.querySelector(".form__button-save");

// Создание классов

class Card {
  constructor(card, cardTemplate) {
    this._card = card;
    this._name = card.name;
    this._link = card.link;
    this._cardTemplate = cardTemplate;
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

  _openPopupOpenSize() {
    popupElementImg.src = this._link;
    popupElementImg.alt = this._name;
    popupElementText.textContent = this._name;
    openPopup(popupOpenSize);
  }

  _setEventListener() {
    // Обработчик удаления карточки
    this._deleteElementButton.addEventListener("click", this._deleteCardCick);
    // Обработчик лайка
    this._likeElement.addEventListener("click", this._addLike);
    // Обработка открытия попапа с картинкой
    this._elementImg.addEventListener("click", this._openPopupOpenSize);
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
}

//Реализация проходки по всему массиву данных и их выводу
initialCards.forEach((card) => {
  const newCard = new Card(card, cardTemplate);
  elementsContainer.append(newCard.createCard());
  console.log(newCard);
});

// Функция добавления карточки в контейнер

// Переменные и функции которые могут понадобиться

//Функция добавления карточек из массива
// function createCard(card) {
//   const newcard = cardTemplate.content.cloneNode(true); ПЕРЕНЕСЛИ

//   const elementImg = newcard.querySelector(".element__img"); ПЕРЕНЕСЛИ
//   elementImg.setAttribute("src", card.link); ПЕРЕНЕСЛИ
//   elementImg.setAttribute("alt", card.name); ПЕРЕНЕСЛИ

//   const elementText = newcard.querySelector(".element__text"); ПЕРЕНЕСЛИ
//   elementText.textContent = card.name; ПЕРЕНЕСЛИ

//   //Реализуем удаление карточки
//   const deleteElementButton = newcard.querySelector(".element__delete"); ПЕРЕНЕСЛИ
//   deleteElementButton.addEventListener("click", deleteCardCick); //Реализуем удаление карточки по клику ПЕРЕНЕСЛИ

//   //Реализуем лайк карточки
//   const likeElement = newcard.querySelector(".element__like"); ПЕРЕНЕСЛИ
//   likeElement.addEventListener("click", (event) => { ПЕРЕНЕСЛИ
//     event.target.classList.toggle("element__like_active"); ПЕРЕНЕСЛИ
//   });

//   // Реализуем попап открытия картинки
//   elementImg.addEventListener("click", () => {
//     popupElementImg.src = card.link;
//     popupElementImg.alt = card.name;
//     popupElementText.textContent = card.name;
//     openPopup(popupOpenSize);
//   });

//   return newcard; ПЕРЕНЕСЛИ
// }

//Функция удаления карточек ПЕРЕНЕСЛИ
// function deleteCardCick(event) { ПЕРЕНЕСЛИ
//   const buttonDelete = event.target; ПЕРЕНЕСЛИ
//   const element = buttonDelete.closest(".element"); ПЕРЕНЕСЛИ
//   element.remove(); ПЕРЕНЕСЛИ
// } ПЕРЕНЕСЛИ

//Функция добавления новых карточек
function handleSubmitAddCardForm(event) {
  event.preventDefault();
  const placename = formInputKyePlacename.value;
  const placelink = formInputKyePlacelink.value;
  const newCard = { name: placename, link: placelink };
  const card = createCard(newCard);
  elementsContainer.prepend(card);

  closePopup(popupAdd);
  //Очистка импутов после сабмита
  formAdd.reset();
}

// Реализация отправки изменений из попапа добавления карточек в профиль
formAdd.addEventListener("submit", handleSubmitAddCardForm);

// Обьявление функций

//Общая функция открытия попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
  //Реализация закрытия попапов через esc
  document.addEventListener("keydown", closePopupByEsc);
}

//Общая функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  //Реализация закрытия попапов через esc
  document.removeEventListener("keydown", closePopupByEsc);
}

//Функция переноса текста из профиля в попап
function openPopupRedaction() {
  openPopup(popupRedaction);
  formInputKyeUsername.value = profileUsername.textContent; //реализуем перенос текста из профиля в попап
  formInputKyeStatus.value = profileStatus.textContent;
  resetFormErrors(formRedaction, validationConfig); //Очистка импутов с ошибкой
}

// Функция отправки изменений из попапа в профиль
function handleSubmitProfileForm(event) {
  event.preventDefault();

  profileUsername.textContent = formInputKyeUsername.value;
  profileStatus.textContent = formInputKyeStatus.value;
  closePopup(popupRedaction);
}

//Функция закрытия попапа redaction
function closePopupRedaction() {
  closePopup(popupRedaction);
}

// //Функция добавления карточек из массива
// function createCard(card) {
//   const newcard = cardTemplate.content.cloneNode(true);

//   const elementImg = newcard.querySelector(".element__img");
//   elementImg.setAttribute("src", card.link);
//   elementImg.setAttribute("alt", card.name);

//   const elementText = newcard.querySelector(".element__text");
//   elementText.textContent = card.name;

//   //Реализуем удаление карточки
//   const deleteElementButton = newcard.querySelector(".element__delete");
//   deleteElementButton.addEventListener("click", deleteCardCick); //Реализуем удаление карточки по клику

//   //Реализуем лайк карточки
//   const likeElement = newcard.querySelector(".element__like");
//   likeElement.addEventListener("click", (event) => {
//     event.target.classList.toggle("element__like_active");
//   });

//   // Реализуем попап открытия картинки
//   elementImg.addEventListener("click", () => {
//     popupElementImg.src = card.link;
//     popupElementImg.alt = card.name;
//     popupElementText.textContent = card.name;
//     openPopup(popupOpenSize);
//   });

//   return newcard;
// }

//Функция удаления попапа с картинкой
function closePopupOpenSize() {
  closePopup(popupOpenSize);
}

// //Функция удаления карточек
// function deleteCardCick(event) {
//   const buttonDelete = event.target;
//   const element = buttonDelete.closest(".element");
//   element.remove();
// }

// //Функция добавления новых карточек
// function handleSubmitAddCardForm(event) {
//   event.preventDefault();
//   const placename = formInputKyePlacename.value;
//   const placelink = formInputKyePlacelink.value;
//   const newCard = { name: placename, link: placelink };
//   const card = createCard(newCard);
//   elementsContainer.prepend(card);

//   closePopup(popupAdd);
//   //Очистка импутов после сабмита
//   formAdd.reset();
// }

//Функция закрытия попапов по клику вне контейнера
function handleCloseByOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.currentTarget);
  }
}

//Функция закрытия попапов по нажатию на esc
function closePopupByEsc(event) {
  if (event.key === "Escape") {
    const poppupClose = document.querySelector(".popup_opened");
    closePopup(poppupClose);
  }
}

//Реализация добавления обработчиков

// Реализация открытия и закрытия попапа редактирования профиля
profileButtonEdit.addEventListener("click", openPopupRedaction);
popupButtonCloseRedaction.addEventListener("click", closePopupRedaction);

// Реализация отправки формы редактирования профиля
formRedaction.addEventListener("submit", handleSubmitProfileForm);

// //Реализация проходки по всему массиву данных и их выводу
// initialCards.forEach((card) => {
//   const newCard = createCard(card);
//   elementsContainer.append(newCard);
// });

// // Реализация отправки изменений из попапа добавления карточек в профиль
// formAdd.addEventListener("submit", handleSubmitAddCardForm);

//Реализация открытия и закрытия попапа редактирования карточек
profileButtonPluse.addEventListener("click", function () {
  resetFormErrors(formAdd, validationConfig); //Очистка импутов с ошибкой
  toggleButtonState(
    formInputAdd,
    formButtonSaveAdd,
    validationConfig.inactiveButtonClass
  );
  openPopup(popupAdd);
});
popupAddButtonClose.addEventListener("click", function () {
  closePopup(popupAdd);
  //Очистка импутов после закрытие попапа
  formAdd.reset();
});

//Реализация закрытия попапа с картинкой
popupOpenSizeButtonClose.addEventListener("click", closePopupOpenSize);

//Реализация закрытия попапов при клике на overlay
const popups = Array.from(document.querySelectorAll(".popup"));
popups.forEach((popup) => {
  popup.addEventListener("click", handleCloseByOverlay);
});
