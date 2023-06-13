export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }

  _checkRes(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-66/users/me", {
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkRes);
  }

  // Cоздание карточек с сервера
  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkRes);
  }

  setUserInfo(data) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-66/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.username,
        about: data.status,
      }),
    }).then(this._checkRes);
  }

  setUserAvatar(data) {
    return fetch(
      "https://mesto.nomoreparties.co/v1/cohort-66/users/me/avatar",
      {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.avatarlink,
        }),
      }
    ).then(this._checkRes);
  }

  createNewCard(data) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-66/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.placename,
        link: data.placelink,
      }),
    }).then(this._checkRes);
  }

  //   лайк карточки

  addLike(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-66/cards/${cardId}/likes`,
      {
        method: "PUT",
        headers: {
          authorization: this._authorization,
        },
      }
    ).then(this._checkRes);
  }

  deleteLike(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-66/cards/${cardId}/likes`,
      {
        method: "DELETE",
        headers: {
          authorization: this._authorization,
        },
      }
    ).then(this._checkRes);
  }

  deleteCard(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-66/cards/${cardId}`,
      {
        method: "DELETE",
        headers: this._headers,
      }
    ).then(this._checkRes);
  }
}

//   getAppInfo() {} будет возвращать Promise.all с отработкой двух методов - получение всех карточек и получение данных пользователя
