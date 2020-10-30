'use strict';
// модуль, который размещает большой дефолтный пин и передает координаты в соответствующий инпут формы

(function () {
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

