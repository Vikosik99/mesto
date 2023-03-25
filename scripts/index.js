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

const initialCards = [
    {
      name: 'Архыз',
      link: './images/image-card-archiz.jpeg'
    },
    {
      name: 'Тиберда',
      link: './images/image-card-tiberda.jpeg'
    },
    {
      name: 'Домбай',
      link: './images/image-card-dombay-l.jpeg'
    },
    {
      name: 'Краснодар',
      link: './images/image-card-krasnodar.jpeg'
    },
    {
      name: 'Домбай зимой',
      link: './images/image-card-dombay-z.jpeg'
    },
    {
      name: 'Ялта',
      link: './images/image-card-yalta.jpeg'
    }
  ];

  const elements = document.querySelector('.elements')

initialCards.forEach(function(card){
    const cardHTML = `<article class="element">
    <button type="button" class="element__delete"></button>
    <img class="element__img"
      src="${card.link}"
      alt="Архыз">
    <div class="element__mesto">
      <h2 class="element__text">${card.name}</h2>
      <button type="button" class="element__like element__like_active"></button>
    </div>
  </article>`

    elements.insertAdjacentHTML("beforeend", cardHTML)
})


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

//Лайк карточки

const element = document.querySelector('.element');
const elementLike = document.querySelector('.element__like');
const elementLikeActive = document.querySelector('.element__like_active');


element.querySelector('.element__like').addEventListener('click', function (event) {
    event.target.classList.toggle('element__like_active');
      });


    //Нужно доделать для всех карточек через ForEach

//Удаление карточки

//Открытие попапа картинок 
