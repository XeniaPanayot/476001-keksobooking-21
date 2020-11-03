'use strict';
// отрисовать маленькие пины и обработать клик - окрытие попапа карточчки
(function () {
  const renderSmallPins = function () {
    const fragment = document.createDocumentFragment();
    const pinTemplate = document.querySelector(`#pin`).content.querySelector(`button`);
    const map = document.querySelector(`.map__pins`);

    for (let i = 0; i < 8; i++) {
      const clonedPin = pinTemplate.cloneNode(true);
      // обработка клика для показа попапа
      clonedPin.addEventListener(`click`, function () {
        window.renderPopup.renderOfferPopup(i);

      });

      clonedPin.style.left = window.load.cardsArray[i].location.x + `px`;
      clonedPin.style.top = window.load.cardsArray[i].location.y + `px`;
      const picture = clonedPin.querySelector(`img`);
      picture.src = window.load.cardsArray[i].author.avatar;
      picture.alt = window.load.cardsArray[i].offer.description;
      fragment.appendChild(clonedPin);
    }
    map.appendChild(fragment);

  };
  window.renderPin = {
    renderSmallPins
  };
})();

