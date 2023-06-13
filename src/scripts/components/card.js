//Классы
export default class Card {
  constructor(
    dataUserServer,
    cardTemplate,
    handleCardClick,
    conditionLike,
    handleDeleteCard
  ) {
    // this._card = card;
    this._name = dataUserServer.name;
    this._link = dataUserServer.link;
    this._userid = dataUserServer.userid;
    this._otherUserid = dataUserServer.owner._id;
    this._likes = dataUserServer.likes; // вытащи из данных карточки массив лайков и сохрани его в отдельном свойстве
    this._arrayLengthLike = dataUserServer.likes.length;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._conditionLike = conditionLike;
    this._cardId = dataUserServer._id;
    this._cloneElement = this._getCloneTemplate();
    this._elementImg = this._cloneElement.querySelector(".element__img");
    this._elementText = this._cloneElement.querySelector(".element__text");
    this._deleteElementButton =
      this._cloneElement.querySelector(".element__delete");
    this._formButtonSaveSure = document.querySelector(
      ".form__button-save_sure"
    );
    this._likeElement = this._cloneElement.querySelector(".element__like");
    this._likeCounter = this._cloneElement.querySelector(".element__like-text");

    this._handleDeleteCard = handleDeleteCard;
  }

  createCard() {
    this._elementImg.setAttribute("src", this._link);
    this._elementImg.setAttribute("alt", this._name);

    this._elementText.textContent = this._name;

    this._setEventListener();

    this._checkWhoseCard();

    this._checkStatusLike();

    return this._cloneElement;
  }

  _getCloneTemplate() {
    const newcard = this._cardTemplate.content
      .querySelector(".element")
      .cloneNode(true);
    return newcard;
  }

  // // Функция удаления карточек
  _deleteCardCick = () => {
    // const buttonDelete = event.target;
    // const element = buttonDelete.closest(".element");
    this._cloneElement.remove();
    this._cloneElement = null;
  };

  // Функция добавления лайка
  _addLike = () => {
    this._conditionLike(this._likeElement, this._cardId);
    // event.target.classList.toggle("element__like_active");
  };

  addLikeP(likes) {
    // likes.target.classList.toggle("element__like_active");
    this._likeElement.classList.toggle("element__like_active");
    this._likeCounter.textContent = likes.length;
  }

  _openPopupOS = () => {
    this._handleCardClick({ placename: this._name, placelink: this._link });
  };

  _setEventListener() {
    // Обработчик открытия попапа sure
    this._deleteElementButton.addEventListener("click", this._handleDeleteCard);
    // Обработчик удаления карточки
    this._formButtonSaveSure.addEventListener("click", this._deleteCardCick);

    // // Обработчик лайка
    this._likeElement.addEventListener("click", this._addLike);
    // Обработка открытия попапа с картинкой
    this._elementImg.addEventListener("click", this._openPopupOS);
  }

  //Проверка кем добавлена карточка
  _checkWhoseCard() {
    if (this._userid !== this._otherUserid) {
      this._deleteElementButton.remove();
    }
  }

  _checkStatusLike() {
    this._likes.forEach((element) => {
      if (element._id === this.userid) {
        this._likeElement.classList.add("element__like_active");
        return;
      }
      //  else {
      //   this._likeElement.classList.remove("element__like_active");
      // }
    });
    this._likeCounter.textContent = this._arrayLengthLike;
  }

  // Проверка статуса лайка
  //  отвечать за обновление счетчика лайков. этот метод будет отвечать полностью за визуальное отображение лайков
  // _clike() {
  //   return (
  //     this._like.filter((item) => {
  //       item._id === this._userid;
  //     })
  //   );
  // }

  // _checkStatusLike(event) {
  //   this._clike = event.this._like.filter((item) => {
  //     return item._id === this.userid;
  //   });

  //   this._cloneElement.querySelector(".element__like-text").textContent =
  //     this._like.lenght;

  //   if (this._clike()) {
  //     this._likeElement.classList.add("element__like_active");
  //     return;
  //   } else {
  //     this._likeElement.classList.remove("element__like_active");
  //   }
  // }

  // setLikesInfo(){
  // - обновлять массив лайков в свойствах класса
  // - вызывать метод о котором я написал в начале (его надо использовать и при обновлении лайков, и при начальной отрисовке)
  // }
}

// вот что этот метод должен делать:
// - выставлять нужное количество лайков в счетчик
// - проверять, есть ли среди лайков тот, который был поставлен текущим пользователем и исходя из этого выставлять нужный класс индикатору лайка

// при лайке - тебе надо:
// - вызывать метод отправки лайков
// - получать ответ сервера
// - при корректном ответе, надо взять новый массив лайков и передавать этот массив в отдельный публичный метод

// то есть, надо написать по крайней мере два новых метода
// - один для визуальной отрисовки контейнера с лайками
// - один для обновления информации по лайкам (и вызова первого метода)
