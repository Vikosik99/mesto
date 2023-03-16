// Задаем переменные

let popupButtonClose = document.querySelector('.popup__button-close');
let profileButtonEdit = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let formInput = document.querySelector('.form__input');
let formInputKyeUsername = document.querySelector('.form__input_kye_username');
let formInputKyeStatus = document.querySelector('.form__input_kye_status')
let profileUsername = document.querySelector('.profile__username')
let profileStatus = document.querySelector('.profile__status');
let formButtonSave = document.querySelector('.form__button-save');

// Обьявляем функции

function popupClick() {
    popup.classList.add('popup_opened');
    formInputKyeUsername.value = profileUsername.textContent;  //реализуем перенос текста из профиля в попап
    formInputKyeStatus.value = profileStatus.textContent;
}

function popupClose() {
    popup.classList.toggle('popup_opened'); 
}

// Реализуем открытие и закрытие попапа

profileButtonEdit.addEventListener('click', popupClick); 
popupButtonClose.addEventListener('click', popupClose)

// Реализуем отправку изменений из попапа в профиль

function saveClick(event) {
    event.preventDefault();

    profileUsername.textContent = formInputKyeUsername.value;
    profileStatus.textContent = formInputKyeStatus.value;

    popup.classList.remove('popup_opened'); 
}
popup.addEventListener('submit', saveClick);