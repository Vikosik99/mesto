//Массив
const initialCards = [
  {
    placename: "Архыз",
    placelink: "./images/image-card-archiz.jpeg",
  },
  {
    placename: "Тиберда",
    placelink: "./images/image-card-tiberda.jpeg",
  },
  {
    placename: "Домбай",
    placelink: "./images/image-card-dombay-l.jpeg",
  },
  {
    placename: "Краснодар",
    placelink: "./images/image-card-krasnodar.jpeg",
  },
  {
    placename: "Домбай зимой",
    placelink: "./images/image-card-dombay-z.jpeg",
  },
  {
    placename: "Ялта",
    placelink: "./images/image-card-yalta.jpeg",
  },
];

// Объявление переменных

const popupButtonCloseRedaction = document.querySelector(
  ".popup__button-close_redaction"
);
const popupAddButtonClose = document.querySelector(".popup__button-close_add");
const popupOpenSizeButtonClose = document.querySelector(
  ".popup__button-close_open-size"
);

const popupRedaction = document.querySelector(".popup_redaction"); // Перенесла в индекс тестово
const popupAdd = document.querySelector(".popup_add"); // Перенесла в индекс
const popupOpenSize = document.querySelector(".popup_open-size"); // Перенесла в индекс

const formInputKyeUsername = document.querySelector(
  ".form__input_kye_username"
);
const formInputKyeStatus = document.querySelector(".form__input_kye_status");

const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileUsername = document.querySelector(".profile__username"); // Перенесла в индекс
const profileStatus = document.querySelector(".profile__status"); // Перенесла в индекс
const profileButtonPluse = document.querySelector(".profile__button-pluse");

const formRedaction = document.querySelector(".form_redaction");
const formAdd = document.querySelector(".form_add");
const formInputKyePlacename = formAdd.querySelector(
  ".form__input_kye_placename"
);
const formInputKyePlacelink = formAdd.querySelector(
  ".form__input_kye_placelink"
);

const elementsContainer = document.querySelector(".elements"); // ПЕРЕНЕСЛИ

const popupOpenSizeContainer = popupOpenSize.querySelector(
  ".popup__container_open-size"
);
const popupElementImg = popupOpenSize.querySelector(".popup__element-img"); // ПЕРЕНЕСЛИ
const popupElementText = popupOpenSize.querySelector(".popup__element-text"); // ПЕРЕНЕСЛИ

const cardTemplate = document.querySelector("#cardTemplete");

const formInputAdd = formAdd.querySelectorAll(".form__input"); // ПЕРЕНЕСЛИ
const formButtonSaveAdd = formAdd.querySelector(".form__button-save");

const validationConfig = {
  inputSelector: ".form__input", // input
  submitButtonSelector: ".form__button-save", // button
  inactiveButtonClass: "form__button-save_valid", // button valid
  inputErrorClass: "form__input_error", // input ошибка
  errorClass: "form__input-error_visible", // span
  errorTemplateSelector: ".form__input-error_type_", // span конкретный
};

const formPopupRedaction = document.forms.formPopup;
const formPopupAdd = document.forms.formAddPopup;

// Экспорт всех переменных
export {
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
  popupOpenSizeContainer,
  popupElementImg,
  popupElementText,
  cardTemplate,
  formInputAdd,
  formButtonSaveAdd,
  validationConfig,
  formPopupRedaction,
  formPopupAdd,
};
