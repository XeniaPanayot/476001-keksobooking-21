'use strict';
// функция отправки данных формы на сервер `https://21.javascript.pages.academy/keksobooking`

// Задача
// Доработайте обработчик отправки формы, который вы делали в задании «Личный проект: доверяй, но проверяй», так
// чтобы он отменял действие формы по умолчанию
// и отправлял данные формы на сервер посредством XHR https://21.javascript.pages.academy/keksobooking.

// После успешной передачи данных на сервер
// верните страницу в неактивное состояние и сбросьте форму.

// Если отправка данных прошла успешно, показывается соответствующее сообщение.
// Разметка сообщения находится блоке #success внутри шаблона template.
// Сообщение должно исчезать по нажатию на клавишу Esc и по клику на произвольную область экрана.
// Если при отправке данных произошла ошибка запроса, покажите соответствующее сообщение.
// Добавьте обработчик кнопке очистки формы.

(function () {
  const URL = `https://21.javascript.pages.academy/keksobooking`;
  const form = document.querySelector(`.ad-form`);

  // on submit messages
  // const renderOnSuccessMessage = function () {
  //   const onSuccessMessageTemplate = document.querySelector(`#success`).content.querySelector(`div`);
  //   const clonedSuccessMessage = onSuccessMessageTemplate.cloneNode(true);
  //   map.addEventListener(`click`, function () {
  //     clonedSuccessMessage.remove();
  //   });

  //   document.addEventListener(`keydown`, function (evt) {
  //     if (evt.key === `Escape`) {
  //       clonedSuccessMessage.remove();
  //     }
  //   });
  //   const fragment = document.createDocumentFragment();
  //   fragment.appendChild(clonedSuccessMessage);
  //   map.appendChild(fragment);
  // };

  // const renderOnErrorMessage = function () {
  //   const onErrorMessageTemplate = document.querySelector(`#error`).content.querySelector(`div`);
  //   const errorMessageBtn = clonedErrorMessage.querySelector(`.error__button`);
  //   const clonedErrorMessage = onErrorMessageTemplate.cloneNode(true);
  //   // обработка закрытия сообщения об ошибке
  //   map.addEventListener(`click`, function () {
  //     clonedErrorMessage.remove();
  //   });
  //   errorMessageBtn.addEventListener(`click`, function () {
  //     clonedErrorMessage.remove();
  //   });

  //   document.addEventListener(`keydown`, function (evt) {
  //     if (evt.key === `Escape`) {
  //       clonedErrorMessage.remove();
  //     }
  //   });
  //   const fragment = document.createDocumentFragment();
  //   fragment.appendChild(clonedErrorMessage);
  //   map.appendChild(fragment);
  // };

  // отправить данные на сервер и, выполнить действия в случае успешной отправки или ошибки
  // window.sendFormData = function (data, onSuccess) {
  //   const xhr = new XMLHttpRequest();
  //   xhr.responseType = `json`;
  //   xhr.addEventListener(`load`, function () {
  //     onSuccess(xhr.response);
  //     // console.log(`data loaded`);
  //   });
  //   xhr.open(`POST`, URL);
  //   xhr.send(data);
  // };

  // window.sendFormData(new FormData(form), function () {
  //   // console.log(`sth happening`);
  // });
})();
