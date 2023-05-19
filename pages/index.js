//Импорты
import {
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
  cardTemplate,
  validationConfig,
  formPopupRedaction,
  formPopupAdd,
  popupElementImg,
  popupElementText,
} from "../scripts/utils/constant.js";
import Card from "../scripts/components/card.js";
import FormValidator from "../scripts/components/formValidator.js";
import PopupWithImage from "../scripts/components/popupWithImage.js";
import Section from "../scripts/components/sectoin.js";
import UserInfo from "../scripts/components/userInfo.js";
import PopupWithForm from "../scripts/components/popupWithForm.js";

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

//Попап добавления карточек
const popupAddForm = new PopupWithForm(popupAddSelector, (data) => {
  section.addItemNew(data);
  popupAddForm.close();
});
popupAddForm.setEventListeners();

section.createCardFromArray();

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

function handleCardClick(card) {
  popupElementImg.src = card.link;
  popupElementImg.alt = card.name;
  popupElementText.textContent = card.name;
}

//Функция переноса текста из профиля в попап
function openPopupRedaction() {
  formPopupRedactionValidator.resetFormErrors();
  popupRedactionForm.setInputValues(userInfo.getUserInfo());
  popupRedactionForm.open();
}

//Функция удаления попапа с картинкой
function closePopupOpenSize() {
  // closePopup(popupOpenSize);
  openPopupOpenSize.close;
}

//Реализация добавления обработчиков

// // Реализация открытия и закрытия попапа редактирования профиля
profileButtonEdit.addEventListener("click", openPopupRedaction);

//Реализация открытия и закрытия попапа редактирования карточек
profileButtonPluse.addEventListener("click", function () {
  formPopupAddValidator.resetFormErrors();
  formPopupAddValidator.toggleButtonState();
  popupAddForm.open();
});

popupAddButtonClose.addEventListener("click", function () {
  popupAddForm.close();
});

//Реализация закрытия попапа с картинкой
popupOpenSizeButtonClose.addEventListener("click", closePopupOpenSize);

//Экспорты

export { handleCardClick, userInfoSelectors };
