//Импорты
import {
  initialCards,
  popupButtonCloseRedaction,
  popupAddButtonClose,
  popupOpenSizeButtonClose,
  popupRedaction,
  popupAdd,
  popupOpenSize,
  formInputKyeUsername,
  formInputKyeStatus,
  profileButtonEdit,
  profileUsername,
  profileStatus,
  profileButtonPluse,
  formRedaction,
  formAdd,
  formInputKyePlacename,
  formInputKyePlacelink,
  elementsContainer,
  cardTemplate,
  validationConfig,
  formPopupRedaction,
  formPopupAdd,
} from "./constant.js";
import Card from "./card.js";
import FormValidator from "./formValidator.js";

// Экземпляр класса FormValidator для формы изменения профиля
const formPopupRedactionValidator = new FormValidator(
  validationConfig,
  formPopupRedaction
);
formPopupRedactionValidator.enableValidation(); //Запуск валидации

// Экземпляр класса FormValidator для формы редактирования карточек
const formPopupAddValidator = new FormValidator(validationConfig, formPopupAdd);
formPopupAddValidator.enableValidation(); //Запуск валидации

// Обьявление функций

//Функция добавления новых карточек
function handleSubmitAddCardForm(event) {
  event.preventDefault();
  const placename = formInputKyePlacename.value;
  const placelink = formInputKyePlacelink.value;
  const newCard = { name: placename, link: placelink };
  const card = new Card(newCard, cardTemplate);
  elementsContainer.prepend(card.createCard());

  closePopup(popupAdd);
  //Очистка импутов после сабмита
  formAdd.reset();
}

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
  formPopupRedactionValidator.resetFormErrors();
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

//Реализация проходки по всему массиву данных и их выводу
initialCards.forEach((card) => {
  const newCard = new Card(card, cardTemplate);
  elementsContainer.append(newCard.createCard());
});

// Реализация открытия и закрытия попапа редактирования профиля
profileButtonEdit.addEventListener("click", openPopupRedaction);
popupButtonCloseRedaction.addEventListener("click", closePopupRedaction);

// Реализация отправки формы редактирования профиля
formRedaction.addEventListener("submit", handleSubmitProfileForm);

//Реализация открытия и закрытия попапа редактирования карточек
profileButtonPluse.addEventListener("click", function () {
  formPopupAddValidator.resetFormErrors();
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

// Реализация отправки изменений из попапа добавления карточек в профиль
formAdd.addEventListener("submit", handleSubmitAddCardForm);

//Экспорты
export { openPopup };
