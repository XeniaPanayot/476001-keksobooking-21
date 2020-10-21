'use strict';
// модуль, который отрисовывает метку для активного состояния карты и передает координаты в соответствующий инпут формы

(function () {
  // const map = document.querySelector(`.map__pins`);
  const mapFaded = document.querySelector(`.map--faded`);
  const activePin = function () {
    if (!mapFaded) {
      activePin = document.querySelector(`.map__pin--main`);
      const activePinWidth = activePin.offsetWidth;
      const activePinPointerHeight = 22; // taken from ::after in style.css
      const activePinHeight = activePin.offsetHeight + activePinPointerHeight;

      // coordinates of the pointer
      const activePinPointerX = Math.round(activePinWidth / 2);
      const activePinPointerY = Math.round(activePinHeight / 2);
      const addressInput = document.querySelector(`#address`);
      const pinCoordinates = [activePinPointerX, activePinPointerY];

      addressInput.value = pinCoordinates;
    }
  };
  activePin();
})();
