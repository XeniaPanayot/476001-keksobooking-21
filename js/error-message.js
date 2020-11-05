'use strict';
// модуль созает DOM-элемент, который будет показывать сообщения об ошибках, произошедших по ходу загрузки данных.
// Дизайн DOM-элемента предлагается придумать самостоятельно.

(function () {
  const renderErrorMessage = function (error) {
    const map = document.querySelector(`.map__pins`);
    const errorElement = document.createElement(`span`);
    errorElement.classList.add(`error`);
    const errorText = document.createTextNode(error);
    errorElement.appendChild(errorText);
    errorElement.style.cssText = 'color: red';
    map.appendChild(errorElement);
  };

  window.errorMessage = {
    renderErrorMessage: renderErrorMessage,
  };
})();
