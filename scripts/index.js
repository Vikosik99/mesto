                    // Попап редактирование ника и статуса
// Задаем переменные

let popupButtonClose = document.querySelector('.popup__button-close');
let profileButtonEdit = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let formInputKyeUsername = document.querySelector('.form__input_kye_username');
let formInputKyeStatus = document.querySelector('.form__input_kye_status')
let profileUsername = document.querySelector('.profile__username')
let profileStatus = document.querySelector('.profile__status');
let form = document.querySelector('.form');

// Обьявляем функции

function popupClick() {
    popup.classList.add('popup_opened');
    formInputKyeUsername.value = profileUsername.textContent;  //реализуем перенос текста из профиля в попап
    formInputKyeStatus.value = profileStatus.textContent;
}

function popupClose() {
    popup.classList.toggle('popup_opened'); 
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
popupButtonClose.addEventListener('click', popupClose)

// Отправка формы

form.addEventListener('submit', saveClick);



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

    elements.append(cardTemplete)  //Добавление карточек 
  }
  initialCards.forEach(createCard) //Реализация проходки по всему массиву данных и их выводу


                 //Создаем функцию удаления карточек
function deleteCardCick(event){
    const buttonDelete = event.target
    const element = buttonDelete.closest('.element')
    element.remove()
}
                //Попап для добавления карточек

//Объявление переменных
let popupAdd = document.querySelector('.popup-add');
let profileButtonPluse = document.querySelector('.profile__button-pluse');
let popupAddButtonClose = document.querySelector('.popup-add__button-close');

//Объевление функций

function popupAddClick() {
    popupAdd.classList.add('popup-add_opened');
}

function popupAddClose() {
    popupAdd.classList.toggle('popup-add_opened'); 
}

            //Вызов функций открытия и закрытия попапа

profileButtonPluse.addEventListener('click', popupAddClick); 
popupAddButtonClose.addEventListener('click', popupAddClose);

                    // Реализуем отправку изменений из попапа в профиль

    const formAdd = document.querySelector('.form-add')
    formAdd.addEventListener('submit', createClick)

    function createClick(event){
        event.preventDefault();
        const formInputKyePlacename = formAdd.querySelector('.form__input_kye_placename').value
        const formInputKyePlacelink = formAdd.querySelector('.form__input_kye_placelink').value
        const cards = { name: formInputKyePlacename, 
        link: formInputKyePlacelink}
        createCard(cards)  //Добавление карточек 
        popupAddClose()
    }
                    //Лайк карточки

const element = document.querySelector('.element');
const elementLike = document.querySelector('.element__like');
const elementLikeActive = document.querySelector('.element__like_active');


const addLike = element.querySelector('.element__like');
addLike.addEventListener('click', likeActiveClick)

function likeActiveClick(event) {
    event.target.classList.toggle('element__like_active');
}




    //Нужно доделать для всех карточек через ForEach


                    //Открытие попапа картинок 
