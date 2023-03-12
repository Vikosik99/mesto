let closeButton = document.querySelector('.close-button');
let editButton = document.querySelector('.edit-button');
let popup = document.querySelector('.popup');
let formUsername = document.querySelector('.form__username');
let formStatus = document.querySelector('.form__status')
let profileUsername = document.querySelector('.profile__username')
let profileStatus = document.querySelector('.profile__status');



editButton.addEventListener('click', function(){
    popup.classList.add('popup_opened');
})


closeButton.addEventListener('click', function(){
    popup.classList.remove('popup_opened');
})

function popupClick() {
    formUsername.value = profileUsername.textContent;
    formStatus.value = profileStatus.textContent;
}

editButton.addEventListener('click', popupClick);


document.querySelector('.save-button').onclick = saveClick;

function saveClick() {
    let formUsername = document.querySelector('.form__username').value;
    document.querySelector('.profile__username').innerHTML = formUsername;

    let formStatus = document.querySelector('.form__status').value;
   document.querySelector('.profile__status').innerHTML = formStatus;

   popup.classList.remove('popup_opened');
}