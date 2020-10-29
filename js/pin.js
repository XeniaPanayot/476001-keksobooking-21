'use strict';
// модуль, который отрисовывает метки предложений на основе шаблона и передает координаты большой метки в соответствующий инпут формы

(function () {
  const map = document.querySelector(`.map__pins`);
  const pinTemplate = document.querySelector(`#pin`).content.querySelector(`button`);

  // код, который получает данные с сервера
  const onSuccess = function (data) {
    console.log(`data received` + data);

  };
  const onError = function () {
    console.log(`Err message`);
  }

  // const fragment = document.createDocumentFragment();

  // // код, который содает маленькие пины


  // код, который размещает большой дефолтный пин
  const pinButton = document.querySelector(`.map__pin--main`);

  // sizes of the pin for DEFAULT position
  const pinWidth = pinButton.offsetWidth;
  const pinHeight = pinButton.offsetHeight;

  // center of the pin for DEFAULT position
  const pinCenterX = Math.round(pinButton.offsetLeft + pinWidth / 2);
  const pinCenterY = Math.round(pinButton.offsetHeight + pinHeight / 2);
  const addressInput = document.querySelector(`#address`);
  const pinCoordinates = [pinCenterX, pinCenterY];

  addressInput.value = pinCoordinates;
})();

