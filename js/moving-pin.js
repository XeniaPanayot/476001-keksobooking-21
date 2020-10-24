'use strict';
//добавьте обработчики событий mousedown, mousemove и mouseup на метку.

// Обработчики mousemove и mouseup должны добавляться только при вызове обработчика mousedown.

// Обработчики mousemove и mouseup должны запускать логику изменения положения метки:
//в нём должны вычисляться новые координаты метки на основании смещения, применяться через стили к элементу и записываться в поле адреса (с поправкой на то, что в адрес записываются координаты острого конца).

// Учтите, расчёт координат метки и их запись в поле адреса должна
// дублироваться и в обработчике mouseup, потому что
// в некоторых случаях пользователь может нажать мышь на метке,
// но никуда её не переместить.
// Напишите универсальную функцию расчёта координат, чтобы избавиться от дублирования кода.

// Ещё один момент касается ограничения перемещения: не забудьте сделать так, чтобы метку невозможно было переместить за пределы карты (см. пункт 4.4 и пункт 4.5).

// Вспомните, в прошлом задании вы уже добавляли обработчик на событие mousedown, который переводил страницу в активный режим. Теперь, когда у вас есть синхронизация с координатами, вам нужно выбрать стратегию — использовать несколько обработчиков или один со сложной логикой.

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
  console.log(limits);

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
          newCoordinates.y = limits.bottom
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
    }

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      isDragged = false
      findPinCoordinates(upEvt);

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });
})();

