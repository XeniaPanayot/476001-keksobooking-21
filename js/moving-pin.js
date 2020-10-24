'use strict';

(function () {
  const map = document.querySelector(`.map__pins`);
  const pinButton = document.querySelector(`.map__pin--main`);
  const addressInput = document.querySelector(`#address`);

  // флаг перетаскивания
  let isDragged = false;

  // limits of the map area
  const limits = {
    top: 130,
    right: map.offsetWidth + map.offsetLeft - pinButton.offsetWidth,
    bottom: 630,
    left: map.offsetLeft
  };

  pinButton.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();
    isDragged = true;

    let startCoordinates = {
      x: evt.clientX + window.pin.activePinX,
      y: evt.clientY + window.pin.activePinY
    };
    addressInput.value = [startCoordinates.x, startCoordinates.y];

    const findPinCoordinates = function (someEvt) {
      startCoordinates = {
        x: someEvt.clientX,
        y: someEvt.clientY
      };
      addressInput.value = [startCoordinates.x, startCoordinates.y];
    };

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
        if (isDragged) {
        // put the pin to the new location
        const relocate = function (newCoordinates) {
          pinButton.style.left = newCoordinates.x + `px`;
          pinButton.style.top = newCoordinates.y + `px`;
        };
        // condition pin's movements and find new location for the pin when it cant go further
        const getNewCoordinates = function () {
          let newCoordinates = {
            x: limits.left,
            y: limits.top
          };
          if (startCoordinates.x > limits.right) {
            newCoordinates.x = limits.right;
          } else if (startCoordinates.x > limits.left) {
            newCoordinates.x = startCoordinates.x;
          }
          if (startCoordinates.y > limits.bottom) {
            newCoordinates.y = limits.bottom;
          } else if (startCoordinates.y > limits.top) {
            newCoordinates.y = startCoordinates.y;
          }
        relocate(newCoordinates);
        };
        getNewCoordinates();
      }

      const shift = {
        x: startCoordinates.x - moveEvt.clientX,
        y: startCoordinates.y - moveEvt.clientY
      };
      findPinCoordinates(moveEvt);

      pinButton.style.top = (pinButton.offsetTop - shift.y) + `px`;
      pinButton.style.left = (pinButton.offsetLeft - shift.x) + `px`;
    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      isDragged = false;
      findPinCoordinates(upEvt);

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });
})();

