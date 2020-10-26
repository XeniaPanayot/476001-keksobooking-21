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
  window.load(function () {
    const fragment = document.createDocumentFragment();

  for (let i = 0; i < 8; i++) {
    const clonedPin = pinTemplate.cloneNode(true);
    clonedPin.style.left = window.card.cardsArray[i].location.x + `px`;
    clonedPin.style.top = window.card.cardsArray[i].location.y + `px`;
    const picture = clonedPin.querySelector(`img`);
    picture.src = window.card.cardsArray[i].author.avatar;
    picture.alt = window.card.cardsArray[i].offer.description;
    fragment.appendChild(clonedPin);
  }
  map.appendChild(fragment);
  }, /*onError*/function () {});



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

