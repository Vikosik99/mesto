//Массив
import archizImage from "../../images/image-card-archiz.jpeg";
import tiberdaImage from "../../images/image-card-tiberda.jpeg";
import dombayLImage from "../../images/image-card-dombay-l.jpeg";
import krasnodarImage from "../../images/image-card-krasnodar.jpeg";
import dombayZImage from "../../images/image-card-dombay-z.jpeg";
import yaltaImage from "../../images/image-card-yalta.jpeg";

const initialCards = [
  {
    placename: "Архыз",
    placelink: archizImage,
  },
  {
    placename: "Тиберда",
    placelink: tiberdaImage,
  },
  {
    placename: "Домбай",
    placelink: dombayLImage,
  },
  {
    placename: "Краснодар",
    placelink: krasnodarImage,
  },
  {
    placename: "Домбай зимой",
    placelink: dombayZImage,
  },
  {
    placename: "Ялта",
    placelink: yaltaImage,
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

const formInputKyeUsername = document.querySelector(
  ".form__input_kye_username"
);
const formInputKyeStatus = document.querySelector(".form__input_kye_status");

const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileButtonPluse = document.querySelector(".profile__button-pluse");
const profileAvatarButton = document.querySelector(".profile__avatar-button");
const deleteElementButton = document.querySelector(".element__delete");
const deleteSure = document.querySelector(".form__button-save_sure");

const formRedaction = document.querySelector(".form_redaction");
const formAdd = document.querySelector(".form_add");
const formInputKyePlacename = formAdd.querySelector(
  ".form__input_kye_placename"
);
const formInputKyePlacelink = formAdd.querySelector(
  ".form__input_kye_placelink"
);

const popupOpenSizeContainer = document.querySelector(
  ".popup__container_open-size"
);
const popupElementImg = document.querySelector(".popup__element-img"); // ПЕРЕНЕСЛИ
const popupElementText = document.querySelector(".popup__element-text"); // ПЕРЕНЕСЛИ

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
const formChangeAvatar = document.forms.formChangeAvatar;
const formSure = document.forms.formSure;

// Экспорт всех переменных
export {
  initialCards,
  popupButtonCloseRedaction,
  popupAddButtonClose,
  popupOpenSizeButtonClose,
  formInputKyeUsername,
  formInputKyeStatus,
  profileButtonEdit,
  profileButtonPluse,
  formRedaction,
  formAdd,
  formInputKyePlacename,
  formInputKyePlacelink,
  popupOpenSizeContainer,
  popupElementImg,
  popupElementText,
  cardTemplate,
  formInputAdd,
  formButtonSaveAdd,
  validationConfig,
  formPopupRedaction,
  formPopupAdd,
  profileAvatarButton,
  formChangeAvatar,
  deleteElementButton,
  formSure,
  deleteSure,
};
