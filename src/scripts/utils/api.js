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

  getCards() {
    // Cоздание карточки
    return fetch("https://mesto.nomoreparties.co/v1/cohort-66/cards", {
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkRes);
  }
}

//   лайк карточки,

//   удаление
//   и так далее. Каждый метод должен ВОЗВРАЩАТЬ промис, например в виде исполнения функции fetch

//   getAppInfo() {} будет возвращать Promise.all с отработкой двух методов - получение всех карточек и получение данных пользователя
