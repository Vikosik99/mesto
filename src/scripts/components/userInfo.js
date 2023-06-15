export default class UserInfo {
  constructor(userInfoSelectors) {
    this._userInfoSelectors = userInfoSelectors;
    this._profileUsername = document.querySelector(
      this._userInfoSelectors.profileUsername
    );
    this._profileStatus = document.querySelector(
      this._userInfoSelectors.profileStatus
    );
    this._profileAvatar = document.querySelector(
      this._userInfoSelectors.profileAvatar
    );
  }

  getUserInfo() {
    //Функция переноса текста из профиля в попап
    return {
      username: this._profileUsername.textContent,
      status: this._profileStatus.textContent,
    };
  }

  setUserInfo({ avatar, username, status, id }) {
    this._profileAvatar.src = avatar;
    //Функция отправки изменений из попапа в профиль
    this._profileUsername.textContent = username;
    this._profileStatus.textContent = status;
  }
}
