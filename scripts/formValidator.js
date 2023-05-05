//Классы
export default class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector; // input
    this._submitButtonSelector = config.submitButtonSelector; // button
    this._inactiveButtonClass = config.inactiveButtonClass; // button valid
    this._inputErrorClass = config.inputErrorClass; // input ошибка
    this._errorClass = config.errorClass; // span
    this._errorTemplateSelector = config.errorTemplateSelector; // span конкретный
    this._form = form; // формы
    this._inputList = form.querySelectorAll(this._inputSelector); // перенесли из enableValidation
    this._submitButton = form.querySelector(this._submitButtonSelector); // перенесли из enableValidation
  }

  _inputEventListener() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this.toggleButtonState();
      });
    });
  }

  //Функция включения кнопки
  _enableButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  //Функция выключения кнопки
  _disableButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  //Проверка валидации интупов
  _checkInputValidity(input) {
    const errorTextElement = this._form.querySelector(
      `${this._errorTemplateSelector}${input.name}`
    );
    if (input.validity.valid) {
      this._hideInputError(errorTextElement, input);
    } else {
      this._showInputError(errorTextElement, input);
    }
  }

  //Функция показа ошибок
  _showInputError(errorTextElement, input) {
    input.classList.add(this._inputErrorClass);
    errorTextElement.textContent = input.validationMessage;
    errorTextElement.classList.add(this._errorClass);
  }

  //Функция скрытия ошибок
  _hideInputError(errorTextElement, input) {
    input.classList.remove(this._inputErrorClass);
    errorTextElement.textContent = "";
    errorTextElement.classList.remove(this._errorClass);
  }

  _hasInValidInput() {
    return Array.from(this._inputList).every((input) => input.validity.valid);
  }

  //Функция изменения состояния кнопки
  toggleButtonState(inputList, submitButton, inactiveButtonClass) {
    if (!this._hasInValidInput(inputList)) {
      this._enableButton(submitButton, inactiveButtonClass);
    } else {
      this._disableButton(submitButton, inactiveButtonClass);
    }
  }

  enableValidation() {
    this._inputEventListener();
  }

  resetFormErrors() {
    this._inputList.forEach((input) => {
      const errorContainer = this._form.querySelector(
        `${this._errorTemplateSelector}${input.name}`
      ); // Сформированный селектор
      this._hideInputError(errorContainer, input);
    });
  }
}
