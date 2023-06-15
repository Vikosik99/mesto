(()=>{"use strict";document.querySelector(".popup__button-close_redaction");var e=document.querySelector(".popup__button-close_add"),t=document.querySelector(".popup__button-close_open-size"),n=(document.querySelector(".form__input_kye_username"),document.querySelector(".form__input_kye_status"),document.querySelector(".profile__button-edit")),r=document.querySelector(".profile__button-pluse"),o=document.querySelector(".profile__avatar-button"),i=(document.querySelector(".element__delete"),document.querySelector(".form__button-save_sure"),document.querySelector(".form_redaction"),document.querySelector(".form_add")),u=(i.querySelector(".form__input_kye_placename"),i.querySelector(".form__input_kye_placelink"),document.querySelector(".popup__container_open-size"),document.querySelector(".popup__element-img"),document.querySelector(".popup__element-text"),document.querySelector("#cardTemplete")),c=(i.querySelectorAll(".form__input"),i.querySelector(".form__button-save"),{inputSelector:".form__input",submitButtonSelector:".form__button-save",inactiveButtonClass:"form__button-save_valid",inputErrorClass:"form__input_error",errorClass:"form__input-error_visible",errorTemplateSelector:".form__input-error_type_"}),a=document.forms.formPopup,l=document.forms.formAddPopup,s=document.forms.formChangeAvatar;function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,m(r.key),r)}}function y(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}document.forms.formSure;var h=function(){function e(t,n,r,o,i,u){var c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"deleteCard",(function(){c._cloneElement.remove(),c._cloneElement=null})),y(this,"_addLike",(function(){c._conditionLike(c._likeElement,c._cardId)})),y(this,"_openPopupOS",(function(){c._handleCardClick({placename:c._name,placelink:c._link})})),this._name=t.name,this._link=t.link,this._userid=t.userid,this.userid=u,this._otherUserid=t.owner._id,this._likes=t.likes,this._arrayLengthLike=t.likes.length,this._cardTemplate=n,this._handleCardClick=r,this._conditionLike=o,this._cardId=t._id,this._cloneElement=this._getCloneTemplate(),this._elementImg=this._cloneElement.querySelector(".element__img"),this._elementText=this._cloneElement.querySelector(".element__text"),this._deleteElementButton=this._cloneElement.querySelector(".element__delete"),this._formButtonSaveSure=document.querySelector(".form__button-save_sure"),this._likeElement=this._cloneElement.querySelector(".element__like"),this._likeCounter=this._cloneElement.querySelector(".element__like-text"),this._handleDeleteCard=i}var t,n;return t=e,(n=[{key:"createCard",value:function(){return this._elementImg.setAttribute("src",this._link),this._elementImg.setAttribute("alt",this._name),this._elementText.textContent=this._name,this._setEventListener(),this._checkWhoseCard(),this._checkStatusLike(),this._cloneElement}},{key:"_getCloneTemplate",value:function(){return this._cardTemplate.content.querySelector(".element").cloneNode(!0)}},{key:"addLikePublic",value:function(e){this._likeElement.classList.toggle("element__like_active"),this._likeCounter.textContent=e.length}},{key:"_setEventListener",value:function(){var e=this;this._deleteElementButton.addEventListener("click",(function(){return e._handleDeleteCard(e._cardId)})),this._likeElement.addEventListener("click",this._addLike),this._elementImg.addEventListener("click",this._openPopupOS)}},{key:"_checkWhoseCard",value:function(){this._userid!==this._otherUserid&&this._deleteElementButton.remove()}},{key:"_checkStatusLike",value:function(){var e=this;this._likes.forEach((function(t){t._id!==e.userid||e._likeElement.classList.add("element__like_active")})),this._likeCounter.textContent=this._arrayLengthLike}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._errorTemplateSelector=t.errorTemplateSelector,this._form=n,this._inputList=n.querySelectorAll(this._inputSelector),this._submitButton=n.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_inputEventListener",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"_enableButton",value:function(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!0}},{key:"_disableButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!1}},{key:"_checkInputValidity",value:function(e){var t=this._form.querySelector("".concat(this._errorTemplateSelector).concat(e.name));e.validity.valid?this._hideInputError(t,e):this._showInputError(t,e)}},{key:"_showInputError",value:function(e,t){t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e,t){t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}},{key:"_hasInValidInput",value:function(){return Array.from(this._inputList).every((function(e){return e.validity.valid}))}},{key:"toggleButtonState",value:function(e,t,n){this._hasInValidInput(e)?this._disableButton(t,n):this._enableButton(t,n)}},{key:"enableValidation",value:function(){this._inputEventListener()}},{key:"resetFormErrors",value:function(){var e=this;this._inputList.forEach((function(t){var n=e._form.querySelector("".concat(e._errorTemplateSelector).concat(t.name));e._hideInputError(n,t)}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}function k(e,t,n){return(t=g(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===b(t)?t:String(t)}var w=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"_handleByEscClose",(function(e){"Escape"===e.key&&n.close()})),k(this,"_handleClosePopup",(function(){n.close()})),k(this,"_handleCloseByOverlay",(function(e){e.target===e.currentTarget&&n.close()})),this._popupSelector=document.querySelector(t),this._popupButtonClose=this._popupSelector.querySelector(".popup__button-close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleByEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleByEscClose)}},{key:"setEventListeners",value:function(){this._popupButtonClose.addEventListener("click",this._handleClosePopup),this._popupSelector.addEventListener("click",this._handleCloseByOverlay)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function L(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===E(t)?t:String(t)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(r){var o=j(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}(this,e)});function i(e){var t,n,r,u,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),r=C(n=o.call(this,e)),c=function(e){n._popupElementImg.src=e.placelink,n._popupElementImg.alt=e.placename,n._popupElementText.textContent=e.placename,P((t=C(n),j(i.prototype)),"open",t).call(t)},(u=L(u="open"))in r?Object.defineProperty(r,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[u]=c,n._popupElementImg=n._popupSelector.querySelector(".popup__element-img"),n._popupElementText=n._popupSelector.querySelector(".popup__element-text"),n}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(w);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var q=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._elementsContainer=document.querySelector(n)}var t,n;return t=e,(n=[{key:"createCardFromArray",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._elementsContainer.append(e)}},{key:"addItemNew",value:function(e){this._elementsContainer.prepend(e)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var A=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userInfoSelectors=t,this._profileUsername=document.querySelector(this._userInfoSelectors.profileUsername),this._profileStatus=document.querySelector(this._userInfoSelectors.profileStatus),this._profileAvatar=document.querySelector(this._userInfoSelectors.profileAvatar)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{username:this._profileUsername.textContent,status:this._profileStatus.textContent}}},{key:"setUserInfo",value:function(e){var t=e.avatar,n=e.username,r=e.status;e.id,this._profileAvatar.src=t,this._profileUsername.textContent=n,this._profileStatus.textContent=r}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==U(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},z.apply(this,arguments)}function V(e,t){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},V(e,t)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._colbeckSubmitForm=t,n._form=n._popupSelector.querySelector(".form"),n._inputAll=n._form.querySelectorAll(".form__input"),n._formButtonSave=n._form.querySelector(".form__button-save"),n._formButtonSaveDefault=n._formButtonSave.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._value={},this._inputAll.forEach((function(t){e._value[t.name]=t.value})),this._value}},{key:"setInputValues",value:function(e){this._inputAll.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;z(F(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._formButtonSave.textContent="".concat(e._formButtonSave.textContent,"..."),e._colbeckSubmitForm(e._getInputValues()),e.close()}))}},{key:"setDefault",value:function(){this._formButtonSave.textContent=this._formButtonSaveDefault}},{key:"close",value:function(){z(F(u.prototype),"close",this).call(this),this._form.reset()}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(w);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==J(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=$(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},M.apply(this,arguments)}function W(e,t){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},W(e,t)}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},$(e)}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&W(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=$(r);if(o){var n=$(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._functionSubmit=t,n._form=n._popupSelector.querySelector(".form"),n}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._functionSubmit=e}},{key:"setEventListeners",value:function(){var e=this;M($(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._functionSubmit(),e.close()}))}},{key:"open",value:function(){M($(u.prototype),"open",this).call(this)}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(w);function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==K(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===K(o)?o:String(o)),r)}var o}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Z=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.baseUrl,this._headers=t.headers,this._authorization=t.headers.authorization}var t,n;return t=e,(n=[{key:"_checkRes",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-66/users/me",{headers:{authorization:this._authorization}}).then(this._checkRes)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then(this._checkRes)}},{key:"setUserInfo",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-66/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.username,about:e.status})}).then(this._checkRes)}},{key:"setUserAvatar",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-66/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatarlink})}).then(this._checkRes)}},{key:"createNewCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-66/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.placename,link:e.placelink})}).then(this._checkRes)}},{key:"addLike",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-66/cards/".concat(e,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkRes)}},{key:"deleteLike",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-66/cards/".concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkRes)}},{key:"deleteCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-66/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkRes)}}])&&Q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"b6c4512c-817a-42b9-b0f0-214f2963b61f","Content-Type":"application/json"}}),ee=Z.getInitialCards();function te(e){var t=new h(e,u,re.open,(function(e,n){e.classList.contains("element__like_active")?Z.addLike(n).then((function(e){t.addLikePublic(e.likes)})).catch((function(e){return console.log("При добавлении лайка: ".concat(e))})):Z.deleteLike(n).then((function(e){t.addLikePublic(e.likes)})).catch((function(e){return console.log("При удалении лайка: ".concat(e))}))}),(function(e){fe.open(),fe.setSubmitAction((function(){Z.deleteCard(e).then((function(){t.deleteCard(),fe.close()})).catch((function(e){return console.log("При удалении карточки: ".concat(e))}))}))}));return t.createCard()}var ne=new q((function(e){ne.addItem(te(e))}),".elements"),re=new T(".popup_open-size");re.setEventListeners();var oe=new A({profileUsername:".profile__username",profileStatus:".profile__status",profileAvatar:".profile__avatar"}),ie=new N(".popup_redaction",(function(e){Z.setUserInfo(e).then((function(e){oe.setUserInfo({status:e.about,avatar:e.avatar,username:e.name})})).catch((function(e){return console.log("При передачи данных на страницу: ".concat(e))})).finally((function(){return ie.setDefault()}))}));ie.setEventListeners();var ue=new N(".popup_add",(function(e){Promise.all([ee,Z.createNewCard(e)]).then((function(e){var t=X(e,2),n=t[0],r=t[1];r.userid=n._id,ne.addItemNew(te(r)),ue.close()})).catch((function(e){return console.log("При добавлении карточек: ".concat(e))})).finally((function(){return ue.setDefault()}))}));ue.setEventListeners();var ce=new N(".popup_change-avatar",(function(e){Z.setUserAvatar(e).then((function(e){oe.setUserInfo({status:e.about,avatar:e.avatar,username:e.name})})).catch((function(e){return console.log("При обновлении аватара: ".concat(e))})).finally((function(){return ce.setDefault()}))}));ce.setEventListeners();var ae=new d(c,a);ae.enableValidation();var le=new d(c,l);le.enableValidation();var se=new d(c,s);se.enableValidation(),n.addEventListener("click",(function(){ae.resetFormErrors(),ie.setInputValues(oe.getUserInfo()),ie.open()}));var fe=new G(".popup_sure");fe.setEventListeners(),o.addEventListener("click",(function(){se.resetFormErrors(),se.toggleButtonState(),ce.open()})),r.addEventListener("click",(function(){le.resetFormErrors(),le.toggleButtonState(),ue.open()})),e.addEventListener("click",(function(){ue.close()})),t.addEventListener("click",(function(){re.close})),Promise.all([ee,Z.getCards()]).then((function(e){var t=X(e,2),n=t[0],r=t[1];r.forEach((function(e){return e.userid=n._id})),oe.setUserInfo({status:n.about,avatar:n.avatar,username:n.name}),ne.createCardFromArray(r)})).catch((function(e){return console.log("При переносе данных с сервера: ".concat(e))}))})();