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
  popupElementImg,
  popupElementText,
} from "./scripts/utils/constant.js";
import Card from "./scripts/components/card.js";
import FormValidator from "./scripts/components/formValidator.js";
import PopupWithImage from "./scripts/components/popupWithImage.js";
import Section from "./scripts/components/sectoin.js";
import UserInfo from "./scripts/components/userInfo.js";
import PopupWithForm from "./scripts/components/popupWithForm.js";

// Функция добавления новой карточки
// function createCard(item) {   //ПЕРЕНЕСЛИ
//   const card = new Card(item, cardTemplate, openPopupOpenSize.open);
//   const cardElement = card.createCard();
//   return cardElement;   //ПЕРЕНЕСЛИ
// }
// //Селектора
const popupRedactionSelector = ".popup_redaction";
const popupOpenSizeSelector = ".popup_open-size";
const popupAddSelector = ".popup_add";

const elementsContainerSelector = ".elements";
const userInfoSelectors = {
  profileUsername: ".profile__username",
  profileStatus: ".profile__status",
};

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, cardTemplate, openPopupOpenSize.open);
      const cardElement = card.createCard();
      return cardElement;
    },
  },
  elementsContainerSelector
);

// Попап открытия картинки
const openPopupOpenSize = new PopupWithImage(popupOpenSizeSelector);
openPopupOpenSize.setEventListeners();

const userInfo = new UserInfo(userInfoSelectors);

//Попап редактирования профиля
const popupRedactionForm = new PopupWithForm(popupRedactionSelector, (data) => {
  userInfo.setUserInfo(data);
});
popupRedactionForm.setEventListeners();

//Попап редактирования карточек
const popupAddForm = new PopupWithForm(popupAddSelector, (data) => {
  section.addItemNew(section._renderer(popupAddForm._getInputValues()));
  popupAddForm.close();
  // elementsContainer.prepend(createCard(newCard));
});
popupAddForm.setEventListeners();

section.createCardFromArray();

// const test = new Popup(popupRedactionSelector);
// test.setEventListeners();

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

// //Функция добавления новых карточек
// function handleSubmitAddCardForm(event) {
//   // event.preventDefault();
//   // const placename = formInputKyePlacename.value;
//   // const placelink = formInputKyePlacelink.value;
//   // const newCard = { name: placename, link: placelink };
//   // elementsContainer.prepend(createCard(newCard));

//   // closePopup(popupAdd);
//   //Очистка импутов после сабмита
//   formAdd.reset();
// }

function handleCardClick(card) {
  popupElementImg.src = card.link;
  popupElementImg.alt = card.name;
  popupElementText.textContent = card.name;
  // openPopup(popupElementImg);
}

// function handleCardClick(name, link) {
//   устанавливаем ссылку
//   устанавливаем подпись картинке
//   открываем попап универсальной функцией, которая навешивает обработчик Escape внутри себя
// }

// //Общая функция открытия попапов  //ПЕРЕНЕСИ
// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   //Реализация закрытия попапов через esc
//   document.addEventListener("keydown", closePopupByEsc);  //ПЕРЕНЕСИ
// }  //ПЕРЕНЕСИ

// //Общая функция закрытия попапов  //ПЕРЕНЕСИ
// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   //Реализация закрытия попапов через esc
//   document.removeEventListener("keydown", closePopupByEsc);  //ПЕРЕНЕСИ
// }

//Функция переноса текста из профиля в попап
function openPopupRedaction() {
  // test.open(); //ТЕСТОВОЕ
  // formInputKyeUsername.value = profileUsername.textContent; //реализуем перенос текста из профиля в попап
  // formInputKyeStatus.value = profileStatus.textContent;
  formPopupRedactionValidator.resetFormErrors();
  popupRedactionForm.setInputValues(userInfo.getUserInfo());
  popupRedactionForm.open();
}

// Функция отправки изменений из попапа в профиль
// function handleSubmitProfileForm(event) {
//   event.preventDefault();

//   // profileUsername.textContent = formInputKyeUsername.value;
//   // profileStatus.textContent = formInputKyeStatus.value;
//   closePopup(popupRedaction);
// }

// //Функция закрытия попапа redaction  //ПЕРЕНЕСЛИ
// function closePopupRedaction() {
//   closePopup(popupRedaction);  //ПЕРЕНЕСЛИ
// }

//Функция удаления попапа с картинкой
function closePopupOpenSize() {
  // closePopup(popupOpenSize);
  openPopupOpenSize.close;
}

// //Функция закрытия попапов по клику вне контейнера  //ПЕРЕНЕСИ
// function handleCloseByOverlay(event) {
//   if (event.target === event.currentTarget) {
//     closePopup(event.currentTarget);  //ПЕРЕНЕСИ
//   }
// }

// //Функция закрытия попапов по нажатию на esc  //ПЕРЕНЕСИ
// function closePopupByEsc(event) {  //ПЕРЕНЕСИ
//   if (event.key === "Escape") {  //ПЕРЕНЕСИ
//     const poppupClose = document.querySelector(".popup_opened");  //ПЕРЕНЕСИ
//     closePopup(poppupClose);  //ПЕРЕНЕСИ
//   }
// }

//Реализация добавления обработчиков

//Реализация проходки по всему массиву данных и их выводу  //ПЕРЕНЕСЛИ
// initialCards.forEach((card) => {
//   elementsContainer.append(createCard(card));  //ПЕРЕНЕСЛИ
// });

// // Реализация открытия и закрытия попапа редактирования профиля
profileButtonEdit.addEventListener("click", openPopupRedaction);
// popupButtonCloseRedaction.addEventListener("click", closePopupRedaction);  //ПЕРЕНЕСЛИ

// // Реализация отправки формы редактирования профиля
// formRedaction.addEventListener("submit", handleSubmitProfileForm);

//Реализация открытия и закрытия попапа редактирования карточек
profileButtonPluse.addEventListener("click", function () {
  formPopupAddValidator.resetFormErrors();
  formPopupAddValidator.toggleButtonState();
  popupAddForm.open();
});

popupAddButtonClose.addEventListener("click", function () {
  popupAddForm.close();
  //Очистка импутов после закрытие попапа
  popupAddForm.reset();
});

//Реализация закрытия попапа с картинкой
popupOpenSizeButtonClose.addEventListener("click", closePopupOpenSize);

// //Реализация закрытия попапов при клике на overlay  //ПЕРЕНЕСЛИ
// const popups = Array.from(document.querySelectorAll(".popup"));
// popups.forEach((popup) => {
//   popup.addEventListener("click", handleCloseByOverlay);  //ПЕРЕНЕСЛИ
// });

// // Реализация отправки изменений из попапа добавления карточек в профиль
// formAdd.addEventListener("submit", handleSubmitAddCardForm);

//Экспорты
// export { openPopup };

export { handleCardClick, userInfoSelectors };
