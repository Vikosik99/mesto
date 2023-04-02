                    // Попап редактирование ника и статуса
// Задаем переменные

const popupButtonCloseRedaction = document.querySelector('.popup__button-close_redaction');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupRedaction = document.querySelector('.popup_redaction');
const formInputKyeUsername = document.querySelector('.form__input_kye_username');
const formInputKyeStatus = document.querySelector('.form__input_kye_status')
const profileUsername = document.querySelector('.profile__username')
const profileStatus = document.querySelector('.profile__status');
const formRedaction = document.querySelector('.form_redaction');

// Обьявляем функции

//Общая функция открытия попапов

function openPopup(popup) {
  popup.classList.add('popup_opened');
} 

//Общая функция закрытия попапов

function closePopup(popup) {
  popup.classList.toggle('popup_opened');
} 

//Функция переноса текста из профиля в попап
function popupClick() {
    openPopup(popupRedaction);
    formInputKyeUsername.value = profileUsername.textContent;  //реализуем перенос текста из профиля в попап
    formInputKyeStatus.value = profileStatus.textContent;
}

// Реализуем отправку изменений из попапа в профиль

function saveClick(event) {
    event.preventDefault();

    profileUsername.textContent = formInputKyeUsername.value;
    profileStatus.textContent = formInputKyeStatus.value;
    closePopup(popupRedaction);
}

// Реализуем открытие и закрытие попапа ред

profileButtonEdit.addEventListener('click', popupClick); 
popupButtonCloseRedaction.addEventListener('click', saveClick)

// Отправка формы

formRedaction.addEventListener('submit', saveClick);



// Добавление карточек изначально
//Массив
const initialCards = [
    {
      name: 'Архыз',
      link: './images/image-card-archiz.jpeg',
    },
    {
      name: 'Тиберда',
      link: './images/image-card-tiberda.jpeg',
    },
    {
      name: 'Домбай',
      link: './images/image-card-dombay-l.jpeg',
    },
    {
      name: 'Краснодар',
      link: './images/image-card-krasnodar.jpeg',
    },
    {
      name: 'Домбай зимой',
      link: './images/image-card-dombay-z.jpeg',
    },
    {
      name: 'Ялта',
      link: './images/image-card-yalta.jpeg',
    }
  ];

//Реализуем передачу данных из массива 

const elementsContainer = document.querySelector('.elements')

//Открытие попапа картинок 

const popupOpenSize = document.querySelector('.popup_open-size');
const popupOpenSizeContainer = popupOpenSize.querySelector('.popup__container_open-size');
const popupElementImg = popupOpenSize.querySelector('.popup__element-img');
const popupElementText = popupOpenSize.querySelector('.popup__element-text');
     
//Создаем функцию добавления карточек из массива

function createCard(card) {
    const cardTemplete = document.querySelector('#cardTemplete').content.cloneNode(true)
   
    const elementImg = cardTemplete.querySelector('.element__img')
    elementImg.setAttribute('src', card.link)
    elementImg.setAttribute('alt', card.name)
    
    const elementText = cardTemplete.querySelector('.element__text')
    elementText.textContent = card.name

    //Реализуем удаление карточки 
    
    const deleteElementButton = cardTemplete.querySelector('.element__delete')
    deleteElementButton.addEventListener('click', deleteCardCick) //Реализуем удаление карточки по клику
   
    //Реализуем лайк карточки
    
    const addLike = cardTemplete.querySelector('.element__like');
    addLike.addEventListener('click', (event) => {
      event.target.classList.toggle('element__like_active');
    })

   // Реализуем попап открытия картинки

    elementImg.addEventListener('click', () => {
    popupElementImg.src = card.link;
    popupElementText.textContent = card.name;
    openPopup(popupOpenSize)
    const popupOpenSizeButtonClose = popupOpenSize.querySelector('.popup__button-close_open-size')
    popupOpenSizeButtonClose.addEventListener('click', popupOpenSizeClose)
  });

    return cardTemplete;
}

//Реализация проходки по всему массиву данных и их выводу

initialCards.forEach(card => {
    const newCard = createCard(card)
    elementsContainer.append(newCard)
})

//Создаем функцию удаления попапа с картинкой

function popupOpenSizeClose() {
  closePopup(popupOpenSize) 
}

//Создаем функцию удаления карточек

function deleteCardCick(event){
    const buttonDelete = event.target
    const element = buttonDelete.closest('.element')
    element.remove()
}

//Попап для добавления карточек

//Объявление переменных

const popupAdd = document.querySelector('.popup_add');
const profileButtonPluse = document.querySelector('.profile__button-pluse');
const popupAddButtonClose = document.querySelector('.popup__button-close_add');

//Вызов функций открытия и закрытия попапа ред карточек

profileButtonPluse.addEventListener('click', function () {
  openPopup(popupAdd)
}); 
popupAddButtonClose.addEventListener('click', function () {
  closePopup(popupAdd)
}); 

// Реализуем отправку изменений из попапа в профиль

const formAdd = document.querySelector('.form_add')
formAdd.addEventListener('submit', createClick)

function createClick(event){
    event.preventDefault();
    const formInputKyePlacename = formAdd.querySelector('.form__input_kye_placename').value
    const formInputKyePlacelink = formAdd.querySelector('.form__input_kye_placelink').value
    const newCard = { name: formInputKyePlacename, 
    link: formInputKyePlacelink}
    const card = createCard(newCard)
    elementsContainer.prepend(card)
   closePopup(popupAdd)
}