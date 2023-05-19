export default class UserInfo {
  constructor(userInfoSelectors) {
    this._userInfoSelectors = userInfoSelectors;
    this._profileUsername = document.querySelector(
      this._userInfoSelectors.profileUsername
    );
    this._profileStatus = document.querySelector(
      this._userInfoSelectors.profileStatus
    );
  }

  getUserInfo() {
    return {
      username: this._profileUsername.textContent,
      status: this._profileStatus.textContent,
    };
  }

  setUserInfo(infoUser) {
    this._profileUsername.textContent = infoUser.username;
    this._profileStatus.textContent = infoUser.status;
  }
}

// function openPopupRedaction() {
//   // test.open(); //ТЕСТОВОЕ
//   // openPopup(popupRedaction);
//   formInputKyeUsername.value = profileUsername.textContent; //реализуем перенос текста из профиля в попап
//   formInputKyeStatus.value = profileStatus.textContent;
//   formPopupRedactionValidator.resetFormErrors();
// }

// // Функция отправки изменений из попапа в профиль
// function handleSubmitProfileForm(event) {
//     event.preventDefault();

//     profileUsername.textContent = formInputKyeUsername.value;
//     profileStatus.textContent = formInputKyeStatus.value;
//     closePopup(popupRedaction);
//   }
