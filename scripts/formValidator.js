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

  //Функция включения кнопки
  _enableButton() {
    //submitButton, inactiveButtonClass
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  //Функция выключения кнопки
  _disableButton() {
    //inactiveButtonClass
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _hasInValidInput() {
    //inputList
    return Array.from(this._inputList).every((input) => input.validity.valid);
  }

  //Функция изменения состояния кнопки
  _toggleButtonState(inputList, submitButton, inactiveButtonClass) {
    if (!this._hasInValidInput(inputList)) {
      this._enableButton(submitButton, inactiveButtonClass);
    } else {
      this._disableButton(submitButton, inactiveButtonClass);
    }
  }

  //Функция показа ошибок
  _showInputError(errorTextElement, input) {
    // , inputErrorClass, errorClass
    input.classList.add(this._inputErrorClass);
    errorTextElement.textContent = input.validationMessage;
    errorTextElement.classList.add(this._errorClass);
  }

  //Функция скрытия ошибок
  _hideInputError(errorTextElement, input) {
    // , inputErrorClass, errorClass
    input.classList.remove(this._inputErrorClass);
    errorTextElement.textContent = "";
    errorTextElement.classList.remove(this._errorClass);
  }

  //Проверка валидации интупов
  _checkInputValidity(input) {
    // errorTemplateSelector,inputErrorClass, errorClass
    const errorTextElement = this._form.querySelector(
      `${this._errorTemplateSelector}${input.name}`
    );
    if (input.validity.valid) {
      this._hideInputError(errorTextElement, input); // inputErrorClass, errorClass
    } else {
      this._showInputError(errorTextElement, input); // inputErrorClass, errorClass
    }
  }

  _inputEventListener() {
    // inputList,
    // submitButton,
    // errorTemplateSelector,
    // inactiveButtonClass,
    // inputErrorClass,
    // errorClass
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input); // errorTemplateSelector, inputErrorClass, errorClass
        this._toggleButtonState(); // inputList, submitButton, inactiveButtonClass
      });
    });
  }

  enableValidation() {
    // const forms = Array.from(this._formSelector);
    // forms.forEach((form) => {
    // this._inputList = this._form.querySelectorAll(this._inputSelector);
    // this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._inputEventListener();
    // inputList,
    // submitButton,
    // config.errorTemplateSelector,
    // config.inactiveButtonClass,
    // config.inputErrorClass,
    // config.errorClass
    // });
  }

  resetFormErrors() {
    //    form, { inputSelector, errorTemplateSelector, inputErrorClass, errorClass }
    // const formInputs = Array.from(
    //   form.querySelectorAll(validationConfig.inputSelector)
    // );
    this._inputList.forEach((input) => {
      const errorContainer = this._form.querySelector(
        `${this._errorTemplateSelector}${input.name}`
      ); // Сформированный селектор
      this._hideInputError(errorContainer, input); //inputErrorClass, errorClass
    });
  }
}

//Объявление переменных
//Все переменные
// const validationConfig = {     ПЕРЕНЕСЕНО
//   formSelector: document.forms, // формы  ПЕРЕНЕСЕНО
//   inputSelector: ".form__input", // input  ПЕРЕНЕСЕНО
//   submitButtonSelector: ".form__button-save", // button  ПЕРЕНЕСЕНО
//   inactiveButtonClass: "form__button-save_valid", // button valid  ПЕРЕНЕСЕНО
//   inputErrorClass: "form__input_error", // input ошибка  ПЕРЕНЕСЕНО
//   errorClass: "form__input-error_visible", // span  ПЕРЕНЕСЕНО
//   errorTemplateSelector: ".form__input-error_type_", // span конкретный  ПЕРЕНЕСЕНО
// };

//Объявление функций
//Функция включения валидации всех форм
// function Validation(config) {
//   const forms = Array.from(config.formSelector);
//   forms.forEach((form) => {
//     const inputList = form.querySelectorAll(config.inputSelector);   ПЕРЕНЕСЕНО
//     const submitButton = form.querySelector(config.submitButtonSelector);    ПЕРЕНЕСЕНО
//     inputEventListener(
//       inputList,
//       submitButton,
//       config.errorTemplateSelector,
//       config.inactiveButtonClass,
//       config.inputErrorClass,
//       config.errorClass
//     );
//   });
// }

// function inputEventListener(
//   inputList,
//   submitButton,
//   errorTemplateSelector,
//   inactiveButtonClass,
//   inputErrorClass,
//   errorClass
// ) {
//   inputList.forEach((input) => {
//     input.addEventListener("input", () => {
//       checkInputValidity(
//         input,
//         errorTemplateSelector,
//         inputErrorClass,
//         errorClass
//       );
//       toggleButtonState(inputList, submitButton, inactiveButtonClass);
//     });
//   });
// }

// //Функция показа ошибок
// function showInputError(errorTextElement, input, inputErrorClass, errorClass) {
//   input.classList.add(inputErrorClass);
//   errorTextElement.textContent = input.validationMessage;
//   errorTextElement.classList.add(errorClass);
// }

// //Функция скрытия ошибок
// function hideInputError(errorTextElement, input, inputErrorClass, errorClass) {
//   input.classList.remove(inputErrorClass);
//   errorTextElement.textContent = "";
//   errorTextElement.classList.remove(errorClass);
// }

// //Проверка валидации интупов
// function checkInputValidity(
//   input,
//   errorTemplateSelector,
//   inputErrorClass,
//   errorClass
// ) {
//   const errorTextElement = document.querySelector(
//     `${errorTemplateSelector}${input.name}`
//   );
//   if (input.validity.valid) {
//     hideInputError(errorTextElement, input, inputErrorClass, errorClass);
//   } else {
//     showInputError(errorTextElement, input, inputErrorClass, errorClass);
//   }
// }

// //Функция включения кнопки
// function enableButton(submitButton, inactiveButtonClass) {
//   submitButton.classList.remove(inactiveButtonClass);
//   submitButton.disabled = true;
// }

// //Функция выключения кнопки
// function disableButton(submitButton, inactiveButtonClass) {
//   submitButton.classList.add(inactiveButtonClass);
//   submitButton.disabled = false;
// }

// function hasInValidInput(inputList) {
//   return Array.from(inputList).every((input) => input.validity.valid);
// }

// //Функция изменения состояния кнопки
// function toggleButtonState(inputList, submitButton, inactiveButtonClass) {
//   if (!hasInValidInput(inputList)) {
//     enableButton(submitButton, inactiveButtonClass);
//   } else {
//     disableButton(submitButton, inactiveButtonClass);
//   }
// }

// Функция обнуления ошибок из импутов
// function resetFormErrors(
//   form,
//   { inputSelector, errorTemplateSelector, inputErrorClass, errorClass }
// ) {
//   const formInputs = Array.from(
//     form.querySelectorAll(validationConfig.inputSelector)
//   );
//   formInputs.forEach((input) => {
//     const errorContainer = form.querySelector(
//       `${validationConfig.errorTemplateSelector}${input.name}`
//     ); // Сформированный селектор
//     hideInputError(errorContainer, input, inputErrorClass, errorClass);
//   });
// }

//Вызов функции с переменными
// enableValidation(validationConfig);
