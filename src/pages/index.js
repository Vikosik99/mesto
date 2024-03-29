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
  profileAvatarButton,
  formChangeAvatar,
  deleteElementButton,
  formSure,
  deleteSure,
  popupRedactionSelector,
  popupOpenSizeSelector,
  popupAddSelector,
  popupChangeAvatarSelector,
  popupSureSelector,
  elementsContainerSelector,
  userInfoSelectors,
} from "../../src/scripts/utils/constant.js";
import Card from "../../src/scripts/components/card.js";
import FormValidator from "../../src/scripts/components/formValidator.js";
import PopupWithImage from "../../src/scripts/components/popupWithImage.js";
import Section from "../../src/scripts/components/sectoin.js";
import UserInfo from "../../src/scripts/components/userInfo.js";
import PopupWithForm from "../../src/scripts/components/popupWithForm.js";
import PopupWithFormDelete from "../../src/scripts/components/popupWithFormDelete.js";
import Api from "../../src/scripts/utils/api.js";
import "../pages/index.css"; // добавьте импорт главного файла стилей

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-66",
  headers: {
    authorization: "b6c4512c-817a-42b9-b0f0-214f2963b61f",
    "Content-Type": "application/json",
  },
});

function createCardServer(element) {
  const card = new Card(
    element,
    cardTemplate,
    popupOpenSizeForm.open,
    (likeElement, cardId) => {
      if (likeElement.classList.contains("element__like_active")) {
        api
          .addLike(cardId)
          .then((res) => {
            card.addLikePublic(res.likes);
          })
          .catch((err) => console.log(`При добавлении лайка: ${err}`));
      } else {
        api
          .deleteLike(cardId)
          .then((res) => {
            card.addLikePublic(res.likes);
          })
          .catch((err) => console.log(`При удалении лайка: ${err}`));
      }
    },
    (id) => {
      popupSureForm.open();
      popupSureForm.setSubmitAction(() => {
        api
          .deleteCard(id)
          .then(() => {
            card.deleteCard();
            popupSureForm.close();
          })
          .catch((err) => console.log(`При удалении карточки: ${err}`));
      });
    }
  );
  const cardElement = card.createCard();
  return cardElement;
}

const section = new Section((item) => {
  section.addItem(createCardServer(item));
}, elementsContainerSelector);

// Попап открытия картинки
const popupOpenSizeForm = new PopupWithImage(popupOpenSizeSelector);
popupOpenSizeForm.setEventListeners();

const userInfo = new UserInfo(userInfoSelectors);

//Попап редактирования профиля
const popupRedactionForm = new PopupWithForm(popupRedactionSelector, (data) => {
  api
    .setUserInfo(data) //Получаем свои набранные данные
    .then((res) => {
      //Передаем эти данные на страницу
      userInfo.setUserInfo({
        status: res.about,
        avatar: res.avatar,
        username: res.name,
      });
      popupRedactionForm.close();
    }) // вот сюда получим уже обработанные данные если ошибки нет
    .catch((err) => console.log(`При передачи данных на страницу: ${err}`))
    .finally(() => popupRedactionForm.setDefault());
});
popupRedactionForm.setEventListeners();
//Попап добавления карточек
const popupAddForm = new PopupWithForm(popupAddSelector, (data) => {
  api
    .createNewCard(data)
    .then((dataCardServer) => {
      dataCardServer.userid = userInfo.getid();
      section.addItemNew(createCardServer(dataCardServer));
      popupAddForm.close();
    })
    .catch((err) => console.log(`При добавлении карточек: ${err}`))
    .finally(() => popupAddForm.setDefault());
});
popupAddForm.setEventListeners();

//Попап обновления аватара
const popupChangeAvatarForm = new PopupWithForm(
  popupChangeAvatarSelector,
  (data) => {
    api
      .setUserAvatar(data)
      .then((res) => {
        userInfo.setUserInfo({
          status: res.about,
          avatar: res.avatar,
          username: res.name,
        });
        popupChangeAvatarForm.close();
      }) // вот сюда получим уже обработанные данные если ошибки нет
      .catch((err) => console.log(`При обновлении аватара: ${err}`))

      .finally(() => popupChangeAvatarForm.setDefault());
  }
);
popupChangeAvatarForm.setEventListeners();

// Экземпляр класса FormValidator для формы изменения профиля
const formPopupRedactionValidator = new FormValidator(
  validationConfig,
  formPopupRedaction
);
formPopupRedactionValidator.enableValidation(); //Запуск валидации

// Экземпляр класса FormValidator для формы редактирования карточек
const formPopupAddValidator = new FormValidator(validationConfig, formPopupAdd);
formPopupAddValidator.enableValidation(); //Запуск валидации

// Экземпляр класса FormValidator для формы изменения аватара
const formChangeAvatarValidator = new FormValidator(
  validationConfig,
  formChangeAvatar
);
formChangeAvatarValidator.enableValidation(); //Запуск валидации

// Обьявление функций

function handleCardClick(card) {
  const handleCard = new PopupWithImage(card);
  handleCard.open();
}

//Функция переноса текста из профиля в попап
function openPopupRedaction() {
  formPopupRedactionValidator.resetFormErrors();
  popupRedactionForm.setInputValues(userInfo.getUserInfo());
  popupRedactionForm.open();
}

//Реализация добавления обработчиков

profileButtonEdit.addEventListener("click", openPopupRedaction);

const popupSureForm = new PopupWithFormDelete(popupSureSelector);
popupSureForm.setEventListeners();

// Реализация открытия и закрытия попапа аватара
profileAvatarButton.addEventListener("click", function () {
  //Аватар
  formChangeAvatarValidator.resetFormErrors();
  formChangeAvatarValidator.toggleButtonState();
  popupChangeAvatarForm.open();
});

//Реализация открытия и закрытия попапа редактирования карточек
profileButtonPluse.addEventListener("click", function () {
  formPopupAddValidator.resetFormErrors();
  formPopupAddValidator.toggleButtonState();
  popupAddForm.open();
});

Promise.all([api.getInitialCards(), api.getCards()])
  .then(([dataUserServer, dataCardServer]) => {
    dataCardServer.forEach((element) => (element.userid = dataUserServer._id)); // Реализация определения id юзера

    userInfo.setUserInfo({
      //Реализация переноса данных с сервера в имя, статус и аватар
      status: dataUserServer.about,
      avatar: dataUserServer.avatar,
      username: dataUserServer.name,
    });
    userInfo.setid(dataUserServer._id);
    section.createCardFromArray(dataCardServer);
  })
  .catch((err) => console.log(`При переносе данных с сервера: ${err}`));

//Экспорты

export { handleCardClick, userInfoSelectors };
