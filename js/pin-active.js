'use strict';
// sizes of the pin for the ACTIVE map position

(function () {
  // const map = document.querySelector(`.map__pins`);
  const mapFaded = document.querySelector(`.map--faded`);
  const activePin = function () {
    if (!mapFaded) {
      console.log(`Small pin`);
      const activePin = document.querySelector(`.map__pin--main`)
      console.log(activePin);
      const activePinWidth = activePin.offsetWidth;
      console.log(activePinWidth);
      const activePinPointerHeight = 22; // taken from ::after in style.css
      const activePinHeight = activePin.offsetHeight + activePinPointerHeight;
      console.log(activePinHeight);

      // coordinates of the pointer
      const activePinPointerX = Math.round(activePinWidth / 2);
      const activePinPointerY = Math.round(activePinHeight / 2);
      console.log(activePinPointerX);
      console.log(activePinPointerY);
    }
  };
activePin();
})();
