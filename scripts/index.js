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
  popup.classList.toggle('popup_opened');
};

//Функция переноса текста из профиля в попап
function openPopupRedaction() {
    openPopup(popupRedaction);
    formInputKyeUsername.value = profileUsername.textContent;  //реализуем перенос текста из профиля в попап
    formInputKyeStatus.value = profileStatus.textContent;
    resetFormErrors(formRedaction, validationConfig); //Очистка импутов с ошибкой
};

// Функция отправки изменений из попапа в профиль
function saveClick(event) {
    event.preventDefault();

    profileUsername.textContent = formInputKyeUsername.value;
    profileStatus.textContent = formInputKyeStatus.value;
    closePopup(popupRedaction);
};
     
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
    const addLike = newcard.querySelector('.element__like');
    addLike.addEventListener('click', (event) => {
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
function createClick(event){
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

//Функции закрытия попапов по клику вне контейнера
//Redaction
function closePopupByClickOnOverlayRedaction (event) {
if (event.target === event.currentTarget){
  closePopup(popupRedaction);
}
};
//Add
function closePopupByClickOnOverlayAdd (event) {
if (event.target === event.currentTarget){
  closePopup(popupAdd);
}
};
//popupOpenSize
function closePopupByClickOnOverlayOpenSize (event) {
if (event.target === event.currentTarget){
  closePopup(popupOpenSize);
}
};

//Функция закрытие попапов по нажатию на esc
function closePopupByEsc (evt) {
  if (evt.key === "Escape") {
    const pop = document.querySelector('.popup_opened')
  closePopup(pop)
  }
}; 
                     //Реализация добавления обработчиков

// Реализация открытия и закрытия попапа редактирования профиля
profileButtonEdit.addEventListener('click', openPopupRedaction); 
popupButtonCloseRedaction.addEventListener('click', saveClick);


// Реализация отправки формы редактирования профиля
formRedaction.addEventListener('submit', saveClick);


//Реализация проходки по всему массиву данных и их выводу
initialCards.forEach(card => {
  const newCard = createCard(card)
  elementsContainer.append(newCard)
});

// Реализация отправки изменений из попапа добавления карточек в профиль
formAdd.addEventListener('submit', createClick);

//Реализация открытия и закрытия попапа редактирования карточек
profileButtonPluse.addEventListener('click', function () {
  resetFormErrors(formAdd, validationConfig); //Очистка импутов с ошибкой
  openPopup(popupAdd)
}); 
popupAddButtonClose.addEventListener('click', function () {
  closePopup(popupAdd)
}); 

//Реализация закрытия попапов при клике на overlay
popupRedaction.addEventListener('click', closePopupByClickOnOverlayRedaction);
popupAdd.addEventListener('click', closePopupByClickOnOverlayAdd);
popupOpenSize.addEventListener('click', closePopupByClickOnOverlayOpenSize);

//Реализация закрытия попапов через esc
document.addEventListener('keydown', closePopupByEsc);