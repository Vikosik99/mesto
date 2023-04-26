

//Объявление переменных
//Все переменные
const validationConfig = {
  formSelector: document.forms, // формы
  inputSelector: ".form__input", // input
  submitButtonSelector: ".form__button-save", // button
  inactiveButtonClass: "form__button-save_valid", // button valid
  inputErrorClass: "form__input_error", // input ошибка
  errorClass: "form__input-error_visible", // span
  errorTemplateSelector: ".form__input-error_type_", // span конкретный
};

//Объявление функций
//Функция включения валидации всех форм
function enableValidation(config) {
  const forms = Array.from(config.formSelector);
  forms.forEach((form) => {
    const inputList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);
    inputEventListener(
      inputList,
      submitButton,
      config.errorTemplateSelector,
      config.inactiveButtonClass,
      config.inputErrorClass,
      config.errorClass
    );
  });
}

function inputEventListener(
  inputList,
  submitButton,
  errorTemplateSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
) {
  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(
        input,
        errorTemplateSelector,
        inputErrorClass,
        errorClass
      );
      toggleButtonState(inputList, submitButton, inactiveButtonClass);
    });
  });
}

//Функция показа ошибок
function showInputError(errorTextElement, input, inputErrorClass, errorClass) {
  input.classList.add(inputErrorClass);
  errorTextElement.textContent = input.validationMessage;
  errorTextElement.classList.add(errorClass);
}

//Функция скрытия ошибок
function hideInputError(errorTextElement, input, inputErrorClass, errorClass) {
  input.classList.remove(inputErrorClass);
  errorTextElement.textContent = "";
  errorTextElement.classList.remove(errorClass);
}

//Проверка валидации интупов
function checkInputValidity(
  input,
  errorTemplateSelector,
  inputErrorClass,
  errorClass
) {
  const errorTextElement = document.querySelector(
    `${errorTemplateSelector}${input.name}`
  );
  if (input.validity.valid) {
    hideInputError(errorTextElement, input, inputErrorClass, errorClass);
  } else {
    showInputError(errorTextElement, input, inputErrorClass, errorClass);
  }
}

//Функция включения кнопки
function enableButton(submitButton, inactiveButtonClass) {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = true;
}

//Функция выключения кнопки
function disableButton(submitButton, inactiveButtonClass) {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = false;
}

function hasInValidInput(inputList) {
  return Array.from(inputList).every((input) => input.validity.valid);
}

//Функция изменения состояния кнопки
function toggleButtonState(inputList, submitButton, inactiveButtonClass) {
  if (!hasInValidInput(inputList)) {
    enableButton(submitButton, inactiveButtonClass);
  } else {
    disableButton(submitButton, inactiveButtonClass);
  }
}

// Функция обнуления ошибок из импутов
function resetFormErrors(
  form,
  { inputSelector, errorTemplateSelector, inputErrorClass, errorClass }
) {
  const formInputs = Array.from(
    form.querySelectorAll(validationConfig.inputSelector)
  );
  formInputs.forEach((input) => {
    const errorContainer = form.querySelector(
      `${validationConfig.errorTemplateSelector}${input.name}`
    ); // Сформированный селектор
    hideInputError(errorContainer, input, inputErrorClass, errorClass);
  });
}

//Вызов функции с переменными
enableValidation(validationConfig);
