                    // Попап редактирование ника и статуса
// Задаем переменные

let popupButtonCloseRedaction = document.querySelector('.popup__button-close_redaction');
let profileButtonEdit = document.querySelector('.profile__button-edit');
let popupRedaction = document.querySelector('.popup_redaction');
let formInputKyeUsername = document.querySelector('.form__input_kye_username');
let formInputKyeStatus = document.querySelector('.form__input_kye_status')
let profileUsername = document.querySelector('.profile__username')
let profileStatus = document.querySelector('.profile__status');
let formRedaction = document.querySelector('.form_redaction');

// Обьявляем функции

function popupClick() {
    popupRedaction.classList.add('popup_opened');
    formInputKyeUsername.value = profileUsername.textContent;  //реализуем перенос текста из профиля в попап
    formInputKyeStatus.value = profileStatus.textContent;
}

function popupClose() {
    popupRedaction.classList.toggle('popup_opened'); 
}

// Реализуем отправку изменений из попапа в профиль

function saveClick(event) {
    event.preventDefault();

    profileUsername.textContent = formInputKyeUsername.value;
    profileStatus.textContent = formInputKyeStatus.value;

    popupClose();
}

// Реализуем открытие и закрытие попапа

profileButtonEdit.addEventListener('click', popupClick); 
popupButtonCloseRedaction.addEventListener('click', popupClose)

// Отправка формы

formRedaction.addEventListener('submit', saveClick);



// Добавление карточек изначально
//Массив
const initialCards = [
    {
      name: 'Архыз',
      link: './images/image-card-archiz.jpeg',
      alt: 'Фотография гор Архыза' 
    },
    {
      name: 'Тиберда',
      link: './images/image-card-tiberda.jpeg',
      alt: 'Фотография девушки на фоне реки и гор в Тиберде' 
    },
    {
      name: 'Домбай',
      link: './images/image-card-dombay-l.jpeg',
      alt: 'Фотография девушки смотрящей на горы в Домбае' 
    },
    {
      name: 'Краснодар',
      link: './images/image-card-krasnodar.jpeg',
      alt: 'Фотография девушки на фоне парка Галицкого в Краснодаре' 
    },
    {
      name: 'Домбай зимой',
      link: './images/image-card-dombay-z.jpeg',
      alt: 'Фотография девушки на сноуборде на фоне снежных гор в Домбае' 
    },
    {
      name: 'Ялта',
      link: './images/image-card-yalta.jpeg',
      alt: 'Фотография девушки на фоне гор и моря в Ялте' 
    }
  ];

//Реализуем передачу данных из массива 

const elements = document.querySelector('.elements')

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
    elementImg.setAttribute('alt', card.alt)
    
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
    popupOpenSize.classList.add('popup_open-size_opened');
    const popupOpenSizeButtonClose = popupOpenSize.querySelector('.popup__button-close_open-size')
    popupOpenSizeButtonClose.addEventListener('click', popupOpenSizeClose)
  });

    return cardTemplete;
}

//Реализация проходки по всему массиву данных и их выводу

initialCards.forEach(card => {
    const newCard = createCard(card)
    elements.append(newCard)
})

//Создаем функцию удаления попапа с картинкой

function popupOpenSizeClose() {
  popupOpenSize.classList.toggle('popup_open-size_opened'); 
}

//Создаем функцию удаления карточек

function deleteCardCick(event){
    const buttonDelete = event.target
    const element = buttonDelete.closest('.element')
    element.remove()
}

//Попап для добавления карточек

//Объявление переменных

let popupAdd = document.querySelector('.popup_add');
let profileButtonPluse = document.querySelector('.profile__button-pluse');
let popupAddButtonClose = document.querySelector('.popup__button-close_add');

//Объявление функций

function popupAddClick() {
    popupAdd.classList.add('popup_add_opened');
}

function popupAddClose() {
    popupAdd.classList.toggle('popup_add_opened'); 
}

//Вызов функций открытия и закрытия попапа

profileButtonPluse.addEventListener('click', popupAddClick); 
popupAddButtonClose.addEventListener('click', popupAddClose);

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
    elements.prepend(card)
    popupAddClose()
}