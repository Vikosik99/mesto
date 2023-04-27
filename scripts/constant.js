//Массив
const initialCards = [
  {
    name: "Архыз",
    link: "./images/image-card-archiz.jpeg",
  },
  {
    name: "Тиберда",
    link: "./images/image-card-tiberda.jpeg",
  },
  {
    name: "Домбай",
    link: "./images/image-card-dombay-l.jpeg",
  },
  {
    name: "Краснодар",
    link: "./images/image-card-krasnodar.jpeg",
  },
  {
    name: "Домбай зимой",
    link: "./images/image-card-dombay-z.jpeg",
  },
  {
    name: "Ялта",
    link: "./images/image-card-yalta.jpeg",
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
};
