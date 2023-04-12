                            // Объявление переменных

const popupButtonCloseRedaction = document.querySelector('.popup__button-close_redaction');
const popupAddButtonClose = document.querySelector('.popup__button-close_add');
const popupOpenSizeButtonClose = document.querySelector('.popup__button-close_open-size')

const popupRedaction = document.querySelector('.popup_redaction');
const popupAdd = document.querySelector('.popup_add');
const popupOpenSize = document.querySelector('.popup_open-size');


const formInputKyeUsername = document.querySelector('.form__input_kye_username');
const formInputKyeStatus = document.querySelector('.form__input_kye_status')

const profileButtonEdit = document.querySelector('.profile__button-edit');
const profileUsername = document.querySelector('.profile__username')
const profileStatus = document.querySelector('.profile__status');
const profileButtonPluse = document.querySelector('.profile__button-pluse');

const formRedaction = document.querySelector('.form_redaction');
const formAdd = document.querySelector('.form_add')
const formInputKyePlacename = formAdd.querySelector('.form__input_kye_placename')
const formInputKyePlacelink = formAdd.querySelector('.form__input_kye_placelink')

const elementsContainer = document.querySelector('.elements')

const popupOpenSizeContainer = popupOpenSize.querySelector('.popup__container_open-size');
const popupElementImg = popupOpenSize.querySelector('.popup__element-img');
const popupElementText = popupOpenSize.querySelector('.popup__element-text');

const cardTemplate = document.querySelector('#cardTemplete');

                              // Обьявление функций

//Общая функция открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

//Общая функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

//Функция переноса текста из профиля в попап
function openPopupRedaction() {
    openPopup(popupRedaction);
    formInputKyeUsername.value = profileUsername.textContent;  //реализуем перенос текста из профиля в попап
    formInputKyeStatus.value = profileStatus.textContent;
    resetFormErrors(formRedaction, validationConfig); //Очистка импутов с ошибкой
};

// Функция отправки изменений из попапа в профиль
function handleSubmitProfileForm(event) {
    event.preventDefault();

    profileUsername.textContent = formInputKyeUsername.value;
    profileStatus.textContent = formInputKyeStatus.value;
    closePopup(popupRedaction);
};

//Функция закрытия попапа redaction
function closePopupRedaction() {
  closePopup(popupRedaction);
}
     
//Функция добавления карточек из массива
function createCard(card) {
    const newcard = cardTemplate.content.cloneNode(true)
   
    const elementImg = newcard.querySelector('.element__img')
    elementImg.setAttribute('src', card.link)
    elementImg.setAttribute('alt', card.name)
    
    const elementText = newcard.querySelector('.element__text')
    elementText.textContent = card.name

    //Реализуем удаление карточки 
    const deleteElementButton = newcard.querySelector('.element__delete')
    deleteElementButton.addEventListener('click', deleteCardCick) //Реализуем удаление карточки по клику
   
    //Реализуем лайк карточки
    const likeElement = newcard.querySelector('.element__like');
    likeElement.addEventListener('click', (event) => {
      event.target.classList.toggle('element__like_active');
    })

   // Реализуем попап открытия картинки
    elementImg.addEventListener('click', () => {
    popupElementImg.src = card.link;
    popupElementImg.alt = card.name;
    popupElementText.textContent = card.name;
    openPopup(popupOpenSize)
    popupOpenSizeButtonClose.addEventListener('click', closePopupOpenSize)
  });

    return newcard;
};

//Функция удаления попапа с картинкой
function closePopupOpenSize() {
  closePopup(popupOpenSize) 
};

//Функция удаления карточек
function deleteCardCick(event){
    const buttonDelete = event.target
    const element = buttonDelete.closest('.element')
    element.remove()
};

//Функция добавления новых карточек
function handleSubmitAddCardForm(event){
    event.preventDefault();
    const placename = formInputKyePlacename.value
    const placelink = formInputKyePlacelink.value
    const newCard = { name: placename, 
    link: placelink}
    const card = createCard(newCard)
    elementsContainer.prepend(card)
    closePopup(popupAdd)
    //Очистка импутов после сабмита
    formAdd.reset()
};

//Функция закрытия попапов по клику вне контейнера
function handleCloseByOverlay(event) {
  if(event.target === event.currentTarget) {
    closePopup(event.currentTarget)
  }
};

//Функция закрытия попапов по нажатию на esc
function closePopupByEsc (evt) {
  if (evt.key === "Escape") {
    const poppupClose = document.querySelector('.popup_opened')
  closePopup(poppupClose)
  }
}; 
                     //Реализация добавления обработчиков

// Реализация открытия и закрытия попапа редактирования профиля
profileButtonEdit.addEventListener('click', openPopupRedaction); 
popupButtonCloseRedaction.addEventListener('click', closePopupRedaction);


// Реализация отправки формы редактирования профиля
formRedaction.addEventListener('submit', handleSubmitProfileForm);


//Реализация проходки по всему массиву данных и их выводу
initialCards.forEach(card => {
  const newCard = createCard(card)
  elementsContainer.append(newCard)
});

// Реализация отправки изменений из попапа добавления карточек в профиль
formAdd.addEventListener('submit', handleSubmitAddCardForm);

//Реализация открытия и закрытия попапа редактирования карточек
profileButtonPluse.addEventListener('click', function () {
  resetFormErrors(formAdd, validationConfig); //Очистка импутов с ошибкой
  openPopup(popupAdd)
}); 
popupAddButtonClose.addEventListener('click', function () {
  closePopup(popupAdd)
  //Очистка импутов после закрытие попапа
  formAdd.reset()
}); 

//Реализация закрытия попапов при клике на overlay
const popups = Array.from(document.querySelectorAll('.popup'));
popups.forEach((popup) => {
  popup.addEventListener('click', handleCloseByOverlay)
});

//Реализация закрытия попапов через esc
document.addEventListener('keydown', closePopupByEsc);
// document.removeEventListener('keydown', closePopupByEsc);
