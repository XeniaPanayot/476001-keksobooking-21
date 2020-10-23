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

  pinButton.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();
    let startCoordinates = {
      x: evt.clientX + window.pin.activePinX,
      y: evt.clientY + window.pin.activePinY
    };
    addressInput.value = [startCoordinates.x, startCoordinates.y];

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      const shift = {
        x: startCoordinates.x - moveEvt.clientX,
        y: startCoordinates.y - moveEvt.clientY
      };
      startCoordinates = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      console.log(startCoordinates.x, startCoordinates.y);

      addressInput.value = [startCoordinates.x, startCoordinates.y];

      pinButton.style.top = (pinButton.offsetTop - shift.y) + `px`;
      pinButton.style.left = (pinButton.offsetLeft - shift.x) + `px`;
    }

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);

  });

})();
